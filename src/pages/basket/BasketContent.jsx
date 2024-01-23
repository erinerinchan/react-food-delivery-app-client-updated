import React from 'react'
import styled from 'styled-components'
import CompsBreadcrumbs from '@/components/Breadcrumbs'
import { useBasketContext } from '@/contexts/BasketContext'
import { Link } from 'react-router-dom'
import BasketTotals from '@/components/basket/BasketTotals'
import BasketItem from '@/components/basket/BasketItem'

function PagesBasket() {
  const { basket, clearBasket } = useBasketContext()
  return (
    <div className="container mb-3">
      <CompsBreadcrumbs
        items={['Home', 'Basket']}
      />
      <Wrapper>
        <div className="content">
          <h5>Item</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Subtotal</h5>
          <span />
        </div>
        <hr />
      </Wrapper>
      {
        basket.map((item) => <BasketItem key={item.id} {...item} />)
      }
      <hr />
      <span style={{ width: '2rem', height: '2rem' }} />
      <div className="flex d-flex justify-content-between mt-5">
        <Link
          to="/restaurants"
          className="text-capitalize px-2 py-2 text-white rounded text-decoration-none"
          style={{
            background: '#d8ec9c',
            letterSpacing: 'var(--spacing)',
            fontWeight: '400'
          }}
        >
          Continue shopping
        </Link>
        <button
          type="button"
          className="text-capitalize px-2 py-2 text-white rounded border-0"
          style={{ background: '#00c1b2' }}
          onClick={clearBasket}
        >
          Clear Shopping Basket
        </button>
      </div>
      <div className="d-flex justify-content-end my-3">
        <BasketTotals />
      </div>
    </div>
  )
}

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`

export default PagesBasket
