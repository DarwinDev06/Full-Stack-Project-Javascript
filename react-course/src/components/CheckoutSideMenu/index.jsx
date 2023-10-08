
/* import '../productDetail.css' */
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid' 
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './style.css'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filterProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filterProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '07.10.2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkoutSideMenu flex-col fixed   right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                        className='h-6 w-6 text-black cursor-pointer' 
                        onClick={() => context.closeCheckoutSideMenu()} />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map( product => (
                        <OrderCard
                            key = {product.id}
                            id = {product.id}
                            title = {product.title}
                            imageUrl = {product.images}
                            price = {product.price} 
                            handleDelete = { handleDelete }
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-lingth'> Total:  </span>
                    <span className='font-medium text-2xl'> ${ totalPrice(context.cartProducts) } </span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                        className='bg-black py-3 text-white  w-full rounded-lg' 
                        onClick={() => handleCheckout()}>
                        Checkout
                    </button>
                </Link>
                
            </div>
        </aside>
    )

}

export {CheckoutSideMenu}