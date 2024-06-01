import io from 'socket.io-client';

let feSocket;

export default function connectWithSocketServer() {
  feSocket = io('http://localhost:7000');

  feSocket.on('connect', () => {
    console.log('FE: connected:' + feSocket.id);
  });

  feSocket.on('fistEvent', (message) => {
    console.log(message);
  });
}

export function getPress(message) {
  feSocket.emit('sendMessage', message);
  console.log(message);
}

export function getPressReceived() {
  return feSocket.on('messageReceived', (data) => {
    console.log(data);
  });
}
