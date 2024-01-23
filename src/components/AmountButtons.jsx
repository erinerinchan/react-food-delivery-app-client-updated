import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

function AmountButtons({ amount, increase, decrease }) {
  return (
    <div id="amount-btn" className="px-2">
      <div className="amount-btn d-flex flex-nowrap">
        <button
          type="button"
          className="border-0 bg-transparent"
          onClick={() => decrease()}
          disabled={amount <= 1}
        >
          <FaMinus />
        </button>
        <h2>{amount}</h2>
        <button
          type="button"
          className="border-0 bg-transparent"
          onClick={() => increase()}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default AmountButtons
