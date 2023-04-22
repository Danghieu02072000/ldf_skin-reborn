const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".header__list li a");

// mobile
const sections1 = document.querySelectorAll("section");
const navLi1 = document.querySelectorAll(".header-mobile__list li a");
window.onscroll = () => {
  if(window.scrollX < 800){
    var current = "";

    sections.forEach((section) => {
      var pageYOffset = window.scrollY;
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id"); }
    });
  
    navLi1.forEach((li) => {
      li.classList.remove("active1");
      if (li.classList.contains(current)) {
        li.classList.add("active1");
      }
    });
  }
  var current = "";

  sections.forEach((section) => {
    var pageYOffset = window.scrollY;
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

};