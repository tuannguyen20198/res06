const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbconn = require("./config/dbconn");
const app = express();
const initRoutes = require("./routes");
const validateDto = require("./middlewares/validation");
const {userSchema} = require("./middlewares/joiSchema");
const {errHandler} = require("./middlewares/errorHandler");

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Initialize routes before the error-handling middleware
initRoutes(app);

// Use validation middleware after routes are initialized
app.use(validateDto(userSchema));

// Error handling middleware should be the last middleware
app.use(errHandler);

dbconn();

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log("SERVER READY ON", PORT);
});
