

const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.menu-desktop')


menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    console.log("inactive")
    desktopMenu.classList.toggle('inactive')
}