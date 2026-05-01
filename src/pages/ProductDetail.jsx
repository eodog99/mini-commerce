import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/product'
import { useCartStore } from '../store/cartStore'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
const addToCart = useCartStore((state) => state.addToCart)


  useEffect(() => {
    getProductById(id).then(setProduct)
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