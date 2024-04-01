const { error } = require('console');
const express = require('express')
const app = express()
const fs = require('fs');

const port = 3000

app.get('/', (req, res) => {
    fs.readFile('./form.html',(error,data)=>{
        if (error) {
            console.error(error);
            return res.status(500).send("Error reading file");
        }
        res.send(data);
    });
});
app.get('/submit', (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    fs.writeFile('output.txt', `{\nName: ${name},\nEmail: ${email}\n}\n`,(error)=>{
        if (error) {
            console.error(error);
            return res.status(500).send("Error saving file");
        }
        res.send('Data Saved Successfully');
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))