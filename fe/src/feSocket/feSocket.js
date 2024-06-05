import io from 'socket.io-client';

let feSocket;

export default function connectWithSocketServer() {
  feSocket = io('http://localhost:7000');

  feSocket.on('connect', () => {
    console.log('FE: connected:' + feSocket.id);
  });
}

export function getPress(message) {
  feSocket.emit('sendMessage', message);
  console.log(message);
}

export function getPressReceived() {
  feSocket.emit('messageReceived');
}
