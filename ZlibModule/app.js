var http = require('http');
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
http.createServer(function (request, response) {
    if (request.url == '/') {
        const ReadStream = fs.createReadStream('input.txt', { encoding: 'utf-8' });
        response.writeHead(200, {
            'Content-Type': 'text/plain',
            'Content-Encoding': 'gzip'
        });
        ReadStream.pipe(zlib.gzip(response));
    } else {
        response.end("Page Not Found");
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
// correct it
