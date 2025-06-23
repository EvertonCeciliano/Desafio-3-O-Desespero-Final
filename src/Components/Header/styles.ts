import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  img {
    height: 40px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
    
    img {
      height: 32px;
    }
  }
`;

export const NavBar = styled.ul`
  display: flex;
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-size: 16px;
    color: #3A3A3A;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #B88E2F;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  svg {
    color: #3A3A3A;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #B88E2F;
      transform: scale(1.1);
    }
  }

  .cart-icon, .wishlist-icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  .cart-count, .wishlist-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #B88E2F;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 600;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 16px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

interface DropdownMenuProps {
  isOpen: boolean;
}

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 40px;
  right: 0;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 8px;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 8px 12px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #f0f0f0;
    }
  }
`;
