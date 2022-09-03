const router = require("express").Router();
const { join } = require("path");

const {addUserRouter} = require('../controllers');



router.get('/addUser',addUserRouter);


module.exports = router;