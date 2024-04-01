const { error } = require('console');
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.get('/readfile',(req,res)=>{
    // const read = fs.createReadStream("input.txt",{encoding:'utf-8'});
    // read.pipe(res);
    // res.send('Hello World2');
    // res.end("Hello 2");
    fs.readFile("input.txt", 'utf-8',(err,data)=>{
        if (err) {
            return res.status(500).send(err);
        }
        res.send(data);
    });
});
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})
