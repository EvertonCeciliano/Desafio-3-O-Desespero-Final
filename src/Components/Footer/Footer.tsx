import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.companyInfo}>
          <h2 className={styles.companyName}>Funiro.</h2>
          <p className={styles.address}>
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
          <ul className={styles.socialLinks}>
            <li><a href="https://facebook.com"><img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/facebook.svg" alt="Facebook" /></a></li>
            <li><a href="https://instagram.com"><img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/instagram.svg" alt="Instagram" /></a></li>
            <li><a href="https://twitter.com"><img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/twiter.svg" alt="Twitter" /></a></li>
            <li><a href="https://linkedin.com"><img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Linkedin.svg" alt="LinkedIn" /></a></li>
          </ul>
        </div>
        <div className={styles.linksSection}>
          <ul className={styles.linksList}>
            <h4>Links</h4>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.helpSection}>
          <ul className={styles.helpList}>
            <h4>Help</h4>
            <li><a href="/">Payment Options</a></li>
            <li><a href="/">Returns</a></li>
            <li><a href="/">Privacy Policies</a></li>
          </ul>
        </div>
        <div className={styles.newsletterSection}>
          <h4>Newsletter</h4>
          <div className={styles.inputWrapper}>
            <input type="email" className={styles.newsletterInput} placeholder="Enter Your Email Address" />
            <button className={styles.subscribeButton}><p>SUBSCRIBE</p></button>
          </div>
        </div>
      </div>
      <p className={styles.copyRight}>2023 Funiro. All rights reserved.</p>
    </footer>
  )
}
