import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (product) =>
    set((state) => {
      const exist = state.cartItems.find((item) => item.id === product.id)

      if (exist) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }

      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  increase: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decrease: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0),
    })),
}))