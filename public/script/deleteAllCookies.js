let logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  fetch("/logout").then(window.location.href = "/login");
});

