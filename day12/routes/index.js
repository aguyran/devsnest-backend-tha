var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

router.post("/register")
module.exports = router;
