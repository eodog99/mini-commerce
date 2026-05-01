import { useEffect, useState } from 'react'
import { getProducts } from '../api/product'
import ProductCard from '../components/ProductCard'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <div className="container">
      <h1>상품 리스트</h1>

      <div className="grid">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Home