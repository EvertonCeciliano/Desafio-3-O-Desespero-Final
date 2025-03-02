import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;

  h2 {
    margin: 0;
    color: #333;
  }

  button {
    padding: 0.5rem 1rem;
    background: #ff4444;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #cc0000;
    }
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
  }

  button {
    padding: 0.5rem;
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #ff4444;
    }
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    padding: 0.25rem 0.5rem;
    background: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #e0e0e0;
    }
  }

  span {
    min-width: 1.5rem;
    text-align: center;
  }
`;

export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;

  h3 {
    margin: 0;
    color: #333;
  }

  button {
    padding: 0.75rem 1.5rem;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #45a049;
    }
  }
`;

export const CartEmpty = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin: 0 0 1rem 0;
    color: #333;
  }

  p {
    color: #666;
    margin: 0;
  }
`;
