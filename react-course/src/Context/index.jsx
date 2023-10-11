
import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping cart · increment quantity
    const [count, setCount] = useState(0)

    // Product Detail · open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail = () => { setIsProductDetailOpen(true) }
    const closeProductDetail = () => { setIsProductDetailOpen(false) }

    // Product Detail · Show Products
    const [productToShow, setProductToShow] = useState({ })

    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Checkout Side Menu · open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

    const openCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(true) }
    const closeCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(false) }

    // Shopping Cart · My order
    const [order, setOrder] = useState([])

    //get products
    const [item, setItem] = useState(null)
    const [filteredItem, setFilteredItem] = useState(null)

    // get Products By Title
    const [searchByTitle,setSearchByTitle] = useState(null)

    // get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)


    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItem(data))
    },[ ])

    const filteredItemsByTitle = (item, searchByTitle) => {
        return item?.filter(items => items.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (item, searchByCategory) => {
        
        return item?.filter(items => items.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType,item,searchByTitle,searchByCategory) => {
        if(searchType === 'BY_TITLE') {
            return filteredItemsByTitle(item,searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(item,searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(item,searchByCategory).filter(items => items.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType ) {
            return item
        }

/*         console.log('filterBY: ', searchType, ' * ',item, ' * ', searchByTitle, ' * ', searchByCategory)
        //console.log(filterBy('BY_CATEGORY',item,searchByTitle,searchByCategory))
        console.log('preuba FI: ', filteredItemsByCategory(item,searchByCategory)) */
    } 
    useEffect(()=>{
        if(searchByTitle && searchByCategory) setFilteredItem(filterBy('BY_TITLE_AND_CATEGORY',item,searchByTitle,searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItem(filterBy('BY_TITLE',item,searchByTitle,searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItem(filterBy('BY_CATEGORY',item,searchByTitle,searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItem(filterBy(null,item,searchByTitle,searchByCategory))
       
    },[item,searchByTitle,searchByCategory])

    console.log('item ',item)
    console.log('category ',searchByCategory)
    console.log('filter',filteredItem)


    return (
        <ShoppingCartContext.Provider value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                item,
                setItem,
                searchByTitle,
                setSearchByTitle,
                filteredItem,
                setFilteredItem,
                searchByCategory,
                setSearchByCategory
            }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}