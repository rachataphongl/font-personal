import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  username: Joi.string().required(),
  address: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'net'] } })
    .required(),
  phoneNumber: Joi.alternatives().try(
    Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
  ),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,12}$')).required(),
  confirmPassword: Joi.ref('password')
}).with('password', 'confirmPassword');

export const validateRegister = (input) =>
  registerSchema.validate(input, { abortEarly: false });
