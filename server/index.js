const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, this is our Node.js Server!');
})

const port = 3000;

server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));