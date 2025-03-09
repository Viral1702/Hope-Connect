const validateRequest = require("./globalMiddware");
const {
  signinSchema,
  signupSchema,
  postSchema,
  resetPasswordSchema,
} = require("./allSchemas");

const signinMiddleware = validateRequest(signinSchema);
const signupMiddleware = validateRequest(signupSchema);
const resetPasswordMiddleware = validateRequest(resetPasswordSchema);
const postMiddleware = validateRequest(postSchema);

module.exports = {
  signinMiddleware,
  signupMiddleware,
  resetPasswordMiddleware,
  postMiddleware,
};
