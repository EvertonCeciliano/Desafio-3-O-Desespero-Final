import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PathContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: #666;

  p {
    font-size: 0.9rem;
    
    &:last-child {
      color: #333;
      font-weight: 500;
    }
  }

  svg {
    color: #B88E2F;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ProductList = styled.div`
  flex: 1;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  margin-left: 1.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 0.5rem 0;
`;

export const ProductPrice = styled.span`
  font-size: 1.1rem;
  color: #B88E2F;
  font-weight: 500;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 2rem;
  background: #f8f8f8;
  padding: 0.5rem;
  border-radius: 8px;
`;

export const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: #666;

  &:hover:not(:disabled) {
    background: #B88E2F;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover:not(:disabled) svg {
    transform: scale(1.1);
  }
`;

export const Quantity = styled.span`
  font-size: 1rem;
  font-weight: 500;
  min-width: 24px;
  text-align: center;
  color: #333;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    opacity: 1;
    background: #fff1f1;
    transform: scale(1.1);
  }

  svg {
    transition: transform 0.2s;
  }
`;

export const CartSummary = styled.div`
  width: 300px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 1.5rem 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;

  &:last-of-type {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
    color: #333;
    font-weight: 500;

    span:last-child {
      color: #B88E2F;
      font-size: 1.2rem;
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #B88E2F;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1.5rem;

  &:hover:not(:disabled) {
    background: #a17b29;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  svg {
    color: #B88E2F;
    margin-bottom: 1.5rem;
  }
`;

export const EmptyCartTitle = styled.h2`
  color: #333;
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

export const EmptyCartText = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

export const ShopButton = styled(CheckoutButton)`
  max-width: 200px;
  margin: 0 auto;
`;
