import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../CartStore/CartSlice';

import { CaretRight } from '@phosphor-icons/react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Product, ProductData } from '../../Components/ProductCard/Product';
import {
  Container,
  Header,
  Path,
  PathWrapper,
  Content,
  ProductSection,
  ImageSection,
  MainImage,
  ThumbnailGrid,
  Thumbnail,
  InfoSection,
  ProductName,
  PriceSection,
  Price,
  DiscountPrice,
  Description,
  Divider,
  ActionSection,
  QuantityControl,
  AddToCartButton,
  ProductInfo,
  RelatedProducts,
  ProductGrid
} from './styles';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState<ProductData | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductData[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(response.data);
        setLoading(false);

        // Fetch related products from the same category
        const relatedResponse = await axios.get('http://localhost:3001/products');
        const filtered = relatedResponse.data
          .filter((p: ProductData) => p.category === response.data.category && p.id !== response.data.id)
          .slice(0, 4);
        setRelatedProducts(filtered);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
        navigate('/shop');
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('IDR', 'Rp');
  };

  const calculateDiscountPrice = (price: number, discount: number) => {
    return Math.floor(price - (price * discount) / 100);
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        dispatch(addToCart(product));
      }
      toast.success(`${quantity} item(s) added to cart successfully!`);
    }
  };

  if (loading || !product) {
    return (
      <Container>
        <Header>
          <Path>
            <h2>Loading...</h2>
          </Path>
        </Header>
      </Container>
    );
  }

  const discountedPrice = product.onSale
    ? calculateDiscountPrice(product.price, product.discountPercentage)
    : null;

  // Simulate multiple product images (in a real app, this would come from the API)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <Container>
      <Header>
        <Path>
          <h2>{product.name}</h2>
          <PathWrapper>
            <p>Home</p>
            <CaretRight size={20} />
            <p>Shop</p>
            <CaretRight size={20} />
            <p>{product.name}</p>
          </PathWrapper>
        </Path>
      </Header>

      <Content>
        <ProductSection>
          <ImageSection>
            <MainImage>
              <img src={productImages[selectedImage]} alt={product.name} />
            </MainImage>
            <ThumbnailGrid>
              {productImages.map((image, index) => (
                <Thumbnail
                  key={index}
                  active={selectedImage === index}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} />
                </Thumbnail>
              ))}
            </ThumbnailGrid>
          </ImageSection>

          <InfoSection>
            <ProductName>{product.name}</ProductName>
            <PriceSection>
              {discountedPrice ? (
                <>
                  <Price>{formatPrice(discountedPrice)}</Price>
                  <DiscountPrice>{formatPrice(product.price)}</DiscountPrice>
                </>
              ) : (
                <Price>{formatPrice(product.price)}</Price>
              )}
            </PriceSection>

            <Description>{product.description}</Description>

            <Divider />

            <ActionSection>
              <QuantityControl>
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </QuantityControl>
              <AddToCartButton onClick={handleAddToCart}>
                Add to Cart
              </AddToCartButton>
            </ActionSection>

            <Divider />

            <ProductInfo>
              <p>SKU: <span>{product.SKU}</span></p>
              <p>Category: <span>{product.category}</span></p>
              <p>Tags: <span>{product.tags.join(', ')}</span></p>
            </ProductInfo>
          </InfoSection>
        </ProductSection>

        {relatedProducts.length > 0 && (
          <RelatedProducts>
            <h2>Related Products</h2>
            <ProductGrid>
              {relatedProducts.map(relatedProduct => (
                <Product key={relatedProduct.id} product={relatedProduct} />
              ))}
            </ProductGrid>
          </RelatedProducts>
        )}
      </Content>
    </Container>
  );
};
