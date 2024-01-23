import React, { useState } from 'react'
import AmountButtons from '@/components/AmountButtons'
import { Link } from 'react-router-dom'
import { useBasketContext } from '../../contexts/BasketContext'

function ProductCard({ meal }) {
  const { addToBasket } = useBasketContext()
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount(amount + 1)
  }

  const decrease = () => {
    setAmount(amount - 1)
  }

  return (
    <div key={meal._id} className="col">
      <div className="card h-100 pointer">
        <div className="row g-0">
          <div className="col-12 col-sm-6">
            <div className="card-body">
              <h5 className="card-title">{meal.name}</h5>
              <p className="card-desc">{meal.description}</p>
              <p className="card-price">${meal.price}</p>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <img className="card-img" src={meal.image} alt="meal" />
          </div>
          {/* Amount button */}
          <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
          {/* Add to cart button */}
          <Link
            to="/basket"
            className="btn"
            onClick={() => addToBasket(meal._id, amount, meal)}
          >
            Add to basket
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
