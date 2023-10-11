import {  useContext } from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItem?.length > 0){
        return (
          context.filteredItem?.map((item)=>(
            <Card 
              key= {item.id} 
              data={item}
            />
          ))
        )
      } else {
        return (
          <div>We don't have anythings ☹</div>
        )
      }
     
      
      
    
  }

  return (
    <>
      <Layout>
      <div className='flex w-80 items-center justify-center relative mb-4'>
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        <input type="text" 
          placeholder='Search a product'
          className='rodunded-lg border border-black w-80 p-4 mb-4 focus-within:none' 
          onChange={(event) => context.setSearchByTitle(event.target.value) }
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            // por cada item pinta una card
            renderView()
          }
        </div>
        <ProductDetail/>
      </Layout>
    </>
  )
}

export  { Home }
