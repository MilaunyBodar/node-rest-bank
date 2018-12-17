const http = require('http');
const app = require('./app');
console.log('running..');
const port = process.env.PORT  || 8888; 
const server = http.createServer(app);
server.listen(port);