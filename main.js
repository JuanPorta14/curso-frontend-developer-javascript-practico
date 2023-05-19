function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    console.log("click");
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    console.log("click");
}
const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".menu");

email.addEventListener("click", toggleDesktopMenu);
logo.addEventListener("click", toggleMobileMenu);
