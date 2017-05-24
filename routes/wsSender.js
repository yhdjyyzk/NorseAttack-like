var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.setHeader('Content-type', 'text/html');
    res.sendFile(path.join(__dirname, '/public/wsSender/index.html'));
});

// 接受sender的内容.
router.post('/receiver', function (req, res, next) {
    let body = req.body;
    console.log(body);
    res.end("hello world");
});

module.exports = router;
