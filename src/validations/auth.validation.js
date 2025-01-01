import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().min(1).required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
