const router = require("express").Router();
const { join } = require("path");

const {addUserRouter,addUserPath,loginpath,getUserRouter,homePagePath,getAllPost} = require('../controllers');

const isLogin = require('../middlewares/isLogin');


router.post('/singup',addUserRouter);
router.get('/addUser',addUserPath);
router.get('/login',loginpath);
router.post('/login',getUserRouter);
router.get('/homePage',homePagePath);
router.get('/posts',getAllPost);
router.get('/',isLogin);
module.exports = router;


