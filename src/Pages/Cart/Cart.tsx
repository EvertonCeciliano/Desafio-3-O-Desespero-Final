import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../CartStore/store';
import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

import { decreaseQuantity, increaseQuantity, removeItem } from '../../CartStore/CartSlice';
import { Commitment } from '../../Components/Commitment/Commitment';
import { Path } from '../../Components/Path/Path';



export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate(); // Uso de useNavigate para navegação

  const handleRemoveItem = useCallback((productId: number) => {
    dispatch(removeItem(productId));
  }, [dispatch]);

  const handleIncreaseQuantity = useCallback((productId: number) => {
    dispatch(increaseQuantity(productId));
  }, [dispatch]);

  const handleDecreaseQuantity = useCallback((productId: number) => {
    dispatch(decreaseQuantity(productId));
  }, [dispatch]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  }, [cartItems]);

  const handleShopNavigate = (item: any) => {
    navigate(`/product/${item.id}`); // Navegar para a página do produto
  };

  const handleCheckoutNavigate = () => {
    navigate('/cart'); // Navegar para o carrinho (mesma página)
  };

  return (
    <div className={styles.cart}>
      <Path title='Cart'>
        <p>Home</p>
        <img
          src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg"
          alt="Arrow"
        />
        <p>Cart</p>
      </Path>

      <div className={styles.cartContent}>
        <table>
          <thead>
            <tr className={styles.productSectionHeader}>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr className={styles.item} key={item.id}>
                <td>
                  <img
                    src={item.image}
                    onClick={() => handleShopNavigate(item)}
                    alt="Product"
                  />
                </td>
                <td>
                  <p className={styles.name}>{item.name}</p>
                </td>
                <td className={styles.price}>Rs. {item.price}</td>
                <td>
                  <div className={styles.quantityWrapper}>
                    <div
                      className={styles.quantityButton}
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </div>
                    <p>{item.quantity}</p>
                    <div
                      className={styles.quantityButton}
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </div>
                  </div>
                </td>
                <td className={styles.subtotal}>
                  Rs. {(item.quantity * item.price).toFixed(2)}
                </td>
                <td>
                  <img
                    src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/trashCan.svg"
                    alt="Trashcan"
                    className={styles.trashcan}
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.cartTotals}>
          <h3>Cart Totals</h3>
          <div className={styles.valueWrapper}>
            <p className={styles.valueWrapperSubtotal}>
              Subtotal <span>Rs. {subtotal.toFixed(2)}</span>
            </p>
            <p className={styles.valueWrapperTotal}>
              Total <span>Rs. {subtotal.toFixed(2)}</span>
            </p>
          </div>
          <button onClick={handleCheckoutNavigate}>Checkout</button>
        </div>
      </div>
      <Commitment />
    </div>
  );
};

export default Cart;
