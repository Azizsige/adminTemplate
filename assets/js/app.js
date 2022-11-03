const contentBtn = document.getElementById("contentBtn");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  contentBtn.classList.toggle("show");
  contentBtn.classList.toggle("hidden");
});
