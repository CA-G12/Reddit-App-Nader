const connection = require("../config/connection");

const getAllPosts = ()=>{
    return connection.query("select * from posts");
}

module.exports = getAllPosts;