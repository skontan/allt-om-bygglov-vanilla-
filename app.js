"use strict";

// FAQ TRANSITIONS
document.querySelectorAll(".question-box").forEach(function(q) {
  q.addEventListener("click", function() {
    if (!q.classList.contains("active")) {
      q.classList.add("active");
    } else {
      q.classList.remove("active");
    }
  });
}); // Smooth scrolling anchor links

var navContent = document.getElementById("nav-content");
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    var target = document.getElementById(
      anchor.getAttribute("href").replace("#", "")
    );
    window.scrollTo({
      top: target.offsetTop - navContent.offsetHeight,
      behavior: "smooth"
    });
    // If smaller screen then hide menu
    if (mainNav.classList.contains("shown")) {
      mainNav.classList.remove("shown");
      menuBtn.setAttribute("name", "menu");
      menuShown = false;
    }
  });
}); // Sticky nav
// const navbar = document.getElementById("main-nav");
// const hurYPos = document.getElementById("hur").offsetTop;
// let sticky = false;
// window.onscroll = () => {
//   if (!sticky && window.pageYOffset > hurYPos - 60) {
//     sticky = true;
//     navbar.classList.add("sticky-nav");
//   } else if (sticky && window.pageYOffset < hurYPos - 60) {
//     sticky = false;
//     navbar.classList.remove("sticky-nav");
//   }
// };
// Header slideshow

var slideIndex = 0;
var slides = document.querySelectorAll(".header-slide");
slideShow();

function slideShow() {
  slides.forEach(function(s) {
    s.style.display = "none";
  });
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideShow, 3000);
} // Spin element

var noSpin = true;

function spin(e) {
  if (noSpin) {
    noSpin = false;
    e.classList.add("spin");
    setTimeout(function() {
      noSpin = true;
      e.classList.remove("spin");
    }, 2000);
  }
} // When menu button is pressed

var menuShown = false;
var menuBtn = document.getElementById("menu-btn");
var menuClose = document.getElementById("menu-close");
var mainNav = document.getElementById("main-nav");
menuBtn.addEventListener("click", function() {
  if (menuShown) {
    mainNav.classList.remove("shown");
    menuBtn.setAttribute("name", "menu");
    menuShown = false;
  } else {
    mainNav.classList.add("shown");
    menuBtn.setAttribute("name", "close");
    menuShown = true;
  }
});
