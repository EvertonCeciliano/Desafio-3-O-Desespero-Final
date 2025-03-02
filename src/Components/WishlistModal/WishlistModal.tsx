import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../CartStore/store';
import { Heart, ShoppingCart } from '@phosphor-icons/react';
import { removeFromWishlist } from '../../WishlistStore/WishlistSlice';
import { addToCart } from '../../CartStore/CartSlice';
import { toast } from 'react-toastify';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ProductList,
  ProductItem,
  TextWrapper,
  ActionButtons,
  RemoveButton,
  EmptyWishlist,
  AddToCartButton
} from './styles';

export const WishlistModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: wishlistItems } = useSelector((state: RootState) => state.wishlist);
  const isOpen = useSelector((state: RootState) => state.wishlist.isOpen);

  const handleClose = useCallback(() => {
    dispatch({ type: 'wishlist/setWishlistOpen', payload: false });
  }, [dispatch]);

  const handleRemoveItem = useCallback((productId: number) => {
    dispatch(removeFromWishlist(productId));
    toast.success('Product removed from wishlist');
  }, [dispatch]);

  const handleAddToCart = useCallback((product: any) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }));
    toast.success('Product added to cart');
  }, [dispatch]);

  const handleProductClick = useCallback((productId: number) => {
    navigate(`/product/${productId}`);
    handleClose();
  }, [navigate, handleClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h2>My Wishlist</h2>
          <button onClick={handleClose}>×</button>
        </ModalHeader>

        <ProductList>
          {wishlistItems.length === 0 ? (
            <EmptyWishlist>
              <Heart size={48} />
              <p>Your wishlist is empty</p>
            </EmptyWishlist>
          ) : (
            wishlistItems.map((item) => (
              <ProductItem key={item.id} onClick={() => handleProductClick(item.id)}>
                <img src={item.image} alt={item.name} />
                <TextWrapper>
                  <h3>{item.name}</h3>
                  <p>Rs. {item.price.toFixed(2)}</p>
                  <ActionButtons>
                    <AddToCartButton onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}>
                      <ShoppingCart size={20} />
                      Add to Cart
                    </AddToCartButton>
                    <RemoveButton onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveItem(item.id);
                    }}>
                      ×
                    </RemoveButton>
                  </ActionButtons>
                </TextWrapper>
              </ProductItem>
            ))
          )}
        </ProductList>
      </ModalContainer>
    </ModalOverlay>
  );
};
