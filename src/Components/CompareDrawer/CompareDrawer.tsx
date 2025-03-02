import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../CartStore/store';
import { removeFromCompare, clearCompare } from '../../CompareStore/CompareSlice';
import { X, CaretUp, CaretDown, Trash } from '@phosphor-icons/react';
import {
  DrawerContainer,
  DrawerHeader,
  HeaderActions,
  DrawerContent,
  ProductCard,
  RemoveButton,
  ProductImage,
  ProductInfo,
  CompareButton,
  EmptyState
} from './styles';

export const CompareDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compareItems = useSelector((state: RootState) => state.compare.items);

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCompare(id));
  };

  const handleClearAll = () => {
    dispatch(clearCompare());
  };

  const handleCompare = () => {
    if (compareItems.length >= 2) {
      const queryString = compareItems
        .map(item => `ids=${item.id}`)
        .join('&');
      navigate(`/compare?${queryString}`);
    }
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DrawerContainer isOpen={isOpen}>
      <DrawerHeader>
        <h3>Compare Products ({compareItems.length}/4)</h3>
        <HeaderActions>
          {compareItems.length > 0 && (
            <>
              <button onClick={handleClearAll}>
                <Trash size={16} />
                Clear All
              </button>
              <button
                onClick={handleCompare}
                disabled={compareItems.length < 2}
              >
                Compare Now
              </button>
            </>
          )}
          <button onClick={toggleDrawer}>
            {isOpen ? <CaretDown size={20} /> : <CaretUp size={20} />}
          </button>
        </HeaderActions>
      </DrawerHeader>

      <DrawerContent>
        {compareItems.length === 0 ? (
          <EmptyState>
            <p>No products added to compare</p>
            <p>Add up to 4 products to compare their features</p>
          </EmptyState>
        ) : (
          compareItems.map(item => (
            <ProductCard key={item.id}>
              <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                <X size={16} />
              </RemoveButton>
              <ProductImage src={item.image} alt={item.name} />
              <ProductInfo>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </ProductInfo>
            </ProductCard>
          ))
        )}
      </DrawerContent>
    </DrawerContainer>
  );
};
