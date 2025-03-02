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

export const AboutCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #B88E2F;
  box-shadow: 0 4px 12px rgba(184, 142, 47, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Subtitle = styled.h2`
  color: #B88E2F;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const SkillCard = styled.div`
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #B88E2F;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    color: #666;
    transition: all 0.2s;

    &:hover {
      color: #B88E2F;
      transform: translateY(-2px);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
