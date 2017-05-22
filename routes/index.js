var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.send('hello world');
    res.sendFile(path.resolve(__dirname + "../public/hello.html"));
});

module.exports = router;
