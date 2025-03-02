import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../CartStore/store';
import { ShoppingCart } from '@phosphor-icons/react';
import { removeFromCart, updateQuantity, setCartOpen } from '../../CartStore/CartSlice';
import {
  ModalOverlay as Overlay,
  ModalContainer as CartContainer,
  ModalHeader as Header,
  ProductList as CartList,
  ProductItem as CartItem,
  TextWrapper as ItemInfo,
  QuantityPrice as ItemActions,
  QuantityControl,
  RemoveButton,
  ModalFooter as Footer,
  Subtotal,
  CheckoutButton,
  EmptyCart
} from './styles';

export const CartModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total, isOpen } = useSelector((state: RootState) => state.cart);

  const handleClose = useCallback(() => {
    dispatch(setCartOpen(false));
  }, [dispatch]);

  const handleRemoveItem = useCallback((productId: number) => {
    dispatch(removeFromCart(productId));
  }, [dispatch]);

  const handleQuantityChange = useCallback((productId: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  }, [dispatch]);

  const handleCheckout = useCallback(() => {
    handleClose();
    navigate('/cart');
  }, [handleClose, navigate]);

  if (!isOpen) return null;

  return (
    <Overlay isOpen={isOpen} onClick={handleClose}>
      <CartContainer isOpen={isOpen} onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Shopping Cart</h2>
          <button onClick={handleClose}>×</button>
        </Header>

        <CartList>
          {items.length === 0 ? (
            <EmptyCart>
              <ShoppingCart size={48} />
              <p>Your cart is empty</p>
            </EmptyCart>
          ) : (
            items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.image} alt={item.name} />
                <ItemInfo>
                  <h3>{item.name}</h3>
                  <p>Rs. {item.price.toFixed(2)}</p>
                  <ItemActions>
                    <QuantityControl>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </QuantityControl>
                    <RemoveButton 
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label="Remove item"
                    >
                      ×
                    </RemoveButton>
                  </ItemActions>
                </ItemInfo>
              </CartItem>
            ))
          )}
        </CartList>

        {items.length > 0 && (
          <Footer>
            <Subtotal>
              <span>Subtotal</span>
              <span>Rs. {total.toFixed(2)}</span>
            </Subtotal>
            <CheckoutButton onClick={handleCheckout}>
              Proceed to Checkout
            </CheckoutButton>
          </Footer>
        )}
      </CartContainer>
    </Overlay>
  );
};
