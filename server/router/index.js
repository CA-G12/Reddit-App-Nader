const router = require("express").Router();

const {addUserRouter,addUserPath,loginpath,homePagePath,getAllPost,loginVerify} = require('../controllers');

const isLogin = require('../middlewares/isLogin');


router.post('/singup',addUserRouter);
router.get('/addUser',addUserPath);
router.get('/login',loginpath);
router.post('/login',loginVerify);
router.get('/homePage',homePagePath);
router.get('/posts',getAllPost);
router.get('/',isLogin);
module.exports = router;


