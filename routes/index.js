const express =require('express');
const router = express.Router();
const tweetBank = require('../tweetbank');
router.use(express.static('public'));

router.get('/', (req, res) => {
    let tweets = tweetBank.list();
    res.render('index', {tweets: tweets});
})

router.get('/users/:name', (req, res) => {
    let name = req.params.name;
    let list = tweetBank.find( {name: name} )
    res.render('index', {})
})


router.get('/stylesheets/style.css', (req, res) => {
    res.sendFile('style.css');

});


module.exports = router;

