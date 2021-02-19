// Hamburger Menu

var navbar = document.querySelector(".ham_menu");
var ham = document.querySelector(".ham");

ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}