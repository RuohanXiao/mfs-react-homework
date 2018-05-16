var http = require("http");
var item = 1
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(JSON.stringify(gen().next()));
}).listen(8888);

function *gen () {
    while (1) {
        yield item++;
        console.log(item);
    }
}
