function formatMoney (amount = 0) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  }

  if (amount % 100 === 0){
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-us', options);
  
  return formatter.format(amount / 100)
}

export {
  formatMoney
}