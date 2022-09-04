const router = require("express").Router();
const { join } = require("path");

const {addUserRouter,addUserPath,loginpath} = require('../controllers');



router.post('/addUser',addUserRouter);
router.get('/addUser',addUserPath);
router.get('/login',loginpath);

module.exports = router;