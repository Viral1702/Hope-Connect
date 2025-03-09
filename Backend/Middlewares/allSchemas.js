const zod = require("zod");

const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

const signupSchema = zod.object({
  name: zod.string().min(2),
  email: zod.string().email(),
  password: zod.string().min(6),
  number: zod.coerce.number().min(10),
});

const resetPasswordSchema = zod.object({
  password: zod.string().min(6),
});

const postSchema = zod.object({
  message: zod.string().min(10),
  location: zod.object(),
});

module.exports = {
  signinSchema,
  signupSchema,
  postSchema,
  resetPasswordSchema,
};
