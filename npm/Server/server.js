const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, this is your Node.js server!');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});