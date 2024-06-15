import React, { useState } from 'react';
import styles from './SingleProduct.module.css';

import { Button } from '../../Components/Button/Button';


export const SingleProduct: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const colors = ['#816DFA', '#000000', '#B88E2F']; // Exemplo de array de cores

  return (
    <>
      <div className={styles.path}>
        <p>Home</p>
        <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg" alt="" />
        <p>Shop</p>
        <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg" alt="" />
        <div className={styles.actualproduct}>
          Asgard sofa
        </div>
      </div>
      <div className={styles.Product}>
        <div className={styles.SidePhotos}>
          <div className={styles.imageContainer}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Maya+sofa+three+seater+(1)+1.png" alt="Sofa" />
          </div>
          <div className={styles.imageContainer}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Maya+sofa+three+seater+(1)+1.png" alt="Sofa" />
          </div>
          <div className={styles.imageContainer}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Maya+sofa+three+seater+(1)+1.png" alt="Sofa" />
          </div>
          <div className={styles.imageContainer}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Maya+sofa+three+seater+(1)+1.png" alt="Sofa" />
          </div>
        </div>
        <div className={styles.actualImage}>
          <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Asgaard+sofa+3.png" alt="Asgard Sofa" />
        </div>
        <div className={styles.productInfo}>
          <h2>Asgard Sofa</h2>
          <h3>Rs. 250,000.00</h3>
          <div className={styles.reviews}>
            <div className={styles.star}>
              <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg" alt="Star" />
              <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg" alt="Star" />
              <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg" alt="Star" />
              <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg" alt="Star" />
              <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg" alt="Star" />
            </div>
            <p>5 Customer Review</p>
          </div>
          <p>
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className={styles.sizeSection}>
            <p>Size</p>
            <div className={styles.sizeWrapper}>
              {['L', 'XL', 'XS'].map((size) => (
                <div
                  key={size}
                  className={`${styles.size} ${selectedSize === size ? styles.selectedSize : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.colorSection}>
            <p>Color</p>
            <div className={styles.colorWrapper}>
              {colors.map((color) => (
                <div
                  key={color}
                  className={`${styles.color} ${selectedColor === color ? styles.selectedColor : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.quantitySection}>
            <div className={styles.quantityWrapper}>
              <div onClick={() => handleQuantityChange(-1)}>-</div>
              <p>{quantity}</p>
              <div onClick={() => handleQuantityChange(1)}>+</div>
            </div>
            <button>
              Add to cart
            </button>
          </div>
          <div className={styles.infos}>
            <ul>
              <li>SKU</li>
              <li>Category</li>
              <li>Tags</li>
              <li>Share</li>
            </ul>
            <ul>
              <li>:</li>
              <li>:</li>
              <li>:</li>
              <li>:</li>
            </ul>
            <ul>
              <li> SPASS001</li>
              <li>Sofa</li>
              <li>Sofa, Chair, Home, Shop</li>
              <li className={styles.share}>
                <a href="https://www.facebook.com/">
                  <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/akar-icons_facebook-fill.svg" alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/">
                  <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/akar-icons_linkedin-box-fill.svg" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/">
                  <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/ant-design_twitter-circle-filled.svg" alt="Twitter" />
                </a>

              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className={styles.descriptionSection}>
        <div className={styles.title}>
          <h2>Description</h2>
          <h2>Adicional Information</h2>
        </div>
        <div className={styles.paragraph}>
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight
            piece of vintage styled engineering. Setting the bar as one
            of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear
            midrange and extended highs for a sound that is both articulate and
            pronounced. The analogue knobs allow you to fine tune the controls
            to your personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.</p>
        </div>
        <div className={styles.ImageWrapper}>
          <div className={styles.descriptionImage}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Cloud+sofa+three+seater+%2B+ottoman_2+1.png" alt="Sofa" />
          </div>
          <div className={styles.descriptionImage}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Cloud+sofa+three+seater+%2B+ottoman_2+1.png" alt="Sofa" />
          </div>
        </div>
      </div>
      <div className={styles.relatedProducts}>
        <h2>Related Products</h2>
            <div className={styles.cardsWrapper}>
            
            </div>
            <Button/>
      </div>
    </>
  );
};
