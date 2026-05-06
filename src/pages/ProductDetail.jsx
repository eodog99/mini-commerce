import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getProductById } from '../features/product/api'
import { useCartStore } from '../features/cart/store'
function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
const addToCart = useCartStore((state) => state.addToCart)


  useEffect(() => {
    getProducts(id).then(setProduct)
  }, [id])

  if (!product) return <div>로딩중...</div>

return (
  <div>
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title} width={200} />
    <p>{product.description}</p>
    <h3>${product.price}</h3>

    <button onClick={() => addToCart(product)}>
      장바구니 담기
    </button>
  </div>
)
}

export default ProductDetail