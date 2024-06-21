import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../../CartStore/CartSlice';
import styles from './SingleProduct.module.css';
import { Product, ProductData } from '../../Components/ProductCard/Product';
import { Button } from '../../Components/Button/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SingleProductProps {}

interface CartItem extends ProductData {
  size: string | null;
  color: string | null;
  quantity: number;
}

export const SingleProduct: React.FC<SingleProductProps> = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<ProductData | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductData[]>([]);
  const colors = ['#5f4f4f', '#004872', '#0000ff'];
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, prevQuantity + change);
      console.log('Nova quantidade:', newQuantity);
      return newQuantity;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
        `https://run.mocky.io/v3/affb51b5-4539-4912-80a4-f868e98bf7ca`
        );
        const productData = response.data.products.find(
          (prod: ProductData) => prod.id === parseInt(id ?? '')
        );
        setProduct(productData);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(
          'https://run.mocky.io/v3/affb51b5-4539-4912-80a4-f868e98bf7ca'
        );
        const allRelatedProducts = response.data.products;
        const similarProducts = allRelatedProducts.filter((relatedProduct: ProductData) => {
          return relatedProduct.tags.some((tag: string) => product?.tags.includes(tag));
        });
        setRelatedProducts(similarProducts);
      } catch (error) {
        console.error('Erro ao buscar produtos relacionados:', error);
      }
    };

    if (product) {
      fetchRelatedProducts();
    }
  }, [product]);

  const loadMoreProducts = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + 4);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select a size and color before adding to cart.');
      return;
    }

    if (product) {
      const itemToAdd: CartItem = {
        ...product,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
      };

      for (let i = 0; i < quantity; i++) {
        dispatch(addItem(itemToAdd));
      }

      toast.success('Item added to cart successfully!');
    }
  };

  return (
    <div >
      {product && (
        <>
          <div className={styles.path}>
            <p>Home</p>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg"
              alt=""
            />
            <p>Shop</p>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg"
              alt=""
            />
            <div className={styles.actualProduct}>
              <p className={styles.name}>{product.name}</p>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.imageProductWrapper}>
              <div className={styles.sideImages}>
                <div className={styles.imageContainer}>
                  <img src={product.image} alt="Product" />
                </div>
                <div className={styles.imageContainer}>
                  <img src={product.image} alt="Product" />
                </div>
                <div className={styles.imageContainer}>
                  <img src={product.image} alt="Product" />
                </div>
              </div>
              <div className={styles.actualImage}>
                <img src={product.image} alt={product.name} />
              </div>
            </div>
            <div className={styles.productInfo}>
              <h2>{product.name}</h2>
              <h3>
                Rs.{' '}
                {product.onSale
                  ? product.price - (product.price * product.discountPercentage) / 100
                  : product.price}
                {product.onSale && <span className={styles.salePrice}></span>}
              </h3>
              <div className={styles.reviews}>
                <div className={styles.star}>
                  <img
                    src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg"
                    alt="Star"
                  />
                  <img
                    src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg"
                    alt="Star"
                  />
                  <img
                    src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg"
                    alt="Star"
                  />
                  <img
                    src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg"
                    alt="Star"
                  />
                  <img
                    src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/stars.svg"
                    alt="Star"
                  />
                </div>
                <p>5 Customer Review</p>
              </div>
              <p className={styles.about}>
                {' '}
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div className={styles.sizeSection}>
                <p>Size</p>
                <div className={styles.sizeWrapper}>
                  {['L', 'XL', 'XS'].map((size) => (
                    <div
                      key={size}
                      className={`${styles.size} ${
                        selectedSize === size ? styles.selectedSize : ''
                      }`}
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
                      className={`${styles.color} ${
                        selectedColor === color ? styles.selectedColor : ''
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorClick(color)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className={styles.quantitySection}>
                <div className={styles.quantityWrapper}>
                  <div
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </div>
                  <p>{quantity}</p>
                  <div
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </div>
                </div>
                <button className={styles.addToCartButton} onClick={handleAddToCart}>
                  Add to Cart
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
                  <li>{product.SKU}</li>
                  <li>{product.category}</li>
                  <li>Tags placeholder</li>
                  <li className={styles.share}>
                    <a href="https://www.facebook.com/">
                      <img
                        src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/akar-icons_facebook-fill.svg"
                        alt="Facebook"
                      />
                    </a>
                    <a href="https://www.linkedin.com/">
                      <img
                        src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/akar-icons_linkedin-box-fill.svg"
                        alt="LinkedIn"
                      />
                    </a>
                    <a href="https://twitter.com/">
                      <img
                        src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/ant-design_twitter-circle-filled.svg"
                        alt="Twitter"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={styles.descriptionSection}>
        <div className={styles.descriptionSectionHeader}>
          <h2>Description</h2>
          <p>Additional information</p>
        </div>
        <div className={styles.paragraph}>
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className={styles.ImageWrapper}>
          <div className={styles.descriptionImage}>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Cloud+sofa+three+seater+%2B+ottoman_2+1.png"
              alt="Sofa"
            />
          </div>
          <div className={styles.descriptionImage}>
            <img
              src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/Cloud+sofa+three+seater+%2B+ottoman_2+1.png"
              alt="Sofa"
            />
          </div>
        </div>
      </div>
      <div className={styles.relatedProducts}>
        <h2>Related Products</h2>
        <div className={styles.cardsWrapper}>
          {relatedProducts.slice(0, visibleCount).map((relatedProduct) => (
            <div key={relatedProduct.id} className={styles.relatedProductCard}>
              <Product product={relatedProduct} />
            </div>
          ))}
        </div>
        {visibleCount < relatedProducts.length && (
          <Button onClick={loadMoreProducts}>Show More</Button>
        )}
      </div>
    </div>
  );
};
