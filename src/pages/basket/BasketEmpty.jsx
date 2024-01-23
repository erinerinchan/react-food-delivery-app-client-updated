import React from 'react'
import { Link } from 'react-router-dom'
import { useBasketContext } from '@/contexts/BasketContext'
import BasketContent from '@/pages/basket/BasketContent'

function BasketPage() {
  const { basket } = useBasketContext()
  if (basket.length < 1) {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <h2 className="mt-3 mb-3">Your basket is empty</h2>
          <Link to="/restaurants" className="btn mt-3 mb-3 font-weight-bold text-uppercase" style={{ background: '#0dcaf0' }}>
            Fill it
          </Link>
        </div>
      </div>
    )
  }
  return (
    <BasketContent />
  )
}

export default BasketPage
