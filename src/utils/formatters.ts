
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', 
  }).format(value);
};

export const formatDiscountPercentage = (discount: number): string => {
  return `${discount.toFixed(1)}% off`;
};


