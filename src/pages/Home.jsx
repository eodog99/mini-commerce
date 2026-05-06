import { useEffect, useState } from 'react'

import { getProducts } from '../features/product/api'

import ProductCard from '../features/product/components/ProductCard'
import CategoryMenu from '../features/product/components/CategoryMenu'



function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [category, setCategory] = useState('all')

  // API 호출
  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  // debounce 처리
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)

    return () => clearTimeout(timer)
  }, [search])

  // 필터링
const filteredProducts = products
  .filter((item) =>
    item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  )
  .filter((item) =>
    category === 'all' ? true : item.category === category
  )

  return (
    <div className="container">
      <h1>상품 리스트</h1>
<CategoryMenu selected={category} onSelect={setCategory} />
      {/* 🔍 검색창 */}
      <input
        type="text"
        placeholder="상품 검색..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🛍 상품 리스트 */}
      <div className="grid">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Home