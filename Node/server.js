var http = require('http'); // rquire is one of the core functions of node. this is loading the http module

http.createServer(function (req, res) {   //create server is a method on the http object. We are passing an anynomous function. req is request res is response
  console.log(req.url)`
  res.writeHead(200, {'Content-Type': 'text/html'}); // 200 means everything is ok
  res.end('<h1>Hell World</h1>');
}).listen(8080, '127.0.0.1'); // 8080 is the port. 127 is the ip address

console.log('Server running... ');
