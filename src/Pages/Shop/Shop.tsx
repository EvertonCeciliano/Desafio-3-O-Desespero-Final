import React from 'react';
import { Product } from '../../Components/ProductCard/Product';
import styles from './Shop.module.css';

export const Shop = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.path}>
          <h2>Shop</h2>
          <div className={styles.pathWrapper}>
            <p>Home</p>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg" alt="" />
            <p>Shop</p>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.left}>
          <div className={styles.filter}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/filter.svg" alt="Filter Icon" />
            <select>
              <option value="filter">Filter</option>
              <option value="filter1">Filter Option 1</option>
              <option value="filter2">Filter Option 2</option>
            </select>
          </div>
          <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/grid-round.svg" alt="Grid View" />
          <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/viewslist.png" alt="List View" />
          <div className={styles.showing}>
            <p>Showing 1–16 of 32 results</p>
          </div>
        </div>
        <div className={styles.showShort}>
          <div className={styles.show}>
            <p>Show</p>
            <select className={styles.showNumber}>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>
          <div className={styles.shortBy}>
            <p>Sort by</p>
            <select className={styles.shortOptions}>
              <option value="default">Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.productsWrapper}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className={styles.pagination}>
        <div className={styles.pages}>
          <p className={styles.active}><span>1</span></p>
          <p><span>2</span></p>
          <p><span>3</span></p>
          <button>Next</button>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.commitment}>
          <div className={styles.commitmentWrapper}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/trofeu.svg" alt="High Quality" />
            <div className={styles.textWrapper}>
              <h4>High Quality</h4>
              <p>Crafted from top materials</p>
            </div>
          </div>
          <div className={styles.commitmentWrapper}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/warranty.svg" alt="Warranty Protection" />
            <div className={styles.textWrapper}>
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className={styles.commitmentWrapper}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/shipping.svg" alt="Free Shipping" />
            <div className={styles.textWrapper}>
              <h4>Free Shipping</h4>
              <p>Order over $150</p>
            </div>
          </div>
          <div className={styles.commitmentWrapper}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/suport.svg" alt="24/7 Support" />
            <div className={styles.textWrapper}>
              <h4>24/7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
