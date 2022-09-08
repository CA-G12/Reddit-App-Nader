const connection = require("../config/connection");


const deletePosts = (userId,postsId)=>{
    return connection.query("delete from posts where posts.userId = $1 AND posts.postsId = $2",[userId,postsId]);
} 


module.exports = deletePosts;
