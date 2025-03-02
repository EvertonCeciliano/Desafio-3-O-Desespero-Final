import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  height: 316px;
  text-align: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop');

  h2 {
    margin: auto;
    color: black;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    height: 250px;
    h2 {
      font-size: 36px;
    }
  }

  @media (max-width: 480px) {
    height: 200px;
    h2 {
      font-size: 28px;
    }
  }
`;

export const Path = styled.div`
  margin: auto;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PathWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;

  svg {
    color: #000;
  }

  p {
    color: #000;
    &:last-child {
      color: #B88E2F;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Menu = styled.div`
  width: 100%;
  background-color: #F9F1E7;
  margin-bottom: 60px;
`;

export const MenuContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  select {
    border: none;
    padding: 8px;
    font-size: 16px;
    background-color: transparent;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #f0e6dc;
    }
  }
`;

export const ViewOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 20px;
  border-left: 1px solid #9F9F9F;

  svg {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #B88E2F;
    }
  }

  @media (max-width: 768px) {
    padding-left: 0;
    border-left: none;
  }
`;

export const ResultCount = styled.div`
  color: #9F9F9F;
  font-size: 14px;
`;

export const SortSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  select {
    padding: 10px 15px;
    font-size: 16px;
    border: 1px solid #B88E2F;
    border-radius: 4px;
    background-color: white;
    color: #333333;
    cursor: pointer;
    min-width: 200px;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23B88E2F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px;

    &:hover {
      border-color: #9c7626;
      background-color: #FFF9F1;
    }

    &:focus {
      outline: none;
      border-color: #9c7626;
      box-shadow: 0 0 0 2px rgba(184, 142, 47, 0.2);
    }

    option {
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;

    select {
      width: 100%;
      max-width: 300px;
    }
  }
`;

export const FilterContainer = styled.div`
  padding: 20px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  select, input[type="text"] {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    font-size: 14px;
    margin-bottom: 20px;
    
    &:focus {
      outline: none;
      border-color: #B88E2F;
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 14px;
    color: #333;

    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: #B88E2F;
    }
  }
`;

export const FilterTitle = styled.h3`
  font-size: 16px;
  color: #333333;
  margin-bottom: 15px;
  font-weight: 600;
`;

export const SearchInput = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px 40px 10px 15px;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #B88E2F;
    }
  }

  svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #B88E2F;
  }
`;

export const PriceRange = styled.div`
  margin-bottom: 20px;
`;

export const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
`;

export const RangeInput = styled.input`
  width: 100%;
  height: 2px;
  background: #E8E8E8;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #B88E2F;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #B88E2F;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const TagButton = styled.button<{ active: boolean }>`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? '#B88E2F' : '#F9F1E7'};
  color: ${props => props.active ? '#FFFFFF' : '#333333'};
  border: 1px solid ${props => props.active ? '#B88E2F' : '#F9F1E7'};

  &:hover {
    background: ${props => props.active ? '#9A7B2C' : '#F0E6DC'};
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #E8E8E8;
  border-radius: 4px;
  background: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #B88E2F;
    color: #B88E2F;
  }
`;

export const MobileFilters = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;

  ${FilterContainer} {
    width: 300px;
    height: 100%;
    margin: 0;
    border-radius: 0;
    overflow-y: auto;
    transform: translateX(${props => props.show ? '0' : '100%'});
    transition: transform 0.3s ease;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 320px;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  z-index: 1001;
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #B88E2F;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #9A7B2C;
  }
`;

export const ProductGrid = styled.div<{ viewMode: 'grid' | 'list' }>`
  display: grid;
  grid-template-columns: ${props => props.viewMode === 'grid' ? 'repeat(auto-fill, minmax(285px, 1fr))' : '1fr'};
  gap: ${props => props.viewMode === 'grid' ? '32px' : '20px'};
  margin-bottom: 50px;

  @media (max-width: 640px) {
    grid-template-columns: ${props => props.viewMode === 'grid' ? 'repeat(auto-fill, minmax(250px, 1fr))' : '1fr'};
    gap: 20px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 50px 0;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    transition: color 0.2s;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      color: #B88E2F;
    }
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  background: ${props => props.active ? '#B88E2F' : 'none'};
  color: ${props => props.active ? '#FFF' : '#000'};
  border: ${props => props.active ? 'none' : '1px solid #D8D8D8'};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${props => props.active ? '#B88E2F' : '#F9F1E7'};
  }
`;
