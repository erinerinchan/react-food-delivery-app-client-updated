import React from 'react'
import ProductCard from '@/components/restaurants/ProductCard'

function ProductCategory({ food }) {
  return (
    <section className="mb-3 mt-5">
      <h3 className="name">{food.name}</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* eslint-disable-next-line no-shadow */}
        {food.meals.map((meal) => (
          <ProductCard key={meal._id} meal={meal} />
        ))}
      </div>
    </section>
  )
}

export default ProductCategory
