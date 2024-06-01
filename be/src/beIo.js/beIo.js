import { Server } from 'socket.io';

let beIo;

export function registerSocketServer(server) {
  beIo = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  beIo.on('connection', (socket) => {
    console.log('BE: user connected:' + socket.id);

    socket.on('disconnect', () => {
      console.log('BE:someone disconnected');
    });

    beIo.emit('fistEvent', 'hello this is the first event');

    socket.on('sendMessage', (message) => {
      console.log(message);
      socket.broadcast.emit('messageReceived', message);
    });
  });
}
