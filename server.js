const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
});

server.listen(9091, 'localhost', () => {
    console.log('listening on port 9091');
});