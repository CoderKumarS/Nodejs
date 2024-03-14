var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
  if(request.url==='/'){
    const read=fs.createReadStream("example.txt",{encoding:'utf-8',highWaterMark:32});
    const write=fs.createWriteStream("output.txt");
    read.pipe(write);
    read.pipe(response);
    // response.end("File Transferred successfully");
  }else{
    response.end("404 page not found.");
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');