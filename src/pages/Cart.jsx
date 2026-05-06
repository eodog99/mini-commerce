import { useCartStore } from '../features/cart/store'

function Cart() {
  const { cartItems, increase, decrease, removeFromCart } = useCartStore()

  // 총 금액 계산
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  // 빈 상태 처리
  if (cartItems.length === 0) {
    return <div className="empty">🛒 장바구니가 비어있습니다.</div>
  }

  return (
    <div className="cart-container">
      <h1>장바구니</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />

            <div className="info">
              <h3>{item.title}</h3>
              <p>${item.price}</p>

              <div className="controls">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>
            </div>

            <button
              className="remove"
              onClick={() => removeFromCart(item.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      <div className="total">
        총 금액: <strong>${totalPrice.toFixed(2)}</strong>
      </div>
    </div>
  )
}

export default Cart