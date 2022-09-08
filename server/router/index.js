const router = require("express").Router();

const {addUserRouter,addUserPath,loginpath,homePagePath,getAllPost,loginVerify,logout,addPostsRouter} = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');

router.get("/logout", logout);
router.get('/isLogin',logout);
router.post('/singup',addUserRouter);
router.get('/addUser',addUserPath);
router.get('/login',loginpath);
router.post('/login',loginVerify);
router.get('/homePage',verifyToken,homePagePath);
router.post('/homePage',verifyToken,addPostsRouter);
router.get('/posts',getAllPost);

module.exports = router;


