import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  height: 316px;
  text-align: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop');

  h2 {
    color: black;
    font-size: 48px;
    font-weight: 600;
    margin: 0 0 24px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const PathWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 16px;

  svg {
    color: #000;
  }

  p {
    color: #000;
    margin: 0;
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

  @media (max-width: 768px) {
    padding: 30px 16px;
  }
`;

export const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-bottom: 32px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const MobileProductCard = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 24px;
  }
`;

export const MobileProductHeader = styled.div`
  position: relative;
  padding: 16px;
  background: #F9F1E7;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 20px;
    color: #3A3A3A;
    margin: 0 0 8px;
  }

  p {
    font-size: 14px;
    color: #898989;
    margin: 0 0 16px;
  }
`;

export const MobileFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1px;
  background: #E8E8E8;
`;

export const MobileLabel = styled.div`
  font-size: 14px;
  color: #3A3A3A;
  font-weight: 500;
  padding: 12px;
  background: #F9F1E7;
`;

export const MobileValue = styled.div`
  font-size: 14px;
  color: #3A3A3A;
  padding: 12px;
  background: #FFFFFF;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

export const DesktopCompareGrid = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FeatureLabel = styled.div`
  font-size: 16px;
  color: #3A3A3A;
  font-weight: 500;
  padding: 16px;
  background: #F9F1E7;
  display: flex;
  align-items: center;
  min-height: 52px;

  &:nth-child(odd) {
    background: #F4F5F7;
  }

  &:first-child {
    height: 350px;
  }
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductHeader = styled.div`
  position: relative;
  text-align: center;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 20px;
    color: #3A3A3A;
    margin: 0 0 8px;
  }

  p {
    font-size: 16px;
    color: #898989;
    margin: 0 0 16px;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
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

export const AddToCartButton = styled.button`
  width: 100%;
  background: #B88E2F;
  color: #FFFFFF;
  border: none;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #9A7B2C;
  }
`;

export const FeatureValue = styled.div`
  font-size: 16px;
  color: #3A3A3A;
  padding: 16px;
  background: #F9F1E7;
  min-height: 52px;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    background: #F4F5F7;
  }

  svg {
    margin: 0 auto;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #E97171;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
