import React from 'react'
import { Link } from 'react-router-dom'
import { useBasketContext } from '@/contexts/BasketContext'
import { formatPrice } from '@/utils/helpers'
import { useAuth0 } from '@auth0/auth0-react'

const font = {
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  color: '#00c1b2'
}

const btn = {
  background: '#00c1b2',
  color: 'white',
  padding: '0.375rem 0.75rem',
  fontWeight: '400',
  transition: 'var(--transition)',
  fontSize: '0.875rem',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
  borderRadius: '5px',
  marginTop: '1rem',
  textDecoration: 'none'
}

function BasketTotals() {
  // eslint-disable-next-line camelcase
  const { total_amount, shipping_fee } = useBasketContext()
  const { loginWithRedirect, user: myUser } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/'
      }
    })
  }

  return (
    <div className="mt-3 flex justify-content-center" style={{ width: '500px' }}>
      <div className="rounded grid w-100 px-4 py-5 border border-info">
        <h5 style={font}>
          Subtotal: <span>{formatPrice(total_amount)}</span>
        </h5>
        <p style={font}>
          Shipping Fee: <span>{formatPrice(shipping_fee)}</span>
        </p>
        <hr style={{ color: '#00c1b2', border: '1px solid' }} />
        <h4 style={font}>
          Order total: {' '}
          {/* eslint-disable-next-line camelcase */}
          <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>
      </div>
      { myUser ? (
        <Link
          to="/checkout"
          className="w-100 d-flex justify-content-center font-weight-bold text-uppercase d-print-inline-block"
          style={btn}
        >
          Proceed to checkout
        </Link>
      ) : (
        <button
          type="button"
          className="w-100 d-flex justify-content-center font-weight-bold text-uppercase d-print-inline-block"
          style={btn}
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </div>
  )
}

export default BasketTotals
