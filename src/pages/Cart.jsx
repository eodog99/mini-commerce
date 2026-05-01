import { useCartStore } from '../store/cartStore'

function Cart() {
  const { cartItems, increase, decrease, removeFromCart } = useCartStore()

  return (
    <div>
      <h1>장바구니</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price} $</p>
          <p>수량: {item.quantity}</p>

          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  )
}

export default Cart