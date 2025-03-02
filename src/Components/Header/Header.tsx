import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContainer, NavBar, CartContainer, CartActions, IconContainer } from './styles';
import { CartModal } from '../CartModal/CartModal';
import { WishlistModal } from '../WishlistModal/WishlistModal';
import { ShoppingCart, User, Heart } from '@phosphor-icons/react';
import { RootState } from '../../CartStore/store';
import { setCartOpen } from '../../CartStore/CartSlice';
import { setWishlistOpen } from '../../WishlistStore/WishlistSlice';
import logo from "/images/logo.png"
export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleOpenCartModal = () => {
    dispatch(setCartOpen(true));
  };

  const handleOpenWishlistModal = () => {
    dispatch(setWishlistOpen(true));
  };

  return (
    <HeaderContainer>
      <img onClick={() => navigate('/')} src={logo} />
      <NavBar>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/shop')}>Shop</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
      </NavBar>
      <CartContainer>
        <CartActions>
          <IconContainer>
            <User size={28} onClick={() => navigate('/login')} />
            <div className="wishlist-icon">
              <Heart 
                size={28} 
                onClick={handleOpenWishlistModal}
                weight={wishlistItems.length > 0 ? "fill" : "regular"}
              />
              {wishlistItems.length > 0 && (
                <span className="wishlist-count">{wishlistItems.length}</span>
              )}
            </div>
            <div className="cart-icon">
              <ShoppingCart size={28} onClick={handleOpenCartModal} />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </div>
          </IconContainer>
        </CartActions>
      </CartContainer>
      <CartModal />
      <WishlistModal />
    </HeaderContainer>
  );
}
