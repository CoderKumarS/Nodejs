const { log } = require('console');
const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }));
const users = [
    { id: 1, username: 'John', password: 'Wick' },
    { id: 2, username: 'Babu', password: 'Rao' }
];
app.use('/profile', (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find(u => username === username && password === password);
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).send('unauthorized');
    }
});
app.get('/', (req, res) => {
    res.send('Welcome to public route!');
});
app.get('/login', (req, res) => {
    fs.readFile(__dirname + '/form2.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send("Error Displaying Form");
        } else {
            res.send(data);
        }
    });
});
app.post('/profile', (req,res)=>{
    res.send(`Welcome ${req.user.username}!`);
});
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);