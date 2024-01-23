/* eslint-disable camelcase */
import { useBasketContext } from '@/contexts/BasketContext'

const express = require('express')

const app = express()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

app.use(express.static('public'))
app.use(express.json())

const calculateOrderAmount = () => {
  const { shipping_fee, total_amount } = useBasketContext()
  return shipping_fee + total_amount
}

app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'hkd',
    automatic_payment_methods: {
      enabled: true
    }
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

app.listen(3000, () => console.log('Node server listening on port 3000!'))
