import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PathContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: #666;

  p {
    font-size: 0.9rem;
    
    &:last-child {
      color: #333;
      font-weight: 500;
    }
  }

  svg {
    color: #B88E2F;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FormSection = styled.div`
  flex: 1;
`;

export const FormCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 1.5rem 0;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #B88E2F;
    box-shadow: 0 0 0 2px rgba(184, 142, 47, 0.1);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }

  &.error {
    border-color: #ff4444;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #B88E2F;
    box-shadow: 0 0 0 2px rgba(184, 142, 47, 0.1);
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: block;
`;

export const OrderSummary = styled.div`
  width: 300px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 1.5rem 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;

  &:last-of-type {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
    color: #333;
    font-weight: 500;

    span:last-child {
      color: #B88E2F;
      font-size: 1.2rem;
    }
  }
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #B88E2F;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1.5rem;

  &:hover:not(:disabled) {
    background: #a17b29;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  svg {
    color: #B88E2F;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
