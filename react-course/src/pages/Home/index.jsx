import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"

function Home() {

  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItem(data))
  },[ ])

  return (
    <>
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            // por cada item pinta una card
            item?.map((item)=>(
              <Card 
                key= {item.id} 
                data={item}
              />
            ))
          }
        </div>
        <ProductDetail/>
      </Layout>
    </>
  )
}

export  { Home }
