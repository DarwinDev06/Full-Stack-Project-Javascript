

const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.menu-desktop')

const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const shopingCart = document.querySelector('.navbar-shoping-cart')
const shoppingCartContainer = document.querySelector('#shopping-cart-container')

const productList = []

const cardsContainer = document.querySelector('.cards-container')

const productDetailsContainer = document.querySelector('#product-details')
const productDetailsClose = document.querySelector('.product-details-close')

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
shopingCart.addEventListener('click', showProductDetails)
productDetailsClose.addEventListener('click', closeProductDetails)


function toggleDesktopMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetails()

    desktopMenu.classList.toggle('inactive')
    
}

function toggleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetails()

    mobileMenu.classList.toggle('inactive')

}

function showProductDetails(){
    const isMobilmenuClose = mobileMenu.classList.contains('inactive')
    const isMenudeskClose = desktopMenu.classList.contains('inactive')

    if(!isMobilmenuClose || !isMenudeskClose){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }
    
    closeProductDetails()

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetails(){
    const isAsideClose = shoppingCartContainer.classList.add('inactive')
    const isMenudeskClose = desktopMenu.classList.add('inactive')
    
    productDetailsContainer.classList.remove('inactive')

}

function closeProductDetails (){
    productDetailsContainer.classList.add('inactive')
}

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600"
})

productList.push({
    name: "Jeep",
    price: 9200,
    image: "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=600"
})

productList.push({
    name: "AirPods",
    price: 150,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600"
})


function cargarProductos(array) {
    for(product of productList){

        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
        productImg.addEventListener('click', openProductDetails)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDivP = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = `$${product.price}`
    
        const productName = document.createElement('p')
        productName.innerText = product.name

        const productInfoFigure = document.createElement('figure')

        const productIconCart = document.createElement('img')
        productIconCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg')
    
        //se realiza la inyeccion de html de adentro hacia afuera 
        productInfoFigure.appendChild(productIconCart)
    
        productInfoDivP.append(productPrice, productName )

        productInfo.append(productInfoDivP,productInfoFigure)
    
        productCard.append(productImg,productInfo)
        
        cardsContainer.appendChild(productCard)
        
    }
}

cargarProductos(productList)