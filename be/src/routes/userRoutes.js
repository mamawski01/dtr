import express from 'express';
import Joi from 'joi';
import ExpressValidation from 'express-joi-validation';

import postUserRegister from './controller/postUserRegister.js';
import getUsers from './controller/getUsers.js';

const router = express.Router();
const validator = ExpressValidation.createValidator({});

const registerSchema = Joi.object({
  firstName: Joi.string().min(1).max(100).required(),
  middleName: Joi.string().min(1).max(100).required(),
  lastName: Joi.string().min(1).max(100).required(),
  position: Joi.string().min(1).max(100).required(),
  address: Joi.string().min(1).max(1000).required(),
  cellphoneNumbers: Joi.array()
    .items(Joi.string().min(0))
    .min(1)
    .max(3)
    .required(),
  password: Joi.string()
    .min(1)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  repeat_password: Joi.ref('password'),
  birthdate: Joi.date().min('1-1-1940').iso().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  SSS: Joi.string().min(1).max(100).required(),
  Pag_Ibig: Joi.string().min(1).max(100).required(),
  PhilHealth: Joi.string().min(1).max(100).required(),
  TIN: Joi.string().min(1).max(100).required(),
  contactPersonNameInEmergency: Joi.string().min(1).max(100).required(),
  contactPersonNumberInEmergency: Joi.string().min(1).max(100).required(),
  oneTimePassword: Joi.string().min(1).required(),
});

const loginSchema = Joi.object({
  firstName: Joi.string().min(1).max(100).required(),
  password: Joi.string()
    .min(1)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

router.get('/users', getUsers);
router.post('/userRegister', validator.body(registerSchema), postUserRegister);

export default router;
