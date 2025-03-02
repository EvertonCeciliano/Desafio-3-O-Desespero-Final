import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ProductCard = styled.div`
  width: 285px;
  position: relative;
  background: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 301px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 285px;
    margin: 0 auto;
  }
`;

export const InfoContainer = styled.div`
  padding: 16px 16px 30px;
  background: #FFFFFF;
  transition: all 0.3s ease;
`;

export const NameWrapper = styled.div`
  margin-bottom: 8px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #3A3A3A;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    color: #898989;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: 48px;

    @media (max-width: 768px) {
      font-size: 14px;
      min-height: 42px;
    }
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #3A3A3A;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const PriceDiscount = styled.span`
  font-size: 16px;
  color: #B0B0B0;
  text-decoration: line-through;
`;

export const Tag = styled.div<{ variant: 'sale' | 'new' }>`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #FFFFFF;
  font-weight: 500;
  z-index: 2;
  background: ${props => props.variant === 'sale' ? '#E97171' : '#2EC1AC'};
  animation: ${pulse} 2s infinite;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(58, 58, 58, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(2px);
  z-index: 1;

  ${ProductCard}:hover & {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AddToCartButton = styled.button<{ active?: boolean }>`
  background: ${props => props.active ? '#B88E2F' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : '#B88E2F'};
  border: none;
  padding: 12px 44px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center;
  border-radius: 4px;

  &:hover {
    background: ${props => props.active ? '#9A7B2C' : '#B88E2F'};
    color: #FFFFFF;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ActionList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ActionItem = styled.li<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: ${props => props.active ? '#B88E2F' : '#FFFFFF'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #B88E2F;
    transform: scale(1.1);
  }

  p {
    font-size: 14px;
    margin: 0;
  }
`;

export const MobileActions = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px;
  backdrop-filter: blur(4px);
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (max-width: 768px) {
    display: grid;
  }
`;

export const MobileActionButton = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: ${props => props.active ? '#B88E2F' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : '#3A3A3A'};
  border: 1px solid ${props => props.active ? '#B88E2F' : '#E8E8E8'};
  border-radius: 8px;
  padding: 8px 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  svg {
    font-size: 20px;
  }

  &:hover {
    background: ${props => props.active ? '#9A7B2C' : '#F9F1E7'};
    border-color: #B88E2F;
  }

  &:active {
    transform: scale(0.95);
  }

  span {
    font-size: 11px;
  }
`;
