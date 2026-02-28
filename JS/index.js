let openMenuButton = document.getElementById("open");
let menuMobile = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay_menu");
openMenuButton.addEventListener("click", ()=>{
    menuMobile.classList.add("opened");
});
menuMobile.addEventListener('click', () =>{
    menuMobile.classList.remove('opened');
});
overlay.addEventListener('click', () =>{
    menuMobile.classList.remove('opened');
});
