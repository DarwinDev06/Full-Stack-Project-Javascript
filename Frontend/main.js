

const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.menu-desktop')

const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const shopingCart = document.querySelector('.navbar-shoping-cart')
const aside = document.querySelector('.product-details')



menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
shopingCart.addEventListener('click', showProductDetails)

function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive')

    if(!isAsideClose){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
    
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive')

    if(!isAsideClose){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

}

function showProductDetails(){
    const isMobilmenuClose = mobileMenu.classList.contains('inactive')
    const isMenudeskClose = desktopMenu.classList.contains('inactive')

    if(!isMobilmenuClose || !isMenudeskClose){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }
    console.log(document.querySelector('.mobile-menu'))
    aside.classList.toggle('inactive')
    
}