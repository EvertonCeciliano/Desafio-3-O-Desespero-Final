import React from 'react';
import { CounterContainer, CounterButton, Quantity } from './styles';

interface CounterProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const Counter: React.FC<CounterProps> = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <CounterContainer>
      <CounterButton onClick={onDecrease}>-</CounterButton>
      <Quantity>{quantity}</Quantity>
      <CounterButton onClick={onIncrease}>+</CounterButton>
    </CounterContainer>
  );
};
