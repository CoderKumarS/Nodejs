const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res) => {
    const readStream = fs.createReadStream('form.html');
    readStream.pipe(res);
});
app.post('/submit', (req, res) => {
    const data= JSON.stringify(req.body);
    // const writeStream= fs.createWriteStream('body.json');
    const writeStream= fs.createWriteStream('body.json');
    writeStream.write(data);
    writeStream.end();
    res.send("Done");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))