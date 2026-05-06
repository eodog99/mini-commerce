import { useNavigate } from 'react-router-dom'

function ProductCard({ item }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${item.id}`)
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
    </div>
  )
}

export default ProductCard