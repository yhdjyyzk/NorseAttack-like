var express = require('express');
var router = express.Router();
var path = require('path');

// 发送页面.
router.get('/', function (req, res, next) {
    res.setHeader('Content-type', 'text/html');
    res.sendFile(path.join(__dirname, '/public/wsSender/index.html'));
});

// 接受sender的内容.
router.post('/receiver', function (req, res, next) {
    let body = req.body;
    // 然后websocket发送数据给visual.
    global.webSocket.emit('link', body);
    res.end();
});

module.exports = router;
