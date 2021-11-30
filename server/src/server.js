const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 2000;

const server = http.createServer();

server.listen(PORT, console.log(`Server running on port: ${PORT}`));