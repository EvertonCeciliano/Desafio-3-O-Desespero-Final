import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../CartStore/store';
import { CartItem, updateQuantity, removeFromCart } from '../../CartStore/CartSlice';

import { toast } from 'react-toastify';
import { Trash, Plus, Minus, ShoppingCart, CaretRight } from '@phosphor-icons/react';
import { 
  Container,
  CartContainer,
  ProductList,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  QuantityControl,
  QuantityButton,
  Quantity,
  RemoveButton,
  CartSummary,
  SummaryTitle,
  SummaryRow,
  CheckoutButton,
  EmptyCart,
  EmptyCartTitle,
  EmptyCartText,
  ShopButton,
  PathContainer
} from './styles';

const CartProduct: React.FC<{
  item: CartItem;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  onImageClick: (item: CartItem) => void;
}> = React.memo(({ item, onQuantityChange, onRemove, onImageClick }) => (
  <ProductCard>
    <ProductImage
      src={item.image}
      alt={item.name}
      onClick={() => onImageClick(item)}
    />
    <ProductInfo>
      <ProductName>{item.name}</ProductName>
      <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
    </ProductInfo>
    <QuantityControl>
      <QuantityButton
        onClick={() => onQuantityChange(item.id, item.quantity - 1)}
        disabled={item.quantity <= 1}
      >
        <Minus size={16} weight="bold" />
      </QuantityButton>
      <Quantity>{item.quantity}</Quantity>
      <QuantityButton
        onClick={() => onQuantityChange(item.id, item.quantity + 1)}
      >
        <Plus size={16} weight="bold" />
      </QuantityButton>
    </QuantityControl>
    <ProductPrice>${(item.quantity * item.price).toFixed(2)}</ProductPrice>
    <RemoveButton onClick={() => onRemove(item.id)} title="Remove item">
      <Trash size={20} />
    </RemoveButton>
  </ProductCard>
));

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = useCallback((productId: number) => {
    dispatch(removeFromCart(productId));
    toast.success('Item removed from cart');
  }, [dispatch]);

  const handleUpdateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ productId, quantity }));
  }, [dispatch]);

  const handleProductClick = useCallback((item: CartItem) => {
    navigate(`/product/${item.id}`);
  }, [navigate]);

  const handleCheckout = useCallback(() => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    navigate('/checkout');
  }, [navigate, cartItems.length]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  if (cartItems.length === 0) {
    return (
      <Container>
        <PathContainer>
          <p>Home</p>
          <CaretRight size={16} />
          <p>Cart</p>
        </PathContainer>
        <EmptyCart>
          <ShoppingCart size={64} weight="thin" />
          <EmptyCartTitle>Your cart is empty</EmptyCartTitle>
          <EmptyCartText>
            Explore our products and discover amazing deals!
          </EmptyCartText>
          <ShopButton onClick={() => navigate('/')}>
            Start Shopping
          </ShopButton>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <PathContainer>
        <p>Home</p>
        <CaretRight size={16} />
        <p>Cart</p>
      </PathContainer>

      <CartContainer>
        <ProductList>
          {cartItems.map((item) => (
            <CartProduct
              key={item.id}
              item={item}
              onQuantityChange={handleUpdateQuantity}
              onRemove={handleRemoveItem}
              onImageClick={handleProductClick}
            />
          ))}
        </ProductList>

        <CartSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryRow>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow>
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </SummaryRow>
          <CheckoutButton onClick={handleCheckout}>
            Checkout
          </CheckoutButton>
        </CartSummary>
      </CartContainer>
    </Container>
  );
};
