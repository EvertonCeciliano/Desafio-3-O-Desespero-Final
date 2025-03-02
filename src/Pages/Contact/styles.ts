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

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: fit-content;
`;

export const FormCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

export const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  svg {
    color: #B88E2F;
    flex-shrink: 0;
  }
`;

export const InfoLabel = styled.span`
  color: #333;
  font-weight: 500;
  display: block;
  margin-bottom: 0.25rem;
`;

export const InfoText = styled.span`
  color: #666;
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

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
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

export const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: block;
`;

export const SubmitButton = styled.button`
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

  &:hover {
    background: #a17b29;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
