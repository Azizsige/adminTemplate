const contentBtn = document.getElementById("contentBtn");
const hamburger = document.getElementById("hamburger");
let width = window.innerWidth;
hamburger.addEventListener("click", function () {
  contentBtn.classList.toggle("show");
  contentBtn.classList.toggle("hidden");
});

window.addEventListener("resize", function () {
  width = window.innerWidth;
  // console.log(width);
  if (width < 1024) {
    // console.log("width > 768");
    contentBtn.classList.remove("show");
    contentBtn.classList.add("hidden");
  } else {
    contentBtn.classList.add("show");
    contentBtn.classList.remove("hidden");
  }
});

if (width < 1024) {
  // console.log("width > 768");
  contentBtn.classList.remove("show");
  contentBtn.classList.add("hidden");
} else {
  contentBtn.classList.add("show");
  contentBtn.classList.remove("hidden");
}
