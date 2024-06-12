import { Button } from '../../Components/Button/Button'
import { ImageSlider } from '../../Components/ImageSlider/ImageSlider'
import { Product } from '../../Components/ProductCard/Product'
import grid from '../../assets/grid.jpg'
import styles from './Home.module.css'
export const Home = () => {
  return (
    <>
    <section className={styles.section1}>
      <div className={styles.cardSection1}>
        <h2>New Arrival</h2>
        <h1>Discover Our New Collection</h1>
        <p>Lorem ipsum dolor sit 
          amet, consectetur adipiscing 
            elit. Ut elit tellus, 
            luctus nec ullamcorper
            mattis.</p>
            <button>BUY NOW</button>
      </div>
    </section>
    <section className={styles.section2}>
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className={styles.cardWrapper}>
      <div className={styles.categoryCard}>
        <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dining.png" alt="" />
        <p>Dining</p>
      </div>
      <div className={styles.categoryCard}>
        <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/living.png" alt="" />
        <p>Living</p>
      </div>
      <div className={styles.categoryCard}>
        <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/bedroom.png" alt="" />
        <p>Bedroom</p>
      </div>
      </div>
    </section>
    <section className={styles.section3}>
      <h2>Our Products</h2>
      <div className={styles.productsWrapper}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    <Button/>
    </section>
    <section className={styles.section4}>
        <ImageSlider />
    </section>
    <section className={styles.section5}>
    {/*Provisório(eu tenho que poupar tempo)*/}
      <img src={grid} alt="" />
    </section>
    </>
  )
}

