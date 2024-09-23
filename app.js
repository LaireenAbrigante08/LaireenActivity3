const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./routes/routes'); 

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Router); 
app.use(express.static('public'));

app.listen(3003, () => {
    console.log('Server initialized on http://localhost:3003');
});