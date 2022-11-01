const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Olá, mundo!</h1>')
});

server.listen(PORT, () => console.log('server running'));