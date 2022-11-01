const http = require('http');
const fs = require('fs');

const PORT = 3001;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (error, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(PORT, () => console.log('server running'));