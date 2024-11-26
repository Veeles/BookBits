import express from 'express';
import pg from 'pg';
import axios from 'axios';

const app = express();
const port = 3000;
let isbn

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

async function getDetails(isbn){

}

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});