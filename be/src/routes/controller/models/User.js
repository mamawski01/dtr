import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  address: { type: String, required: true },
  cellphoneNumbers: { type: Array, required: true },
  password: { type: String, required: true },
  repeat_password: { type: String, required: true },
  birthdate: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  SSS: { type: String, required: true },
  Pag_Ibig: { type: String, required: true },
  PhilHealth: { type: String, required: true },
  TIN: { type: String, required: true },
  contactPersonNameInEmergency: { type: String, required: true },
  contactPersonNumberInEmergency: { type: String, required: true },
  oneTimePassword: { type: String, required: true },
});

export default mongoose.model('User', userSchema);
