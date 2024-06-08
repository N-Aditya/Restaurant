document.addEventListener("DOMContentLoaded", function () {
  const bars = document.getElementById("bars");
  const close = document.getElementById("close");
  const navMenu = document.getElementById("navmenu");
  const hide = document.getElementById("hide");

  bars.addEventListener("click", () => {
    navMenu.classList.add("show");
    hide.style.display = 'block';
  });

  close.addEventListener("click", () => {
    navMenu.classList.remove("show");
    hide.style.display = "none";
  });

  hide.addEventListener("click", () => {
    navMenu.classList.remove("show");
    hide.style.display = "none";
  })
});

let mybutton = document.getElementById("scrollToTop");
let navbar = document.getElementById("header");
let navLinks = document.querySelectorAll(".nav-link");

// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  scrollNav();
};

function scrollNav() {
  let homeSection = document.getElementById("home");
  let menuSection = document.getElementById("menu");
  let serviceSection = document.getElementById("service");
  let contactSection = document.getElementById("contact");

  let sections = [
    { section: homeSection, name: "home" },
    { section: menuSection, name: "menu" },
    { section: serviceSection, name: "service" },
    { section: contactSection, name: "contact" },
  ];

  let currentActive = "home"; // Default active section

  // Check if user is at the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    currentActive = "contact";
  } else {
    // Check which section is in the viewport
    sections.forEach((item) => {
      let section = item.section;
      let bounding = section.getBoundingClientRect();

      if (bounding.top <= 200 && bounding.bottom >= 200) {
        currentActive = item.name;
      }
    });
  }

  navLinks.forEach((link) => {
    if (link.getAttribute("href").substring(1) === currentActive) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.background = "#004225";
  } else {
    navbar.style.background = "transparent";
  }
}

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Add event listeners to navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});
