const Express = require('express')();
const Http = require('http').Server(Express);
const Socketio = require('socket.io')(Http);

Socketio.on('connection', (socket) => {
	//receive a message from the client
	socket.on('move', (data) => {
		console.log(data);
		// sending to all clients except sender
		socket.broadcast.emit('draw', data);
	});
	//receive a message from the client
	socket.on('reset', () => {
		console.log('reset recieved');
		socket.broadcast.emit('gameReset', '');
		console.log('gameReset', 'gameReset emitted');
	});
});

Http.listen(3000, () => {
	console.log('listening on *:3000...');
});
