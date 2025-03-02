import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #D9D9D9;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const CounterButton = styled.button`
  background: none;
  border: none;
  color: #B88E2F;
  font-size: 20px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #A07B2A;
  }
`;

export const Quantity = styled.span`
  font-size: 16px;
  color: #3A3A3A;
  min-width: 24px;
  text-align: center;
`;
