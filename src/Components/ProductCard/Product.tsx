import styles from './Product.module.css'
export const Product = () => {
  return (
    <div className={styles.productCard}>
      <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Syltherine.png" alt="" />
      <div className={styles.infos}>
      <div className={styles.nameWrapper}>
      <h2>Syltherine</h2>
      <p>Stylish cafe chair</p>
      </div>
      <div className={styles.priceWrapper}>
      <p className={styles.price}>Rp 2.500.000</p>
      <p className={styles.priceDiscount}>Rp 3.500.000</p>
      </div>
      </div>
    </div>
  )
}

