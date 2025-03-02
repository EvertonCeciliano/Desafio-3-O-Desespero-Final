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

export const LoginCard = styled.div`
  max-width: 480px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
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

  &.error {
    border-color: #ff4444;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 0.85rem;
  margin: 0.5rem 0;
  text-align: center;
  padding: 0.5rem;
  background: #fff1f1;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #B88E2F;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1rem;

  &:hover {
    background: #a17b29;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const GoogleButton = styled(Button)`
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #f8f8f8;
    border-color: #ccc;
  }

  svg {
    color: #DB4437;
  }
`;

export const ToggleText = styled.p`
  text-align: center;
  color: #666;
  margin-top: 1rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #B88E2F;
  }
`;
