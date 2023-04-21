const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".header__list li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    var pageYOffset = window.scrollY;
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
      console.log(current);
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
