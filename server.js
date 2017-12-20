var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('typing', (user) => {
    io.emit('user typing', user)
  });

  socket.on('empty', (msg) => {
    io.emit('user not typing')
  });

  socket.on('disconnect', () => {
    io.emit('lost connection', {text: 'Someone has disconnected'})
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
