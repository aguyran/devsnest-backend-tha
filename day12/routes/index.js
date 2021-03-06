var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerCheck");
var register = require("../controllers/register");
/* GET home page. */
router.get("/", function (req, res, next) {
  const session = req.session;
  session.username = "aryan";
  res.render("index", { title: "Express" });
});
router.get("/hello", function (req, res, next) {
  console.log("hello", req.session.username);
});
/**
 * @requires {email, firstName,lastName,password,confirmPassword} - req.body
 * @description
 * Security, perfomance and edge cases
 * level - 1
 * email validate
 * password validate
 * password == confirm
 * level 2
 * JS/SQL injection prevention if happening
 * level -3
 * check if email already exists
 * password hash
 * email lowercase
 * save
 */

router.post("/register", registerInitialCheck, register);
module.exports = router;
