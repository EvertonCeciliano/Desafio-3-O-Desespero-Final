import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const bounceIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.9);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
`;

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: flex-end;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  max-width: 484px;
  height: 100vh;
  background: #FFFFFF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-size: 24px;
    color: #000000;
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

export const ProductList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 0 -20px;
  padding: 0 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #F4F5F7;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #B88E2F;
    border-radius: 3px;
    transition: background 0.3s ease;

    &:hover {
      background: #9A7B2C;
    }
  }
`;

export const ProductItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #E8E8E8;
  animation: ${bounceIn} 0.5s ease;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-size: 16px;
    color: #3A3A3A;
    margin: 0;
    transition: color 0.3s ease;

    &:hover {
      color: #B88E2F;
    }
  }

  p {
    font-size: 14px;
    color: #898989;
    margin: 0;
  }
`;

export const QuantityPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    align-items: center;
    font-size: 16px;

    &.price {
      font-size: 12px;
      font-weight: 500;
      color: #B88E2F;
    }
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  margin: auto;

  img {
    height: 20px;
    width: 20px;
  }
`;

export const ModalFooter = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #E8E8E8;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #F9F9F9;
  border-radius: 4px;
  padding: 4px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #3A3A3A;
    transition: all 0.2s ease;

    &:hover {
      color: #B88E2F;
    }
  }

  span {
    min-width: 24px;
    text-align: center;
    font-size: 14px;
    color: #3A3A3A;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #898989;
  font-size: 18px;
  padding: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: #B88E2F;
    transform: scale(1.1);
  }
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;

  span:last-child {
    font-weight: 600;
    color: #B88E2F;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #B88E2F;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #9A7B2C;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 0;
  color: #898989;
  animation: ${bounceIn} 0.5s ease;

  svg {
    color: #B88E2F;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
`;
