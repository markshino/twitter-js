const routes = require('./routes');
app.use('/', routes);





















// const express = require('express');
// const app = express();
// const logger = require('morgan');
// const nunjucks = require('nunjucks');

// const locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

// app.use(logger('dev'));

// app.set('view engine', 'html');
// app.engine('html', nunjucks.render);

// nunjucks.configure('views', {noCache: true});

// app.get('/', (req, res) => {
//     res.render('index.html', locals);
// });

// app.listen(3000, function(){
//     console.log('server listening');
// });