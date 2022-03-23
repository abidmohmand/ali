// page loader code
window.onload = function () {
  document.getElementById("loader").className = "preloader active";
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 600);
};
//Get the button
var mybutton = document.getElementById("up-down");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//responsive menu

const burger = document.querySelector(".humbergur-menu");
const mainMenu = document.querySelector(".main-nav-list");
const time = document.querySelector(".fa-times");
const burgerIcon = document.querySelector(".fa-stream");

burger.addEventListener("click", function () {
  mainMenu.classList.toggle("menu-open");
  time.classList.toggle("active");
  burgerIcon.classList.toggle("unactive");
});
