const http = require('http');
const fs = require('fs');
const routes = require('./routes');
// console.log(routes.text);
const server = http.createServer(routes);
server.listen(4000);
