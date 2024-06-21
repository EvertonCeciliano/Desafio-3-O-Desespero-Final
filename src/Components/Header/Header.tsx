import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { CartModal } from '../CartModal/CartModal';

export function Header() {
  const navigate = useNavigate();
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const handleCloseModal = () => {
    setCartModalOpen(false)
  };

  const handleOpenCartModal = () => {
    setCartModalOpen(true)
  };

  return (
    <header>
      <img className={styles.logo} onClick={() => navigate('/')} src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/logo.svg" alt="" />
      <ul className={styles.navbar}>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/shop')}>Shop</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
      </ul>
      <div className={styles.cart} > 
        <ul className={styles.menu}>
          <li><img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/cart.svg" onClick={handleOpenCartModal} alt="" /></li>
          <li><img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/usericon.svg" alt='user'  onClick={() => navigate('/login')} /></li>
        </ul>
      </div>
      {isCartModalOpen && <CartModal onClose={handleCloseModal} />} 
    </header>
  );
}
