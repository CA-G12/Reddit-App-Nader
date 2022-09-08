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
    let butnDeletDiv = document.createElement("div");
    let butnDelet = document.createElement("button");
    butnDelet.id = "butnDelet";
    butnDeletDiv.className = "header-right";
    butnDelet.className = "button-9";
    butnDelet.textContent = "delete";
    imgAndNameDiv.className = "imgAndNameDiv";

    imgUrl.src = e.imgurl;
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

    imgAndNameDiv.appendChild(imgUrl);
    imgAndNameDiv.appendChild(userName);
    userNameDiv.appendChild(imgAndNameDiv);
    allContentPost.appendChild(userNameDiv);
    butnDeletDiv.appendChild(butnDelet);
    imgAndNameDiv.appendChild(butnDeletDiv);

    titleDiv.appendChild(title);
    allContentPost.appendChild(titleDiv);

    descriptionDiv.appendChild(description);
    allContentPost.appendChild(descriptionDiv);

    allContentPost.className = "allContentPost";

    if (e.comments[0] === null) {
      let commentsDiv = document.createElement("div");
      commentsDiv.textContent = "no comments";
      allContentPost.appendChild(commentsDiv);
    } else {
      e.comments.forEach((c) => {
        let commentsDiv = document.createElement("div");
        let comments = document.createElement("p");

        commentsDiv.className = "commentsDiv";
        comments.className = "comments";

        comments.textContent = c.comments;

        commentsDiv.appendChild(comments);
        allContentPost.appendChild(commentsDiv);
      });
    }

    container.appendChild(allContentPost);
    // const butnDelet = document.querySelector('.button-9');

    butnDelet.addEventListener("click", () => {
      // console.log(e.postsid);
      fetch("/posts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: e.postsid,
        }),
      }).then((data) => data.json());
    });
  });
}
