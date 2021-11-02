const parallax = document.getElementById("parallax");

// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.6 + "px";
//   console.log(parallax);
// });

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  let hideAK = document.querySelector("h1");
  hideAK.classList.toggle("hiddenAK", window.scrollY > 0);
});
