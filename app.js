// FAQ TRANSITIONS
document.querySelectorAll(".question-box").forEach(q => {
  q.addEventListener("click", () => {
    if (!q.classList.contains("active")) {
      q.classList.add("active");
    } else {
      q.classList.remove("active");
    }
  });
});

// Smooth scrolling anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();

    const target = document.getElementById(
      anchor.getAttribute("href").replace("#", "")
    );
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth"
    });

    // If smaller screen then hide menu
    if (mainNav.classList.contains("shown")) {
      mainNav.classList.remove("shown");
    }
  });
});

// Sticky nav
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
let slideIndex = 0;
let slides = document.querySelectorAll(".header-slide");
slideShow();

function slideShow() {
  slides.forEach(s => {
    s.style.display = "none";
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideShow, 3000);
}

// Spin element
let noSpin = true;
function spin(e) {
  if (noSpin) {
    noSpin = false;
    e.classList.add("spin");
    setTimeout(() => {
      noSpin = true;
      e.classList.remove("spin");
    }, 2000);
  }
}

// When menu button is pressed
let menuShown = false;
const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const mainNav = document.getElementById("main-nav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.add("shown");
});

menuClose.addEventListener("click", () => {
  mainNav.classList.remove("shown");
});
