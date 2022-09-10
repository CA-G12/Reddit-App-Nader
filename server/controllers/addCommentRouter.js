const addComment = require("../database/queries/addComment");



const addCommentRouter = (req,res)=>{
    // console.log(req.body);
    let {comments, postsId,userId } = req.body;

    addComment(comments, postsId,userId ).then((data)=> {
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
}




module.exports =addCommentRouter;