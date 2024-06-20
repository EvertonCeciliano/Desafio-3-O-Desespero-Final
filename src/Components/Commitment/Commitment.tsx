import styles from './Commitment.module.css'
export const Commitment = () => {
  return (
    <div className={styles.commitmentSection}>
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
  )
}


