/* eslint-disable camelcase,no-unused-vars */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useBasketContext } from '@/contexts/BasketContext'
import CheckoutForm from './CheckoutForm'
import { API_ENDPOINT } from '@/config'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

function StripeCheckout() {
  const { basket, total_amount, shipping_fee } = useBasketContext()
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    fetch(`${API_ENDPOINT}/api/payments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ basket, total_amount, shipping_fee })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  const appearance = {
    theme: 'stripe'
  }

  const options = {
    clientSecret,
    appearance
  }

  return (
    <Wrapper>
      {clientSecret && (
      <Elements options={options} stripe={promise}>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`

export default StripeCheckout
