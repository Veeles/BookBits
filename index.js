import express from 'express';
import pg from 'pg';
import axios from 'axios';
import 'dotenv/config';

const app = express();
const port = 3000;
const user = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
user.connect()


app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());

async function getBooks(){
    let books = [];
    const result = await user.query('SELECT * FROM book LIMIT 8');
    result.rows.forEach((book) => {
        books.push(book);
    });
    return books

};



app.get('/', async (req,res) => {
    const books = await getBooks();
    res.render('index.ejs', {books: books})
});

app.get('/add', (req,res) => {
    res.render('add.ejs')
});

app.post('/test', async (req,res) => {
    
    let data = {
        name: 'dudu',
        password: 'tusek'
    }
    
    return await res.json(data)
});

app.post('/add', async (req,res) => {
    let returnResult = {
        success: false,
    }
    const isbn = req.body['isbn'];
    const author = req.body['author'];
    const title = req.body['title'];
    try{
        const result = await axios.get(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
        if(result.status == 200){
            try{
                const addBook = await user.query('INSERT INTO book (title, author, image) VALUES ($1, $2, $3)', [title, author, `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`]);
                returnResult = {
                    success: true,
                }
                res.json(returnResult);
            } catch (err){
                res.json(returnResult)
                console.log(err);
            };
        } else{
            res.json(returnResult)
            console.log(result.status);
        };
    } catch (err){
        res.json(returnResult)
        console.log(err);
    };

});

app.get('/about', (req,res) => {
    res.render('about.ejs')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});