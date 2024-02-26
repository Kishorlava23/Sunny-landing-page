const showTog = document.querySelector(".hamburger");
// console.log(showTog);
showTog.addEventListener("click", function () {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("show");
  //   console.log(nav);
});
