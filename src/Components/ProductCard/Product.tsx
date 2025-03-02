import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../CartStore/CartSlice';
import { toggleCompare } from '../../CompareStore/CompareSlice';
import { toggleWishlist } from '../../WishlistStore/WishlistSlice';
import { toast } from 'react-toastify';
import { Scales, Heart, ShoppingCart } from '@phosphor-icons/react';
import { RootState } from '../../CartStore/store';
import {
  ProductCard,
  InfoContainer,
  NameWrapper,
  PriceWrapper,
  Price,
  PriceDiscount,
  Overlay,
  AddToCartButton,
  ActionList,
  ActionItem,
  Tag,
  MobileActions,
  MobileActionButton
} from './styles';
import { useMemo, useCallback } from 'react';

export interface ProductData {
  id: number;
  name: string;
  SKU: string;
  description: string;
  price: number;
  image: string;
  onSale: boolean;
  discountPercentage: number;
  isNew: boolean;
  category: string;
  tags: string[];
}

interface ProductProps {
  product: ProductData;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price).replace('IDR', 'Rp');
};

const calculateDiscountPrice = (price: number, discount: number): number => {
  return Math.floor(price - (price * discount) / 100);
};

export const Product = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const compareItems = useSelector((state: RootState) => state.compare.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  const isInCompare = useMemo(() => 
    compareItems.some(item => item.id === product.id),
    [compareItems, product.id]
  );
  
  const isInCart = useMemo(() => 
    cartItems.some(item => item.id === product.id),
    [cartItems, product.id]
  );

  const isInWishlist = useMemo(() => 
    wishlistItems.some(item => item.id === product.id),
    [wishlistItems, product.id]
  );

  const discountedPrice = useMemo(() => 
    product.onSale ? calculateDiscountPrice(product.price, product.discountPercentage) : null,
    [product.onSale, product.price, product.discountPercentage]
  );

  const handleShopNavigate = useCallback(() => {
    navigate(`/product/${product.id}`);
    window.scrollTo(0, 0);
  }, [navigate, product.id]);

  const handleAddToCart = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    if (!isInCart) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: discountedPrice || product.price,
        image: product.image
      }));
      toast.success('Item added to cart successfully!');
    }
  }, [dispatch, isInCart, product, discountedPrice]);

  const handleToggleCompare = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    if (!isInCompare && compareItems.length >= 4) {
      toast.error('You can compare up to 4 products');
      return;
    }
    dispatch(toggleCompare(product));
    toast.success(isInCompare ? 'Product removed from comparison' : 'Product added to comparison');
  }, [dispatch, isInCompare, compareItems.length, product]);

  const handleToggleWishlist = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(toggleWishlist(product));
    toast.success(isInWishlist ? 'Product removed from wishlist' : 'Product added to wishlist');
  }, [dispatch, isInWishlist, product]);

  const renderProductTag = useMemo(() => {
    if (product.onSale) {
      return <Tag variant="sale">{product.discountPercentage}%</Tag>;
    }
    if (product.isNew) {
      return <Tag variant="new">New</Tag>;
    }
    return null;
  }, [product.onSale, product.isNew, product.discountPercentage]);

  const renderPrice = useMemo(() => (
    <PriceWrapper>
      {discountedPrice ? (
        <>
          <Price>{formatPrice(discountedPrice)}</Price>
          <PriceDiscount>{formatPrice(product.price)}</PriceDiscount>
        </>
      ) : (
        <Price>{formatPrice(product.price)}</Price>
      )}
    </PriceWrapper>
  ), [discountedPrice, product.price]);

  const actions = useMemo(() => [
    {
      icon: <Heart size={20} weight={isInWishlist ? "fill" : "regular"} />,
      label: isInWishlist ? 'Saved' : 'Save',
      onClick: handleToggleWishlist,
      active: isInWishlist
    },
    {
      icon: <Scales size={20} />,
      label: isInCompare ? 'Added' : 'Compare',
      onClick: handleToggleCompare,
      active: isInCompare
    },
    {
      icon: <ShoppingCart size={20} />,
      label: isInCart ? 'In Cart' : 'Add',
      onClick: handleAddToCart,
      active: isInCart
    }
  ], [isInWishlist, isInCompare, isInCart, handleToggleWishlist, handleToggleCompare, handleAddToCart]);

  return (
    <ProductCard onClick={handleShopNavigate}>
      {renderProductTag}
      <img src={product.image} alt={product.name} />
      
      <InfoContainer>
        <NameWrapper>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </NameWrapper>
        {renderPrice}
      </InfoContainer>

      <Overlay>
        <AddToCartButton onClick={handleAddToCart} active={isInCart}>
          {isInCart ? 'View in Cart' : 'Add to Cart'}
        </AddToCartButton>
        <ActionList>
          {actions.map((action, index) => (
            <ActionItem
              key={index}
              onClick={action.onClick}
              active={action.active}
            >
              {action.icon}
              <p>{action.label}</p>
            </ActionItem>
          ))}
        </ActionList>
      </Overlay>

      <MobileActions>
        {actions.map((action, index) => (
          <MobileActionButton
            key={index}
            onClick={action.onClick}
            active={action.active}
          >
            {action.icon}
            <span>{action.label}</span>
          </MobileActionButton>
        ))}
      </MobileActions>
    </ProductCard>
  );
};
