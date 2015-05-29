module.exports = function(io, socket) {

	// Send message to all connected sockets
	io.emit('chatMessage', {
		type: 'status',
		text: 'connected',
		created: Date.now(),
		username: socket.request.user.username
	});


	// socket on recive input from the connected socket
	socket.on('chatMessage', function(message){
		message.type = 'message';
		message.created = Date.now();
		message.username = socket.request.user.username;

		io.emit('chatMessage', message);
	});

	socket.on('disconnect', function(){
		io.emit('chatMessage', {
			type: 'status',
			text: 'disconnected',
			created: Date.now(),
			username: socket.request.user.username
		});
	});
};