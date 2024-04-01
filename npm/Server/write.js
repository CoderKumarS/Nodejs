const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        const message = "Hello, this is Node.js server!";
        fs.writeFile('FileSystem/example.txt', message, 'utf-8', (error) => {
            if (error) {
                console.log(error);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Internal server error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File Content: ' + message);
        });
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});