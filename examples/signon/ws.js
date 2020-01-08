let WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 40510});

const connections = [];

wss.on('connection', function (ws) {
    connections.push(ws);
    // console.log(connections[0]);
    ws.on('message', function (message) {
        console.log('received: %s', message);
        connections.forEach((connection) => {
            connection.send(message)
        })
    })
});
