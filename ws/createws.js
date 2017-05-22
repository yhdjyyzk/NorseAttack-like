var WebSocket = require('ws');
var url = require('url');

function createWebSocketServer(client) {
    var wss = new WebSocket.Server({
        // server: httpServer
        port: 9000
    });

    wss.on('open', () => {
        console.log('== open ws ==');
    })

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
}

module.exports = createWebSocketServer;