const {
  errHandler,
  badRequestException,
} = require("../middlewares/errorHandler");
const auth = require("./auth");

const initRoutes = (app) => {
  app.use("/api/auth", auth);

  app.use(badRequestException);
  app.use(errHandler);
};

module.exports = initRoutes;
