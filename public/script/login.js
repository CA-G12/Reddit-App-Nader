const form = document.querySelector("#form");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const errorMsg = document.querySelector("#errorMsg");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((data) => data.json())
    .then((result) => {
      if (result.msg) {
        let spanText = document.createElement("span");
        spanText.textContent = result.msg;
        errorMsg.appendChild(spanText);
        submit.addEventListener("click", () => {
          if (spanText) {
            errorMsg.removeChild(spanText);
          }
        });
      } else {
        window.location.href = "/homePage";
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
});
