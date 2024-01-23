import {
  ADD_TO_BASKET,
  CLEAR_BASKET,
  COUNT_BASKET_TOTALS,
  REMOVE_BASKET_ITEM,
  TOGGLE_BASKET_ITEM_AMOUNT
} from '../actions'

const BasketReducer = (state, action) => {
  if (action.type === ADD_TO_BASKET) {
    const { id, amount, product } = action.payload
    const tempItem = state.basket.find((i) => i.id === id)
    if (tempItem) {
      const tempBasket = state.basket.map((basketItem) => {
        if (basketItem.id === id) {
          let newAmount = basketItem.amount + amount
          if (newAmount > basketItem.max) {
            newAmount = basketItem.max
          }
          return { ...basketItem, amount: newAmount }
        }
        return basketItem
      })

      return { ...state, basket: tempBasket }
    }
    const newItem = {
      id,
      amount,
      image: product.image,
      price: product.price
    }
    return { ...state, basket: [...state.basket, newItem] }
  }
  if (action.type === REMOVE_BASKET_ITEM) {
    const tempBasket = state.basket.filter((item) => item.id !== action.payload)
    return { ...state, basket: tempBasket }
  }
  if (action.type === CLEAR_BASKET) {
    return { ...state, basket: [] }
  }
  if (action.type === TOGGLE_BASKET_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const tempBasket = state.basket.map((item) => {
      let newAmount = item.amount

      if (item.id === id) {
        if (value === 'inc' && newAmount + 1 <= 10) {
          newAmount += 1
        } else if (value === 'dec' && newAmount - 1 >= 1) {
          newAmount -= 1
        }
      }

      return { ...item, amount: newAmount }
    })

    return { ...state, basket: tempBasket }
  }
  if (action.type === COUNT_BASKET_TOTALS) {
    // eslint-disable-next-line camelcase
    const { total_items, total_amount } = state.basket.reduce(
      (total, basketItem) => {
        const { amount, price } = basketItem

        // eslint-disable-next-line no-param-reassign
        total.total_items += amount
        // eslint-disable-next-line no-param-reassign
        total.total_amount += price * amount
        return total
      },
      {
        total_items: 0,
        total_amount: 0
      }
    )
    // eslint-disable-next-line camelcase
    return { ...state, total_items, total_amount }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default BasketReducer
