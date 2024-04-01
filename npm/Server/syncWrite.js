const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        try {
            const message = "Hello, this is Node.js server! hii";
            const data = fs.writeFileSync('FileSystem/example.txt',message, 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File Content: ' + data);

        } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal server error');
        }
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});