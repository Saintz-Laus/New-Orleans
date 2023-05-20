const btn_sociais = document.querySelector("#open__sociais");
const btn_menu = document.querySelector("#open__menu");
const sociais = document.querySelector(".header__sociais");
const menu = document.querySelector(".header__items");
const header = document.querySelector('header');


btn_sociais.addEventListener("click", () => {

    sociais.classList.toggle('open__display');

});


btn_menu.addEventListener("click", () =>{

    menu.classList.toggle('saas');
});


window.addEventListener('scroll', () => {
    if(window.scrollY >=50) {
        header.classList.add('header__color')
    } else {
        header.classList.remove('header__color');
    }
});