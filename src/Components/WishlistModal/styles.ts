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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

export const ModalContainer = styled.div`
  width: 400px;
  max-width: 90%;
  background: #FFFFFF;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    font-size: 24px;
    color: #3A3A3A;
    margin: 0;
  }

  button {
    background: none;
    border: none;
    font-size: 28px;
    color: #898989;
    cursor: pointer;
    padding: 4px;
    line-height: 1;
    transition: color 0.3s ease;

    &:hover {
      color: #3A3A3A;
    }
  }
`;

export const ProductList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #F9F9F9;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #F4F4F4;
    transform: translateY(-2px);
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;

  h3 {
    font-size: 16px;
    color: #3A3A3A;
    margin: 0 0 8px;
  }

  p {
    font-size: 14px;
    color: #B88E2F;
    font-weight: 600;
    margin: 0 0 12px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #B88E2F;
  color: #FFFFFF;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;

  &:hover {
    background: #9A7B2C;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #898989;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  transition: all 0.3s ease;

  &:hover {
    color: #E97171;
    transform: scale(1.1);
  }
`;

export const EmptyWishlist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 0;
  color: #898989;
  text-align: center;

  svg {
    color: #B88E2F;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
`;
