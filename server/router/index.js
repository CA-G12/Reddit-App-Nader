const router = require("express").Router();

const {addUserRouter,addUserPath,loginpath,homePagePath,getAllPost,loginVerify,isLogin} = require('../controllers');


router.get('/isLogin',isLogin);
router.post('/singup',addUserRouter);
router.get('/addUser',addUserPath);
router.get('/login',loginpath);
router.post('/login',loginVerify);
router.get('/homePage',homePagePath);
router.get('/posts',getAllPost);
module.exports = router;


