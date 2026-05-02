import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

function Header() {
  const cartItems = useCartStore((state) => state.cartItems)

  // 총 개수 계산
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="header">
      <Link to="/">🛒 Mini Shop</Link>

      <Link to="/cart" className="cart">
        🧺 장바구니 ({totalCount})
      </Link>
    </header>
  )
}

export default Header