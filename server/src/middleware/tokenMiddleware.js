const Joi = require("joi");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).options({
    abortEarly: false,
  });

  const validate = schema.validate({
    email,
    password,
  });

  if (validate.error) {
    res.status(422).send({
      status: 422,
      message: "data is not complete",
      data: validate.error.details,
    });
  } else {
    next();
  }
};

const register = async (req, res, next) => {
  const {
    fullname,
    email,
    password,
    phone
  } = req.body;

  const schema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .min(8)
      .max(16)
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/), //number/capital
  }).options({
    abortEarly: false,
  });

  const validate = schema.validate({
    fullname,
    email,
    password,
    phone
  });

  if (validate.error) {
    res.status(422).send({
      status: 422,
      message: "data is not complete",
      data: validate.error.details,
    });
  } else {
    next();
  }
};

module.exports = {
  login,
  register,
};
