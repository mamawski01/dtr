import { Server } from 'socket.io';

import { emitMessageReceived } from './emit/emitFetchUserData.js';

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

    socket.on('sendMessage', (message) => {
      emitMessageReceived(socket, message);
    });
  });
}
