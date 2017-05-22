var express = require('express');
var router = express.Router();
var http = require('http');
var path = require('path');
var WebSocket = require('ws');
var url = require('url');

var client;
var wss = new WebSocket.Server({
    // server: httpServer
    port: 9000
});

wss.on('open', () => {
    console.log('== open ws ==');
});

wss.on('connection', (ws, req) => {
    client = ws;
    console.log('== connect ==');
});

wss.on('message', (message) => {
    console.log(message);
});

wss.on('close', () => {
    console.log("== close ws ==");
})

let wsServer = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let data = '';

    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('error', (err) => {
        console.error(err);
    });

    req.on('end', () => {
        if (client) {
            client.send(data);
        }
        data = '';
    });
});

wsServer.listen(8000);
/* GET home page. */
// router.get('/', function (req, res, next) {
    // res.send('hello world');
    // res.sendFile(path.resolve(__dirname + "../public/hello.html"));
// });

module.exports = router;
