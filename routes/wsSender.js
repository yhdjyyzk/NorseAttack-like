var express = require('express');
var router = express.Router();
var path = require('path');
var bus = require("../bus/socketEventBus");

// index page.
router.get('/', function (req, res, next) {
    res.setHeader('Content-type', 'text/html');
    res.sendFile(path.join(__dirname, '/public/wsSender/index.html'));
});

// receive sender's data.
router.post('/receiver', function (req, res, next) {
    let body = req.body;
    // push body to socket.io and will push to browser.
    bus.emit("push", body);
    res.end();
});

module.exports = router;
