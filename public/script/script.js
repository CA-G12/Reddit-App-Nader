let container = document.querySelector(".container");
fetch("/posts")
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    showUpAllPosts(res);
  });

function showUpAllPosts(res) {
  res.forEach((e) => {
    let allPostsDiv = document.createElement("div");
    let imgNameDiv = document.createElement("div");
    let imgUrlDiv = document.createElement("div");
    let userNameDiv = document.createElement("div");
    let titleDesDiv = document.createElement("div");
    let commentsDiv = document.createElement("div");
    commentsDiv.className ="commentsDiv";
    allPostsDiv.className= "allPostsDiv";

    let imgUrl = document.createElement("img");
    imgUrl.src = e.imgurl;
    imgNameDiv.className = "imgNameDiv";
    imgUrl.className = "imgUrl";
    let userName = document.createElement("h3");
    userName.textContent = e.username;
    userName.className = "userName";

    let title = document.createElement("h4");
    let description = document.createElement("p");
    title.textContent = e.title;
    description.textContent = e.description;
    title.className = "title";
    description.className = "description";
    
    imgUrlDiv.appendChild(imgUrl);
    userNameDiv.appendChild(userName);
    imgNameDiv.appendChild(imgUrlDiv);
    imgNameDiv.appendChild(userNameDiv);
    allPostsDiv.appendChild(imgNameDiv);
    titleDesDiv.appendChild(title);
    titleDesDiv.appendChild(description);
    allPostsDiv.appendChild(titleDesDiv);
    allPostsDiv.appendChild(commentsDiv);
    container.appendChild(allPostsDiv);

// comments 
    e.comments.forEach((c) => {
      let commentDiv = document.createElement("div");
      let commentTitle = document.createElement("p");
      if (e.comments[0] !== null) {
        commentTitle.textContent = c.comments;
      }else{
        commentTitle.textContent = "No comments";
      }
      commentDiv.className = "commentDiv";
      commentTitle.className = "commentTitle";
      commentDiv.appendChild(commentTitle);
      commentsDiv.appendChild(commentDiv);
    });
    
    
  });
}

// [
//   {
//       "postsid": 1,
//       "title": "hello",
//       "description": "world",
//       "userid": 1,
//       "username": "nader",
//       "imgurl": "https://gogeticon.net/files/2174098/f4ceeae0ea3cf566ddf604e2de4a85cd.png",
//       "comments": [
//           {
//               "commentid": 1,
//               "comments": "this is hello world",
//               "userid": 1,
//               "postsid": 1
//           },
//       ]
//     }]
