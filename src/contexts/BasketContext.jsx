import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/BasketReducer'
import {
  ADD_TO_BASKET,
  REMOVE_BASKET_ITEM,
  TOGGLE_BASKET_ITEM_AMOUNT,
  CLEAR_BASKET,
  COUNT_BASKET_TOTALS
} from '../actions'

const getLocalStorage = () => {
  const basket = localStorage.getItem('basket')
  if (basket) {
    return JSON.parse(localStorage.getItem('basket'))
  }
  return []
}

const initialState = {
  basket: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 200
}

const BasketContext = React.createContext()

export function BasketProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // add to basket
  const addToBasket = (id, amount, product) => {
    dispatch({ type: ADD_TO_BASKET, payload: { id, amount, product } })
  }
  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_BASKET_ITEM, payload: id })
  }
  // toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_BASKET_ITEM_AMOUNT, payload: { id, value } })
  }
  // clear basket
  const clearBasket = () => {
    dispatch({ type: CLEAR_BASKET })
  }

  useEffect(() => {
    dispatch({ type: COUNT_BASKET_TOTALS })
    localStorage.setItem('basket', JSON.stringify(state.basket))
  }, [state.basket])

  return (
    <BasketContext.Provider
      value={{ ...state, addToBasket, removeItem, toggleAmount, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  )
}
export const useBasketContext = () => useContext(BasketContext)
