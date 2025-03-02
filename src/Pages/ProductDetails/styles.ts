import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  height: 316px;
  text-align: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop');

  h2 {
    margin: auto;
    color: black;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    height: 250px;
    h2 {
      font-size: 36px;
    }
  }

  @media (max-width: 480px) {
    height: 200px;
    h2 {
      font-size: 28px;
    }
  }
`;

export const Path = styled.div`
  margin: auto;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PathWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;

  svg {
    color: #000;
  }

  p {
    color: #000;
    &:last-child {
      color: #B88E2F;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 20px;
`;

export const ProductSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const MainImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: #F9F1E7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

export const Thumbnail = styled.div<{ active?: boolean }>`
  aspect-ratio: 1;
  background: #F9F1E7;
  cursor: pointer;
  border: 2px solid ${props => props.active ? '#B88E2F' : 'transparent'};
  transition: border-color 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: #B88E2F;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProductName = styled.h1`
  font-size: 42px;
  color: #3A3A3A;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #3A3A3A;
`;

export const DiscountPrice = styled.span`
  font-size: 16px;
  color: #B0B0B0;
  text-decoration: line-through;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666666;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #D9D9D9;
  margin: 24px 0;
`;

export const ActionSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border: 1px solid #9F9F9F;

  button {
    background: none;
    border: none;
    font-size: 16px;
    color: #3A3A3A;
    cursor: pointer;
    padding: 0 8px;

    &:hover {
      color: #B88E2F;
    }
  }

  span {
    min-width: 24px;
    text-align: center;
    font-size: 16px;
    color: #3A3A3A;
  }
`;

export const AddToCartButton = styled.button`
  flex: 1;
  background: #FFFFFF;
  border: 1px solid #B88E2F;
  color: #B88E2F;
  padding: 12px 44px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #B88E2F;
    color: #FFFFFF;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 16px;
  color: #9F9F9F;

  span {
    color: #3A3A3A;
  }
`;

export const RelatedProducts = styled.div`
  margin-top: 60px;

  h2 {
    font-size: 36px;
    color: #3A3A3A;
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 32px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
`;
