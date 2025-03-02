import styled from 'styled-components';

export const FloatButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #B88E2F;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    background: #9A7B2C;
  }

  svg {
    color: #FFFFFF;
  }
`;

export const Counter = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #E97171;
  color: #FFFFFF;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`;

export const FloatContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 300px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(20px)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

export const FloatHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #E8E8E8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 16px;
    color: #3A3A3A;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #898989;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #3A3A3A;
    }
  }
`;

export const ProductList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 16px;
`;

export const ProductItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #E8E8E8;

  &:last-child {
    border-bottom: none;
  }
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductInfo = styled.div`
  flex: 1;

  h4 {
    margin: 0 0 4px;
    font-size: 14px;
    color: #3A3A3A;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #898989;
  }
`;

export const RemoveButton = styled.button`
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

export const FloatFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #E8E8E8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CompareButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  background: ${props => props.disabled ? '#D9D9D9' : '#B88E2F'};
  color: #FFFFFF;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.disabled ? '#D9D9D9' : '#9A7B2C'};
  }
`;
