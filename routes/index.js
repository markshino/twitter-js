const router = require('express').Router();
const tweetBank = require('../tweetbank');

router.get('/', (req, res) => {
    let tweets = tweetBank.list();
    res.render('index', {tweets: tweets});
})

module.exports = router;
