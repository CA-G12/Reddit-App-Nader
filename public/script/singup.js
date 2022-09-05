const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const imgUrl = document.querySelector("#imgUrl");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const span_error = document.querySelector("#span_error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("/singup", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
      imgUrl: imgUrl.value,
    }),
  })
    .then((data) => data.json())
    .then((res) => {
      if (res.msg) {
        console.log(res);
        let spanText = document.createElement("span");
        spanText.className = "errorText";
        spanText.textContent = res.msg;
        submit.addEventListener("click", () => {
          if (spanText) {
            span_error.removeChild(spanText);
          }
        });
        span_error.appendChild(spanText);
      } else{
        window.location.href = "/login";
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
});
