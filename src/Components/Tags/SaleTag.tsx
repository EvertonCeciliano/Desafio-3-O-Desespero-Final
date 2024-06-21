import React from 'react';
import styles from '../ProductCard/Product.module.css';

interface SaleTagProps {
  onSale: boolean;
  discountPercentage: number
}

const SaleTag: React.FC<SaleTagProps> = ({ onSale, discountPercentage }) => {
  if (!onSale || discountPercentage == null) return null; 

  return (
    <div className={`${styles.tag} ${styles.saleTag}`}>
      <p>-{discountPercentage.toFixed(0)}%</p>
    </div>
  );
};

export default SaleTag;
