import { useContext } from "react"
import { Layout } from "../../components/Layout"
import { OrdersCard } from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"


function MyOrders () {

    const context = useContext(ShoppingCartContext)

    return (
       <Layout>
        <div className='flex w-80 items-center justify-center relative mb-4'>
            <h1 className='font-medium text-xl'>My Orders</h1>
        </div>
        
        {
            context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                    totalProducts = {order.totalProducts}
                    totalPrice = {order.totalPrice}
                    />
                </Link>
                
            ))
        }
        
       </Layout>
    )
}

export {MyOrders}