import React from 'react'
import CompsBreadcrumbs from '@/components/Breadcrumbs'
import StripeCheckout from '@/components/checkout/StripeCheckout'
// import { useBasketContext } from '@/contexts/BasketContext'
// import { Link } from 'react-router-dom'

function Checkout() {
  // const { basket } = useBasketContext()
  return (
    <div className="container mb-3">
      <CompsBreadcrumbs
        items={['Home', 'Checkout']}
      />
      <div className="d-flex justify-content-center">
        <StripeCheckout />
      </div>
    </div>
  )
}

export default Checkout
