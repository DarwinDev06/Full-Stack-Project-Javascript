
/* import '../productDetail.css' */
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid' 
import './style.css'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filterProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filterProducts)
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
            <div className='px-6 overflow-y-scroll'>
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
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-lingth'> Total:  </span>
                    <span className='font-medium text-2xl'> ${ totalPrice(context.cartProducts) } </span>
                </p>
            </div>
        </aside>
    )

}

export {CheckoutSideMenu}