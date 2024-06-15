import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Product.module.css';
import NewTag from '../Tags/NewTag';
import SaleTag from '../Tags/SaleTag';

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  priceDiscount: number | null;
  image: string;
  onSale: boolean;
  discountPercentage: number;
  isNew: boolean;
  category: string;
}

interface ProductProps {
  product: ProductData;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();

  const renderTag = () => {
    if (product.onSale) {
      return <SaleTag onSale discountPercentage={product.discountPercentage} />;
    } else if (product.isNew) {
      return <NewTag isNew={product.isNew} />;
    }
    return null;
  };

  const handleClick = () => {
    navigate(`/product/${product.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.productCard} onClick={handleClick}>
      {renderTag()}
      <img src={product.image} alt={product.name} />
      <div className={styles.infos}>
        <div className={styles.nameWrapper}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>Rp {product.price.toLocaleString()}</p>
          {product.priceDiscount && (
            <p className={styles.priceDiscount}>
              Rp {product.priceDiscount.toLocaleString()}
            </p>
          )}
        </div>
      </div>
      <div className={styles.overlay}>
        <button className={styles.addToCartButton}>Add to Cart</button>
        <ul>
          <li>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/share.svg"
              alt="share"
            />
            <p>Share</p>
          </li>
          <li>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/compare.svg"
              alt="compare"
            />
            <p>compare</p>
          </li>
          <li>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/like.svg"
              alt="like"
            />
            <p>like</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
