const routes = require('./routes');
const express = require('express');
const app = express();
const logger = require('morgan');
const nunjucks = require('nunjucks');

// const locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

app.use(logger('dev'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use('/', routes);
nunjucks.configure('views', {noCache: true});


app.listen(3000, function(){
    console.log('server listening');
});
