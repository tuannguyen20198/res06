// validateDto.js
const {throwErrorWithStatus} = require("./errorHandler");

const validateDto = (schema) => (req, res, next) => {
  const {error} = schema.validate(req.body);
  if (error) {
    return throwErrorWithStatus(401, error, res, next);
  }
  next();
};

module.exports = validateDto;
