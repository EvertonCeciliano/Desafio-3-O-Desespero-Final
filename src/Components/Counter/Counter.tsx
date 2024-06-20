// Counter.tsx
import React from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const Counter: React.FC<CounterProps> = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className={styles.counter}>
      <button onClick={onDecrease} className={styles.counterButton}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={onIncrease} className={styles.counterButton}>+</button>
    </div>
  );
};
