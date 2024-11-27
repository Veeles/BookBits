import express from 'express';
import pg from 'pg';
import axios from 'axios';

const app = express();
const port = 3000;
const user = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

let isbn;

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

async function getDetails(isbn){

};



app.get('/', (req,res) => {
    res.render('index.ejs')
});

app.get('/add', (req,res) => {
    res.render('add.ejs')
});

app.post('/add', (req,res) => {
    console.log(req.body)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});