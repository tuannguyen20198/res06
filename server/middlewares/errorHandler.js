// errorHandler.js
const errHandler = (error, req, res, next) => {
  console.log(error);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const errorMessage =
    error.message.replace("ValidationError: ", "").replace(/"/g, "") ||
    "An unexpected error occurred.";

  return res.status(statusCode).json({
    success: false,
    mes: errorMessage,
  });
};

const throwErrorWithStatus = (code, message, res, next) => {
  const error = new Error(message);
  res.status(code);
  next(error);
};

const badRequestException = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  res.status(404);
  next(error);
};

module.exports = {
  errHandler,
  throwErrorWithStatus,
  badRequestException,
};
