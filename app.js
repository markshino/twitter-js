const express = require('express');
const app = express();
const volleyball = require('volleyball')

app.listen(3000, function(){
    console.log('server listening');
});

app.use(volleyball);

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.get('/news',(req, res) => {
    res.send("some bad news");
});