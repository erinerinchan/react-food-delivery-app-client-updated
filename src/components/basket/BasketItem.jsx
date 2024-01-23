import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '@/utils/helpers'
import AmountButtons from '@/components/AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useBasketContext } from '@/contexts/BasketContext'

function BasketItem({ id, image, price, amount }) {
  const { removeItem, toggleAmount } = useBasketContext()

  const increase = () => {
    toggleAmount(id, 'inc')
  }

  const decrease = () => {
    toggleAmount(id, 'dec')
  }

  return (
    <Wrapper>
      <div className="title">
        <img className="rounded" src={image} />
        <div>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">
        {formatPrice(price * amount)}
      </h5>
      <button
        type="button"
        className="remove-btn rounded"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }

  .price {
    display: none;
  }

  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;

  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .price-small {
    color: var(--clr-primary-5);
  }

  .remove-btn {
    color: white;
    border: transparent;
    background: red;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    cursor: pointer;
  }

  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default BasketItem
