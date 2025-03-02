import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #FAF3EA;
  padding: 50px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
  background-color: #FAF3EA;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const CommitmentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 32px;
    height: 32px;
    color: #242424;
    flex-shrink: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #242424;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #898989;
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
    min-width: 250px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;
