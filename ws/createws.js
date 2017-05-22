// var router = require('express').Router();

// router.all("/", function (req, res, next) {
//    let data = req.body;
//    res.send("hello, I am server.");
// });

// module.exports = router;
var WebSocket = require('ws');
var url = require('url');

function createWebSocketServer(httpServer) {
    var wss = new WebSocket.Server({
        server: httpServer
    });

    wss.on('connection', (client, req) => {
        // const location = url.parse(req.url, true);
        console.log("===========");
    });

    wss.on('message', (message) => {
        console.log(message);
    });
}

module.exports = createWebSocketServer;