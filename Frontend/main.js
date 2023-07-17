

const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.menu-desktop')

const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const shopingCart = document.querySelector('.navbar-shoping-cart')
const aside = document.querySelector('.product-details')

const productList = []

const cardsContainer = document.querySelector('.cards-container')

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

    aside.classList.toggle('inactive')
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
/* <!-- <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="product-img">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bikes</p>
    </div>
    <figure>
        <img src="./assets/icons/bt_add_to_cart.svg" alt="icon-add-to-car">
    </figure>
</div>
</div> --> */



function cargarProductos(array) {
    for(product of productList){

        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
    
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
    
        productInfoFigure.appendChild(productIconCart)
    
        productInfoDivP.append(productPrice, productName )

        productInfo.append(productInfoDivP,productInfoFigure)
    
        productCard.append(productImg,productInfo)
        
        cardsContainer.appendChild(productCard)

        
    }
}

cargarProductos(productList)