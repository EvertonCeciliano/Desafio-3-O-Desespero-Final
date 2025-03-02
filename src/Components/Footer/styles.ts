import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: #FFF;
  margin-top: 80px;
  border-top: 1px solid #E7E7E7;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 20px 40px;

  @media (max-width: 768px) {
    padding: 60px 20px 30px;
  }
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
  border-bottom: 1px solid #D9D9D9;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    gap: 30px;
    margin-bottom: 40px;
    padding-bottom: 40px;
  }
`;

export const CompanyInfo = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 30px;
    color: #000;
  }

  p {
    font-size: 16px;
    line-height: 150%;
    color: #666;
    margin-bottom: 30px;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 20px;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #F5F5F5;
    transition: all 0.2s ease-in-out;
    color: #666;

    &:hover {
      background: #B88E2F;
      transform: translateY(-2px);
      color: #FFF;
    }
  }
`;

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const LinksColumn = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 25px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background: #B88E2F;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  a {
    color: #666;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: #B88E2F;
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      color: #B88E2F;

      &:after {
        width: 100%;
      }
    }
  }
`;

export const Newsletter = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 25px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background: #B88E2F;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  max-width: 400px;

  input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid #E7E7E7;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: #999;
    }

    &:focus {
      border-color: #B88E2F;
      outline: none;
    }
  }

  button {
    padding: 12px 24px;
    background: #B88E2F;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #A67E2A;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
  font-size: 14px;
  background: #F9F9F9;

  p {
    margin: 0;
  }
`;
