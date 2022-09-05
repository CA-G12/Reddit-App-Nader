fetch("/posts")
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
    allPosts(res);
  });

let container = document.querySelector("#container");

function allPosts(res) {
  res.forEach((e) => {
    let allContentPost = document.createElement("div");
    let userNameDiv = document.createElement("div");
    let imgAndNameDiv = document.createElement("div");
    let userName = document.createElement("p");
    let imgUrl = document.createElement("img");

    imgAndNameDiv.className="imgAndNameDiv";
    imgUrl.src = e.imgurl
    userName.textContent = e.username;
    userNameDiv.className = "userNameDiv";
    userName.className = "userName";
    imgUrl.className = "imgUrl";

    let titleDiv = document.createElement("div");
    let title = document.createElement("p");

    titleDiv.className = "titleDiv";
    title.className = "title";
    titleDiv.textContent = e.title;


    let descriptionDiv = document.createElement("div");
    let description = document.createElement("p");

    descriptionDiv.className = "descriptionDiv";
    description.className = "description";
    description.textContent = e.description;

    let commentsDiv = document.createElement("div");
    let comments = document.createElement("p");

    commentsDiv.className = "commentsDiv";
    comments.className = "comments";
    comments.textContent = e.comments;



    imgAndNameDiv.appendChild(imgUrl)
    imgAndNameDiv.appendChild(userName);
    userNameDiv.appendChild(imgAndNameDiv);
    allContentPost.appendChild(userNameDiv);

    titleDiv.appendChild(title);
    allContentPost.appendChild(titleDiv);

    descriptionDiv.appendChild(description);
    allContentPost.appendChild(descriptionDiv);

    commentsDiv.appendChild(comments);
    allContentPost.appendChild(commentsDiv);

    allContentPost.className = "allContentPost";



    container.appendChild(allContentPost);
  });
}

// username: "ahmed"
// title: "hi"
// description: "dad"
//   commentid: 2
// comments: "this is hi dad"
// email: "ahmed@gmail.com"
// id: 2
// imgurl: "https://gogeticon.net/files/2174098/f4ceeae0ea3cf566ddf604e2de4a85cd.png"
// password: "123456"
// postsid: 2
// userid: 2
