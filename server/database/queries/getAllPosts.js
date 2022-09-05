const connection = require("../config/connection");

const getAllPosts = ()=>{
    return connection.query("select * from posts inner join users on users.id = posts.userId inner join comment on comment.postsId =posts.postsId");
}
// users.username,posts.title,users.id,posts.postsId,posts.description
module.exports = getAllPosts;

