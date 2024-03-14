var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    if (request.url === '/') {
        const readableStream = fs.createReadStream('example.txt', { encoding: 'utf-8', highWaterMark: 64 });
        const writeable = fs.createWriteStream('output.txt');
        readableStream.pipe(writeable);
        // readableStream.on('data', (chunks) => {
        //     writeable.write(chunks);
        // })
        // readableStream.on('end',()=>{
        //     writeable.end();
        // })
        response.end("File Transfered");
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');