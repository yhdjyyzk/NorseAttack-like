const http = require('http');
const querystring = require('querystring');
const ws = require('ws');

var server = null;
var client = null;

const wss = new ws.Server({
    port: 9099
});

wss.on('connection', (c) => {
    console.log("dsdsdsdsd");
    client = c;
});

wss.on('error', (err) => {
    console.log(err);
});

server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    var data = '';

    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        // console.log(querystring.parse(data));

        if (client) {
            let latlng = querystring.parse(data);
            console.log("===========> ",latlng);
            console.log(latlng);
            client.send(data);
        }

        data = '';
        res.write("success");
        res.end();
    });

    req.on('close', () => {
        console.log('close......');
    });

    req.on('error', (err) => {
        console.log(err);
    });
});

server.listen(8088);

