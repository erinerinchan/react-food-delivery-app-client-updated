/* eslint-disable no-lonely-if */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useBasketContext } from '@/contexts/BasketContext'
import { useAuth0 } from '@auth0/auth0-react'
import { formatPrice } from '@/utils/helpers'

export default function BackupCheckoutForm({ clientSecret }) {
  const { total_amount, shipping_fee } = useBasketContext()
  const { user: myUser } = useAuth0

  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  }

  useEffect(() => {
    console.log('--- stripe', stripe)

    if (!stripe) {
      return
    }

    console.log('--- window.location.search', window.location.search)
    console.log('--- clientSecret', clientSecret)

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded! Your order is on its way!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      },
      return_url: 'http://localhost:8080'
    })
    console.log('--- paymentIntent', paymentIntent)
    console.log('--- Error in Payment', error)

    if (paymentIntent) {
      setMessage('Payment succeeded! Your order is on its way!')
    } else {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message)
      } else {
        setMessage('An unexpected error occurred.')
      }
    }

    setIsLoading(false)
  }

  return (
    <div>
      <article>
        <h4>Hello, {myUser && myUser.name}</h4>
        <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
        <p>Test Card Number : 4242 4242 4242 4242</p>
      </article>
      <form className="align-self-center" style={{ width: '30vw', borderRadius: '7px', padding: '40px' }} onSubmit={handleSubmit}>
        <CardElement
          className="p-3 w-100 bg-light bordered-box"
          style={{ borderRadius: '4px 4px 0 0', border: '1px solid rgba(50, 50, 93, 0.1)', maxHeight: '44px' }}
          options={cardStyle}
        />
        <button
          className="text-white border-0 p-3 h-6 fw-bold d-block w-100 mb-4"
          style={{ background: '#5469d4', fontFamily: 'Arial, sans-serif', borderRadius: '0 0 4px 4px', transition: 'all 0.2s ease', boxShadow: '0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)' }}
          type="submit"
          disabled={isLoading || !stripe || !elements}
        >
          <span>
            {isLoading ? <div className="spinner" /> : 'Pay'}
          </span>
        </button>
        {/* Show any error or success messages */}
        <h5>{message && <div id="payment-message">{message}</div>}</h5>
      </form>
    </div>
  )
}
