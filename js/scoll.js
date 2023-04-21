var nav_top = document.querySelector('#header__pc-top');
var nav_bottom =document.querySelector('#header__pc-logo')
window.addEventListener('scroll', () => {
    if(window.scrollY > 1){
        nav_bottom.classList.add("header__logo-fix")
        nav_bottom.classList.remove("header__pc-logo")
        nav_top.classList.add("header_pc-fix");
        nav_top.classList.remove("header__pc-top");
    }
    else{
        nav_bottom.classList.add("header__pc-logo")
        nav_bottom.classList.remove("header__logo-fix")
        nav_top.classList.add("header__pc-top");
        nav_top.classList.remove("header_pc-fix");
    }
})