const router = require("express").Router();
const { join } = require("path");

const {addUserRouter,addUserPath,loginpath,getUserRouter,homePagePath,getAllPost} = require('../controllers');



router.post('/addUser',addUserRouter);
router.get('/addUser',addUserPath);
router.get('/login',loginpath);
router.post('/login',getUserRouter);
router.get('/homePage',homePagePath);
router.get('/:homePage',getAllPost);
module.exports = router;


