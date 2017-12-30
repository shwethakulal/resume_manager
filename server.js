var restify = require('restify');
var config = require('./config');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(config.SERVER_PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});