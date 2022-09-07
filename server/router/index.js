const router = require("express").Router();

const {addUserRouter,addUserPath,loginpath,homePagePath,getAllPost,loginVerify,logout} = require('../controllers');

const isLogin = require('../middlewares/isLogin')
router.get("/logout", logout);
router.get('/isLogin',logout);
router.post('/singup',addUserRouter);
router.get('/addUser',addUserPath);
router.get('/login',loginpath);
router.post('/login',loginVerify);
router.get('/homePage',homePagePath);
router.get('homePage',isLogin)
router.get('/posts',getAllPost);
module.exports = router;


