import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../CartStore/store';
import { removeFromCompare } from '../../CompareStore/CompareSlice';
import { Scales, X } from '@phosphor-icons/react';
import {
  FloatButton,
  Counter,
  FloatContainer,
  FloatHeader,
  ProductList,
  ProductItem,
  ProductImage,
  ProductInfo,
  RemoveButton,
  FloatFooter,
  CompareButton
} from './styles';

export const CompareFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compareItems = useSelector((state: RootState) => state.compare.items);

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCompare(id));
  };

  const handleCompare = () => {
    if (compareItems.length >= 2) {
      navigate('/compare');
      setIsOpen(false);
    }
  };

  const toggleFloat = () => {
    setIsOpen(!isOpen);
  };

  if (compareItems.length === 0) return null;

  return (
    <>
      <FloatButton onClick={toggleFloat}>
        <Scales size={24} weight="bold" />
        <Counter>{compareItems.length}</Counter>
      </FloatButton>

      <FloatContainer isOpen={isOpen}>
        <FloatHeader>
          <h3>Compare Products ({compareItems.length}/4)</h3>
          <button onClick={toggleFloat}>
            <X size={20} />
          </button>
        </FloatHeader>

        <ProductList>
          {compareItems.map((item: { id: number; image: string; name: string; description: string }) => (
            <ProductItem key={item.id}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductInfo>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </ProductInfo>
              <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                <X size={16} />
              </RemoveButton>
            </ProductItem>
          ))}
        </ProductList>

        <FloatFooter>
          <CompareButton
            onClick={handleCompare}
            disabled={compareItems.length < 2}
          >
            Compare Now
          </CompareButton>
        </FloatFooter>
      </FloatContainer>
    </>
  );
};
