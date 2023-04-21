
var hamburger = document.querySelector('#mobile_menu');
var header = document.querySelector('.header__mobie');
hamburger.onclick = function() {
    header.classList.toggle("active");
}
