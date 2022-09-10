fetch("/posts")
  .then((data) => data.json())
  .then((res) => {
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

    let addCommintsDiv = document.createElement("div");
    let addCommintsDivBtn = document.createElement("div");
    let addCommints = document.createElement("input");
    let btnAddCommints = document.createElement("button");

    addCommintsDiv.className = "addCommintsDiv";
    addCommints.type = "text";
    addCommints.placeholder = "Add Comment";
    btnAddCommints.type = "submit";
    btnAddCommints.textContent = "Add Comment";

    addCommintsDivBtn.className = "addCommintsDivBtn";
    addCommintsDiv.appendChild(addCommints);
    addCommintsDivBtn.appendChild(btnAddCommints);

    allContentPost.appendChild(addCommintsDiv);
    allContentPost.appendChild(addCommintsDivBtn);

    if (e.comments[0] === null) {
      let commentsDivNo = document.createElement("div");
      commentsDivNo.className = "commentsDivNo";
      commentsDivNo.textContent = "no comments";
      allContentPost.appendChild(commentsDivNo);
    } else {
      e.comments.forEach((c) => {
        let commentsDiv = document.createElement("div");
        let comments = document.createElement("p");
        let deleteBnt = document.createElement("button");
        let deleteBntIcon = document.createElement("i");

        commentsDiv.className = "commentsDiv";
        comments.className = "comments";
        deleteBntIcon.className = "fa fa-trash deleteBntIcon";

        comments.textContent = c.comments;
        commentsDiv.appendChild(comments);
        deleteBnt.appendChild(deleteBntIcon);
        commentsDiv.appendChild(deleteBnt);
        allContentPost.appendChild(commentsDiv);
        let userIdBtn = getCookie("userId");
        deleteBnt.addEventListener("click",()=>{
          console.log(c.commentid);
          console.log(userIdBtn);
          fetch("/deleteComment",{
            method : "post",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({
              commentId : c.commentid,
              userId : Number(userIdBtn)
            })
          }).then((data)=>{
            data.json();
          }).then((data)=>{
            location.reload();
          })
        })


      });
    }



    butnDelet.addEventListener("click", () => {
      fetch("/posts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: e.postsid,
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          location.reload();
        });
    });

    let userId = getCookie("userId");
    btnAddCommints.addEventListener("click", () => {
      fetch("/addComment", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: addCommints.value,
          postsId: e.postsid,
          userId: Number(userId),
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          location.reload();
        });
    });

    container.appendChild(allContentPost);
  });
}

let userNameC = getCookie("userName");
// console.log(userNameC);

let nameUser = document.querySelector("#nameUser");

nameUser.textContent = "User Name : " + userNameC;

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// let x = document.cookie;

// console.log(x);
