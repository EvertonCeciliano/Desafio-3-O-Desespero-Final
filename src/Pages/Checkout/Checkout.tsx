import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CaretRight } from '@phosphor-icons/react';
import { RootState } from '../../store'; 
import * as S from './styles';

type FormData = {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvv: string;
};

export function Checkout() {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const total = cart.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setIsLoading(true);
    try {
    
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Order placed successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Error processing order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.PathContainer>
        <p>Home</p>
        <CaretRight size={16} weight="bold" />
        <p>Cart</p>
        <CaretRight size={16} weight="bold" />
        <p>Checkout</p>
      </S.PathContainer>

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.CheckoutContainer>
          <S.FormSection>
            <S.FormCard>
              <S.SectionTitle>Personal Information</S.SectionTitle>
              <S.FormGroup>
                <S.Label>Full Name</S.Label>
                <S.Input
                  {...register('name', { required: 'Name is required' })}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>Email</S.Label>
                <S.Input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email',
                    },
                  })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
              </S.FormGroup>
            </S.FormCard>

            <S.FormCard>
              <S.SectionTitle>Shipping Address</S.SectionTitle>
              <S.FormGroup>
                <S.Label>Address</S.Label>
                <S.Input
                  {...register('address', { required: 'Address is required' })}
                  className={errors.address ? 'error' : ''}
                />
                {errors.address && <S.ErrorMessage>{errors.address.message}</S.ErrorMessage>}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>City</S.Label>
                <S.Input
                  {...register('city', { required: 'City is required' })}
                  className={errors.city ? 'error' : ''}
                />
                {errors.city && <S.ErrorMessage>{errors.city.message}</S.ErrorMessage>}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>State</S.Label>
                <S.Select {...register('state', { required: 'State is required' })}>
                  <option value="">Select a state</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                </S.Select>
                {errors.state && <S.ErrorMessage>{errors.state.message}</S.ErrorMessage>}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>ZIP Code</S.Label>
                <S.Input
                  {...register('zipCode', {
                    required: 'ZIP Code is required',
                    pattern: {
                      value: /^\d{5}-?\d{3}$/,
                      message: 'Invalid ZIP Code',
                    },
                  })}
                  className={errors.zipCode ? 'error' : ''}
                />
                {errors.zipCode && <S.ErrorMessage>{errors.zipCode.message}</S.ErrorMessage>}
              </S.FormGroup>
            </S.FormCard>

            <S.FormCard>
              <S.SectionTitle>Payment Information</S.SectionTitle>
              <S.FormGroup>
                <S.Label>Card Number</S.Label>
                <S.Input
                  {...register('cardNumber', {
                    required: 'Card number is required',
                    pattern: {
                      value: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
                      message: 'Invalid card number',
                    },
                  })}
                  className={errors.cardNumber ? 'error' : ''}
                />
                {errors.cardNumber && <S.ErrorMessage>{errors.cardNumber.message}</S.ErrorMessage>}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>Card Name</S.Label>
                <S.Input
                  {...register('cardName', { required: 'Card name is required' })}
                  className={errors.cardName ? 'error' : ''}
                />
                {errors.cardName && <S.ErrorMessage>{errors.cardName.message}</S.ErrorMessage>}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>Expiry Date</S.Label>
                <S.Input
                  {...register('cardExpiry', {
                    required: 'Expiry date is required',
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: 'Use the format MM/YY',
                    },
                  })}
                  placeholder="MM/YY"
                  className={errors.cardExpiry ? 'error' : ''}
                />
                {errors.cardExpiry && <S.ErrorMessage>{errors.cardExpiry.message}</S.ErrorMessage>}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>CVV</S.Label>
                <S.Input
                  {...register('cardCvv', {
                    required: 'CVV is required',
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: 'Invalid CVV',
                    },
                  })}
                  className={errors.cardCvv ? 'error' : ''}
                />
                {errors.cardCvv && <S.ErrorMessage>{errors.cardCvv.message}</S.ErrorMessage>}
              </S.FormGroup>
            </S.FormCard>
          </S.FormSection>

          <S.OrderSummary>
            <S.SummaryTitle>Order Summary</S.SummaryTitle>
            <S.SummaryRow>
              <span>Subtotal</span>
              <span>R$ {total.toFixed(2)}</span>
            </S.SummaryRow>
            <S.SummaryRow>
              <span>Shipping</span>
              <span>Free</span>
            </S.SummaryRow>
            <S.SummaryRow>
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </S.SummaryRow>
            <S.PlaceOrderButton type="submit" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Place Order'}
            </S.PlaceOrderButton>
          </S.OrderSummary>
        </S.CheckoutContainer>
      </form>

      {isLoading && (
        <S.LoadingOverlay>
        </S.LoadingOverlay>
      )}
    </S.Container>
  );
}
