const btn = document.querySelector("#menu-btn");
const nav = document.querySelector("#menu");
btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
