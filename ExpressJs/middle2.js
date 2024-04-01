const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000
app.use((req, res, next) => {
    const data = "["+Date().toString()+"] \""+req.method+" "+req.url+"\"\n";
    fs.appendFile('read.log', data, (error) => {
        if (error) {
            console.error("error" + error);
            return;
        }
        next();
    });
})
app.get('/', (req, res) => { 
    res.send('Hello World!'); 
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))