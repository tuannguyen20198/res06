const router = require("express").Router();
const Joi = require("joi");
const ctrls = require("../controllers/auth");
const validateDto = require("../middlewares/validation");
const {stringReq, numberReq} = require("../middlewares/joiSchema");

router.post(
  "/register",
  validateDto(
    Joi.object({
      password: stringReq,
      name: stringReq,
      phone: numberReq,
      role: stringReq,
    })
  ),
  ctrls.register
);
router.post(
  "/signin",
  validateDto(
    Joi.object({
      password: stringReq,
      phone: numberReq,
    })
  ),
  ctrls.signIn
);

module.exports = router;
