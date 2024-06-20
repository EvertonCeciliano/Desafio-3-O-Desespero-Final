import React, { useEffect, useState } from "react";
import { Product, ProductData } from "../../Components/ProductCard/Product";
import {Button} from "../../Components/Button/Button";
import grid from "../../assets/grid.jpg";
import styles from "./Home.module.css";
import axios from "axios";
import { Carousel } from "../../Components/ImageSlider/ImageSlider";


export const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [visibleCount, setVisibleCount] = useState(8); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/affb51b5-4539-4912-80a4-f868e98bf7ca"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 8); 
  };

  return (
    <> 

      <section className={styles.section1}>
        <div className={styles.cardSection1}>
          <h2>New Arrival</h2>
          <h1>Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button>BUY NOW</button>
        </div>
      </section>
      <section className={styles.section2}>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className={styles.cardWrapper}>
          <div className={styles.categoryCard}>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dining.png"
              alt="Dining"
            />
            <p>Dining</p>
          </div>
          <div className={styles.categoryCard}>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/living.png"
              alt="Living"
            />
            <p>Living</p>
          </div>
          <div className={styles.categoryCard}>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/bedroom.png"
              alt="Bedroom"
            />
            <p>Bedroom</p>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <h2>Our Products</h2>
        <div className={styles.productsWrapper}>
  {products && products.length > 0 && products.slice(0, visibleCount).map((product) => (
    <Product key={product.id} product={product} />
  ))}
</div>
        <Button onClick={loadMoreProducts}>Show More</Button>
      </section>
      <section className={styles.section4}>
      <Carousel/>
      </section>
      <section className={styles.section5}>

        <img src={grid} alt="Grid" />
      </section>
    </>
  );
};