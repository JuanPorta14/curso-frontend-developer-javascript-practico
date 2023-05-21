const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".menu");
const compras = document.querySelector(".product-detail");
const carritoImg = document.querySelector(".navbar-shopping-cart");



email.addEventListener("click", () => {
    desktopMenu.classList.toggle("inactive")
    if (compras.classList.contains("inactive") == false){
        compras.classList.toggle("inactive");
    }
    

});
logo.addEventListener("click", () => {
    mobileMenu.classList.toggle("inactive")
    if (compras.classList.contains("inactive") == false){
        compras.classList.toggle("inactive");
    }
});
carritoImg.addEventListener("click", () =>{
    compras.classList.toggle("inactive")
    if (desktopMenu.classList.contains("inactive") == false){
        desktopMenu.classList.toggle("inactive");
    }
    else if (mobileMenu.classList.contains("inactive") == false){
        mobileMenu.classList.toggle("inactive");
    }

});

