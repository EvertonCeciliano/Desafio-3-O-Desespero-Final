import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../CartStore/store';
import styles from './CartModal.module.css';
import { removeItem } from '../../CartStore/CartSlice';

interface CartModalProps {
  onClose: () => void
}

export const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartItems = useSelector((state: RootState) => state.cart.items)

  const handleRemoveItem = useCallback((productId: number) => {
    dispatch(removeItem(productId))
  }, [dispatch])



  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price
    }, 0)
  }, [cartItems])

  const handleContinueShopping = () => {
    onClose()

    navigate('/shop')
  }

  function handleCheckoutNavigate  () {
    onClose()

    navigate('/cart')
  }

  function handleComparisonNavigate () {
    onClose()

    navigate('/comparison')
  }

  return (
    <div className={styles.modaloverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Shopping cart</h2>
          <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/closeCart.svg" onClick={onClose} alt="Close" />
        </div>
        <div className={styles.product}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.productItem}>
              <img src={item.image} alt={item.name} />
              <div className={styles.textWrapper}>
                <h4>{item.name}</h4>
                <div className={styles.quantityPrice}>
                  <p>{item.quantity}</p>
                  <p>x</p>
                  <p className={styles.preco}>Rs. {item.price}</p>
                </div>
              </div>
              <div className={styles.close}>
                <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/delete.svg" onClick={() => handleRemoveItem(item.id)} alt="Remove" />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.modalFooter}>
          <div className={styles.subtotal}>
            <p>Subtotal</p>
            <p>Rs. {subtotal.toFixed(2)}</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
            <button onClick={handleCheckoutNavigate}>Checkout</button>
            <button onClick={handleComparisonNavigate}>Comparison</button>
          </div>
        </div>
      </div>
    </div>
  );
};
