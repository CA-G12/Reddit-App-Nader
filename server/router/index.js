const router = require("express").Router();
const { join } = require("path");

const {addUserRouter,addUserPath} = require('../controllers');



router.post('/addUser',addUserRouter);
router.get('/addUser',addUserPath);

module.exports = router;