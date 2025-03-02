import styled from 'styled-components';

export const Hero = styled.div`
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 100px;

  @media (max-width: 768px) {
    padding: 0 20px;
    justify-content: center;
  }
`;

export const HeroContent = styled.div`
  background-color: #FFF3E3;
  padding: 40px;
  border-radius: 10px;
  max-width: 600px;

  h2 {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  h1 {
    color: #B88E2F;
    font-size: 52px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  p {
    color: #333;
    font-size: 18px;
    margin-bottom: 40px;
    line-height: 1.5;
  }

  button {
    background-color: #B88E2F;
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #9c7626;
    }
  }

  @media (max-width: 992px) {
    padding: 30px;

    h1 {
      font-size: 42px;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Categories = styled.section`
  padding: 80px 0;
  text-align: center;

  h2 {
    font-size: 32px;
    color: #333;
    margin-bottom: 8px;
  }

  p {
    color: #666;
    margin-bottom: 50px;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  h3 {
    font-size: 24px;
    color: #333;
    font-weight: 600;
  }
`;

export const Products = styled.section`
  padding: 80px 0;
  text-align: center;

  h2 {
    font-size: 32px;
    color: #333;
    margin-bottom: 40px;
    font-weight: 600;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

export const CarouselSlide = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  background-size: cover;
  background-position: center;
`;

export const CarouselContent = styled.div`
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
  background-color: rgba(255, 243, 227, 0.95);
  padding: 40px;
  border-radius: 10px;
  max-width: 600px;
  backdrop-filter: blur(5px);

  h2 {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s forwards;
  }

  h1 {
    color: #B88E2F;
    font-size: 52px;
    line-height: 1.2;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s forwards 0.2s;
  }

  p {
    color: #333;
    font-size: 18px;
    margin-bottom: 40px;
    line-height: 1.5;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s forwards 0.4s;
  }

  button {
    background-color: #B88E2F;
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s forwards 0.6s;

    &:hover {
      background-color: #9c7626;
      transform: translateY(-2px);
    }
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 992px) {
    padding: 30px;
    right: 50px;

    h1 {
      font-size: 42px;
    }
  }

  @media (max-width: 768px) {
    right: 20px;
    left: 20px;
    max-width: none;
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

export const CarouselDot = styled.button<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: ${props => props.isActive ? '#B88E2F' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;

  &:hover {
    background-color: #B88E2F;
  }
`;

export const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(5px);
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  svg {
    color: #fff;
    width: 24px;
    height: 24px;
  }
`;

export const FeaturedSlider = styled.section`
  padding: 80px 0;
  background: #FCF8F3;
  overflow: hidden;
  position: relative;

  h2 {
    text-align: center;
    font-size: 32px;
    color: #333;
    margin-bottom: 40px;
  }
`;

export const SliderContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
`;

export const SliderTrack = styled.div<{ transform: string }>`
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease-in-out;
  transform: ${props => props.transform};
`;

export const SliderItem = styled.div`
  min-width: 285px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .content {
    padding: 20px;

    h3 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      color: #666;
      margin-bottom: 15px;
    }

    .price {
      color: #B88E2F;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export const SliderArrow = styled(CarouselArrow)`
  background: rgba(184, 142, 47, 0.2);

  &:hover {
    background: rgba(184, 142, 47, 0.4);
  }

  &.slider-prev {
    left: 10px;
  }

  &.slider-next {
    right: 10px;
  }

  svg {
    color: #B88E2F;
  }
`;

export const HighlightSlider = styled.section`
  padding: 80px 0;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

export const HighlightTrack = styled.div<{ transform: string }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${props => props.transform};
`;

export const HighlightSlide = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 0 100px;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0 20px;
    gap: 30px;
  }
`;

export const HighlightImage = styled.div`
  flex: 1;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
  }
`;

export const HighlightContent = styled.div`
  flex: 1;
  padding: 40px;

  h3 {
    color: #B88E2F;
    font-size: 20px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 42px;
    color: #333;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  p {
    color: #666;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  button {
    background: #B88E2F;
    color: white;
    border: none;
    padding: 15px 40px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #9c7626;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 992px) {
    text-align: center;
    padding: 20px;

    h2 {
      font-size: 32px;
    }
  }
`;

export const TestimonialSection = styled.section`
  padding: 80px 0;
  background-color: #F9F1E7;
  text-align: center;
  overflow: hidden;
  margin-bottom: 80px;

  h2 {
    font-size: 32px;
    color: #333;
    margin-bottom: 60px;
    font-weight: 600;
  }
`;

export const TestimonialContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 400px;
`;

export const TestimonialSlide = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: ${props => props.isActive ? 1 : 0};
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  transform: translateX(${props => props.isActive ? '0' : '50px'});
  transition: all 0.5s ease-in-out;
`;

export const TestimonialContent = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: -80px auto 20px;
    border: 4px solid #FFFFFF;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #FFFFFF;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .rating {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-bottom: 20px;

    svg {
      color: #B88E2F;
      font-size: 20px;
    }
  }

  p {
    color: #666666;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 24px;
    font-style: italic;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    color: #333333;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  span {
    color: #B88E2F;
    font-size: 14px;
    font-weight: 500;
    display: block;
    margin-bottom: 20px;
  }

  &::before {
    content: '"';
    position: absolute;
    top: 40px;
    left: 40px;
    font-size: 60px;
    color: #F9F1E7;
    font-family: serif;
    line-height: 1;
  }
`;

export const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
`;

export const TestimonialDot = styled.button<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isActive ? '#B88E2F' : '#E5E5E5'};
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: ${props => props.isActive ? '#B88E2F' : '#CCCCCC'};
  }
`;
