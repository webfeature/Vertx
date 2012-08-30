load('vertx.js');

var httpServer = vertx.createHttpServer();

httpServer.websocketHandler(function(ws) {
    ws.dataHandler(function(buffer) { 
        ws.writeTextFrame(buffer.toString())
    });
});

httpServer.requestHandler(function(req) {
    req.response.sendFile('index.html');
});

httpServer.listen(8080, 'localhost');