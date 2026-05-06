function CategoryMenu({ selected, onSelect }) {
  const categories = ['all', 'electronics', 'fashion']

  return (
    <div className="menu">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? 'active' : ''}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryMenu