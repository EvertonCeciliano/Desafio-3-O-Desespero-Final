import styles from './Header.module.css'

export function Header(){
  return(

    
<header>
  <img className={styles.logo} src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/logo.svg" alt="" />
  <ul className={styles.navbar}>
  <li><a href="/">Home</a></li>
<li><a href="/shop">Shop</a></li>
<li><a href="about">About</a></li>
<li><a href="/contact">Contact</a></li>

  </ul> 
    <div className={styles.cart}>
  <ul className={styles.menu}>
    <li> <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/cart.svg" alt="" /></li>
    <li><img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/usericon.svg" alt="" /></li>
  </ul>
    </div>
</header>
  )
}