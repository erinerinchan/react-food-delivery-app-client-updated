export const formatPrice = (number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'HKD'
}).format(number / 10)
