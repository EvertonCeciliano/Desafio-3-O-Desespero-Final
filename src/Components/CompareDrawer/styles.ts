import styled from 'styled-components';

export const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${props => props.isOpen ? '0' : '-400px'};
  left: 0;
  right: 0;
  background: #FFFFFF;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  transition: bottom 0.3s ease;
  z-index: 1000;
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #E8E8E8;

  h3 {
    font-size: 20px;
    color: #3A3A3A;
    margin: 0;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    background: none;
    border: none;
    color: #B88E2F;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    padding: 8px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const DrawerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 24px;
  max-height: 300px;
  overflow-y: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductCard = styled.div`
  position: relative;
  background: #F9F1E7;
  padding: 16px;
  border-radius: 8px;
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

export const ProductImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const ProductInfo = styled.div`
  h4 {
    font-size: 16px;
    color: #3A3A3A;
    margin: 0 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 14px;
    color: #898989;
    margin: 0 0 8px;
  }
`;

export const CompareButton = styled.button`
  width: 100%;
  background: #B88E2F;
  color: #FFFFFF;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #9A7B2C;
  }

  &:disabled {
    background: #D9D9D9;
    cursor: not-allowed;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 32px;
  color: #898989;
  grid-column: 1 / -1;

  p {
    margin: 0 0 16px;
  }
`;
