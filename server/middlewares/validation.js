const {throwErrorWithStatus} = require("./errorHandler");

const validateDto = (schema) => (req, res, next) => {
  const {error} = schema.validate(req.body);
  console.log(error);
  if (error)
    console.log(throwErrorWithStatus(401, error.details[0].message, res, next));
  // if (error) {
  //   const message = error.details[0].message?.replaceAll(`/"`, "");
  //   console.log(message);
  //   throwErrorWithStatus(401, message, res, next);
  // }
  next();
};
module.exports = validateDto;
