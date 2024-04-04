const http = require('http');
http.createServer(function(req,res){
    if (req.url="/") {
        res.end("helo");
    }
}).listen(3000);
console.log(`localhost:3000`);