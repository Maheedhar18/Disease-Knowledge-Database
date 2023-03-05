const express = require('express');
const path = require('path');
const feedbackRouter = require('./routes/feedbackRoutes');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.get('/', function(req, res) {
    res.render('index');
});


app.use('/contact', feedbackRouter);

module.exports = app;