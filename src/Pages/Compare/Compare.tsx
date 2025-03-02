import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CaretRight, Check, X } from '@phosphor-icons/react';
import { RootState } from '../../CartStore/store';
import { addToCart } from '../../CartStore/CartSlice';

import { removeFromCompare } from '../../CompareStore/CompareSlice';
import { toast } from 'react-toastify';
import {
  Container,
  Header,
  Path,
  PathWrapper,
  Content,
  CompareGrid,
  FeatureLabel,
  ProductColumn,
  ProductHeader,
  PriceInfo,
  Price,
  DiscountPrice,
  AddToCartButton,
  FeatureValue,
  RemoveButton,
  MobileProductCard,
  MobileProductHeader,
  MobileFeatureGrid,
  MobileLabel,
  MobileValue,
  DesktopCompareGrid
} from './styles';

interface ProductData {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  discountPercentage: number;
  onSale: boolean;
  isNew: boolean;
  category: string;
  SKU: string;
  tags: string[];
}

type FeatureKey = keyof ProductData;

interface Feature {
  key: FeatureKey;
  label: string;
}

export const Compare: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const compareItems = useSelector((state: RootState) => state.compare.items);

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

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success('Item added to cart successfully!');
  };

  const handleRemoveFromCompare = (id: number) => {
    dispatch(removeFromCompare(id));
    if (compareItems.length <= 2) {
      navigate('/shop');
    }
  };

  const features: Feature[] = [
    { key: 'name', label: 'Name' },
    { key: 'SKU', label: 'SKU' },
    { key: 'price', label: 'Price' },
    { key: 'category', label: 'Category' },
    { key: 'tags', label: 'Tags' },
    { key: 'isNew', label: 'New' },
    { key: 'onSale', label: 'On Sale' }
  ];

  return (
    <Container>
      <Header>
        <Path>
          <h2>Compare Products</h2>
          <PathWrapper>
            <p>Home</p>
            <CaretRight size={20} />
            <p>Shop</p>
            <CaretRight size={20} />
            <p>Compare</p>
          </PathWrapper>
        </Path>
      </Header>

      <Content>
        {/* Versão Mobile */}
        {compareItems.map(product => {
          const discountedPrice = product.onSale
            ? calculateDiscountPrice(product.price, product.discountPercentage)
            : null;

          return (
            <MobileProductCard key={product.id}>
              <MobileProductHeader>
                <RemoveButton onClick={() => handleRemoveFromCompare(product.id)}>
                  <X size={20} />
                </RemoveButton>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <PriceInfo>
                  {discountedPrice ? (
                    <>
                      <Price>{formatPrice(discountedPrice)}</Price>
                      <DiscountPrice>{formatPrice(product.price)}</DiscountPrice>
                    </>
                  ) : (
                    <Price>{formatPrice(product.price)}</Price>
                  )}
                </PriceInfo>
                <AddToCartButton onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </AddToCartButton>
              </MobileProductHeader>

              <MobileFeatureGrid>
                {features.map(feature => (
                  <React.Fragment key={feature.key}>
                    <MobileLabel>{feature.label}</MobileLabel>
                    <MobileValue>
                      {feature.key === 'tags' ? (
                        product[feature.key].join(', ')
                      ) : feature.key === 'isNew' || feature.key === 'onSale' ? (
                        product[feature.key] ? <Check size={16} /> : <X size={16} />
                      ) : (
                        product[feature.key]
                      )}
                    </MobileValue>
                  </React.Fragment>
                ))}
              </MobileFeatureGrid>
            </MobileProductCard>
          );
        })}

        {/* Versão Desktop */}
        <DesktopCompareGrid>
          <CompareGrid>
            <div>
              <FeatureLabel></FeatureLabel>
              {features.map(feature => (
                <FeatureLabel key={feature.key}>{feature.label}</FeatureLabel>
              ))}
            </div>

            {compareItems.map(product => {
              const discountedPrice = product.onSale
                ? calculateDiscountPrice(product.price, product.discountPercentage)
                : null;

              return (
                <ProductColumn key={product.id}>
                  <ProductHeader>
                    <RemoveButton onClick={() => handleRemoveFromCompare(product.id)}>
                      <X size={20} />
                    </RemoveButton>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <PriceInfo>
                      {discountedPrice ? (
                        <>
                          <Price>{formatPrice(discountedPrice)}</Price>
                          <DiscountPrice>{formatPrice(product.price)}</DiscountPrice>
                        </>
                      ) : (
                        <Price>{formatPrice(product.price)}</Price>
                      )}
                    </PriceInfo>
                    <AddToCartButton onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </AddToCartButton>
                  </ProductHeader>

                  {features.map(feature => (
                    <FeatureValue key={feature.key}>
                      {feature.key === 'tags' ? (
                        product[feature.key].join(', ')
                      ) : feature.key === 'isNew' || feature.key === 'onSale' ? (
                        product[feature.key] ? <Check size={20} /> : <X size={20} />
                      ) : (
                        product[feature.key]
                      )}
                    </FeatureValue>
                  ))}
                </ProductColumn>
              );
            })}
          </CompareGrid>
        </DesktopCompareGrid>
      </Content>
    </Container>
  );
};
