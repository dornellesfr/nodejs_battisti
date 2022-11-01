const http = require('http');
const fs = require('fs');

const PORT = 3001;

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true);
  const name = urlInfo.query.name;


  if(!name) {
    fs.readFile('index.html', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else {
    const newLine = name + '\r\n';

    fs.appendFile('situacoes.txt', newLine, (error, data) => {
      res.writeHead(302,
        {
          Location: '/' });
      return res.end();
    });
  }
});

server.listen(PORT, () => console.log('server running'));