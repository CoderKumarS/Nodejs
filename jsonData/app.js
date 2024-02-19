var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    if (request.url==="/") {
      fs.readFile('form.html',(err,data)=>{
        if (err) {
            console.log(err);
            return;
        } else {
            response.end(data);
        }
      });
  }else if (request.url="/save-json") {
    let stringData="";
    request.on('data',(chunks)=>{
        stringData+=chunks;
        console.log(stringData);
    });
    request.on('end',()=>{
        let jsonData=JSON.stringify(stringData);
        fs.writeFile("jsonFile.json", jsonData,(err)=>{
            if (err) {
                console.log(err);
                response.end("Check the terminal for error");
            } else {
                response.end("Write operation is done");
            }
        });
    });
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');