import User from '../../routes/controller/models/User.js';

// export async function emitFetchUserData(socket) {
//   try {
//     const user = await User.find();
//     if (user) {
//       return socket.emit('fetchUserData', { user });
//     }
//     socket.emit('fetchUserData', {
//       errorOccurred: 'No user found',
//     });
//   } catch (err) {
//     console.log(err);
//     socket.emit('fetchUserData', {
//       errorOccurred: err,
//     });
//   }
// }
