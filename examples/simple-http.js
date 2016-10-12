var http = require('http');
var server = http.createServer();

server.on('connection', function(c) {
  // 'connection' listener
  console.log('client connected');
  c.on('end', function() {
    console.log('client disconnected');
  });
});

server.on('request', function(req, res){
  console.log(req.headers);
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.write('Hola ' + req.url + Math.random());
  res.end();
});

server.on('error', function (err){
  throw err;
});

server.listen(8120);
