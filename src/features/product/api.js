import { products } from './data'

// 전체 조회
export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 300)
  })
}

// 상세 조회
export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === Number(id))
      resolve(product)
    }, 300)
  })
}