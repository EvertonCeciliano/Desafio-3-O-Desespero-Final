import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../CartStore/store';
import { removeFromCart, updateQuantity, clearCart } from '../../CartStore/CartSlice';
import { CartContainer, CartItem, CartHeader, CartFooter, CartEmpty, QuantityControl } from './styles';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

export const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  if (items.length === 0) {
    return (
      <CartEmpty>
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione alguns produtos para começar!</p>
      </CartEmpty>
    );
  }

  return (
    <CartContainer>
      <CartHeader>
        <h2>Seu Carrinho</h2>
        <button onClick={() => dispatch(clearCart())}>Limpar Carrinho</button>
      </CartHeader>

      {items.map((item) => (
        <CartItem key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>R$ {item.price.toFixed(2)}</p>
          </div>
          <QuantityControl>
            <button
              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
            >
              <FaMinus />
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
            >
              <FaPlus />
            </button>
          </QuantityControl>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            <FaTrash />
          </button>
        </CartItem>
      ))}

      <CartFooter>
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button>Finalizar Compra</button>
      </CartFooter>
    </CartContainer>
  );
};
