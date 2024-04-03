const { log } = require('console');
const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }));

const users = [
    { id: 1, username: 'Babu', password: 'Rao' },
    { id: 2, username: 'John', password: 'Wick' },
];

app.use('/profile', (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.use((req, res, next) => {
    const data = `[${new Date().toString()}] "${req.method} ${req.url}"\n`;
    fs.appendFile('read.log', data, (error) => {
        if (error) {
            console.error("Error: " + error);
            return res.status(500).send('Internal Server Error');
        }
        next();
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to public route!');
});

app.get('/login', (req, res) => {
    fs.readFile(__dirname + '/form2.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error Displaying Form");
        } else {
            res.send(data);
        }
    });
});

app.post('/profile', (req, res) => {
    if (req.user) {
        res.send(`Welcome ${req.user.username}!`);
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
