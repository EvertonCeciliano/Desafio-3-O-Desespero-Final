import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Product, ProductData } from '../../Components/ProductCard/Product';
import { Commitment } from '../../Components/Commitment/Commitment';
import {
  Container,
  Header,
  Path,
  PathWrapper,
  Content,
  Menu,
  MenuContent,
  FilterSection,
  FilterGroup,
  ViewOptions,
  ResultCount,
  SortSection,
  ProductGrid,
  Pagination,
  PageNumbers,
  PageButton,
  FilterContainer,
  FilterTitle,
  PriceRange,
  RangeInput,
  RangeValues,
  TagsContainer,
  TagButton,
  FilterButton,
  MobileFilters,
  CloseButton,
  ApplyButton
} from './styles';
import { 
  Funnel, 
  SquaresFour, 
  List, 
  CaretRight,
  ArrowLeft,
  ArrowRight,
  MagnifyingGlass,
  X
} from '@phosphor-icons/react';
import styled from 'styled-components';

const ITEMS_PER_PAGE = 12;
const CATEGORIES = [
  'All',
  'Chairs',
  'Sofa',
  'Tables and Stools',
  'Lamps',
  'Mugs',
  'Beds',
  'Decor'
];

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 32px 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

export const Shop: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  // Novos estados para filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showSaleOnly, setShowSaleOnly] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
        // Definir o range de preço baseado nos produtos
        const prices = response.data.map((p: ProductData) => p.price);
        setPriceRange([Math.min(...prices), Math.max(...prices)]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Extrair todas as tags únicas dos produtos
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    products.forEach(product => {
      product.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [products]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filtro por categoria
      if (selectedCategory && product.category !== selectedCategory) return false;
      
      // Filtro por busca
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      
      // Filtro por preço
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      
      // Filtro por tags
      if (selectedTags.length > 0 && !selectedTags.some(tag => product.tags.includes(tag))) return false;
      
      // Filtro por New
      if (showNewOnly && !product.isNew) return false;
      
      // Filtro por Sale
      if (showSaleOnly && !product.onSale) return false;
      
      return true;
    });
  }, [products, selectedCategory, searchQuery, priceRange, selectedTags, showNewOnly, showSaleOnly]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'name_asc':
          return a.name.localeCompare(b.name);
        case 'name_desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('IDR', 'Rp');
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          active={currentPage === i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </PageButton>
      );
    }

    return pages;
  };



  return (
    <Container>
      <Header>
        <Path>
          <h2>Shop</h2>
          <PathWrapper>
            <p>Home</p>
            <CaretRight size={20} />
            <p>Shop</p>
          </PathWrapper>
        </Path>
      </Header>

      <Menu>
        <MenuContent>
          <FilterSection>
            <FilterButton onClick={() => setShowFilters(true)}>
              <Funnel size={24} />
              Filters
            </FilterButton>

            <ViewOptions>
              <SquaresFour 
                size={24} 
                weight={viewMode === 'grid' ? 'fill' : 'regular'}
                onClick={() => setViewMode('grid')}
              />
              <List 
                size={24}
                weight={viewMode === 'list' ? 'fill' : 'regular'}
                onClick={() => setViewMode('list')}
              />
              <ResultCount>
                Showing {startIndex + 1}–{Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} results
              </ResultCount>
            </ViewOptions>
          </FilterSection>

          <SortSection>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default sorting</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name_asc">Name: A to Z</option>
              <option value="name_desc">Name: Z to A</option>
            </select>
          </SortSection>
        </MenuContent>
      </Menu>

      <Content>
        <MobileFilters show={showFilters}>
          <CloseButton onClick={() => setShowFilters(false)}>
            <X size={24} />
          </CloseButton>

          <FilterContainer>
            <FilterTitle>Search</FilterTitle>
            <SearchInputWrapper>
              <StyledInput
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <IconWrapper>
                <MagnifyingGlass size={20} />
              </IconWrapper>
            </SearchInputWrapper>

            <FilterTitle>Category</FilterTitle>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {CATEGORIES.map(category => (
                <option key={category} value={category === 'All' ? '' : category}>
                  {category}
                </option>
              ))}
            </select>

            <FilterTitle>Price Range</FilterTitle>
            <PriceRange>
              <RangeValues>
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </RangeValues>
              <RangeInput
                type="range"
                min={Math.min(...products.map(p => p.price))}
                max={Math.max(...products.map(p => p.price))}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              />
            </PriceRange>

            <FilterTitle>Product Status</FilterTitle>
            <FilterGroup>
              <label>
                <input
                  type="checkbox"
                  checked={showNewOnly}
                  onChange={(e) => setShowNewOnly(e.target.checked)}
                />
                New Arrivals
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={showSaleOnly}
                  onChange={(e) => setShowSaleOnly(e.target.checked)}
                />
                On Sale
              </label>
            </FilterGroup>

            <FilterTitle>Tags</FilterTitle>
            <TagsContainer>
              {allTags.map(tag => (
                <TagButton
                  key={tag}
                  active={selectedTags.includes(tag)}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </TagButton>
              ))}
            </TagsContainer>

            <ApplyButton onClick={() => setShowFilters(false)}>
              Apply Filters
            </ApplyButton>
          </FilterContainer>
        </MobileFilters>

        <ProductGrid viewMode={viewMode}>
          {currentProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ProductGrid>

        <Pagination>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft size={24} />
          </button>

          <PageNumbers>
            {renderPageNumbers()}
          </PageNumbers>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowRight size={24} />
          </button>
        </Pagination>
      </Content>
      <Commitment />
    </Container>
  );
};
