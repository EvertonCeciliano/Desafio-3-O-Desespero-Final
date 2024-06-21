import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Shop.module.css';
import { Product, ProductData } from '../../Components/ProductCard/Product';
import { Commitment } from '../../Components/Commitment/Commitment';

const initialProducts: ProductData[] = [];

export const Shop: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>(initialProducts);
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('default');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/affb51b5-4539-4912-80a4-f868e98bf7ca"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (option: string) => {
    setSortBy(option);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const applyFilters = () => {
    let filteredProducts = [...products];

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price_asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
       
        break;
    }

    return filteredProducts;
  };

  const calculatePagination = () => {
    const startIndex = (currentPage - 1) * visibleCount;
    const endIndex = Math.min(startIndex + visibleCount, filteredAndSortedProducts.length);
    return { startIndex, endIndex };
  };

  const filteredAndSortedProducts = applyFilters();
  const totalPages = Math.ceil(filteredAndSortedProducts.length / visibleCount);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const maxPagesToShow = 4; 
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

   
    if (startPage > 1) {
      pages.push(
        <p key={"first"} onClick={() => goToPage(1)}>
          <span>{"<<"}</span>
        </p>
      );
    }


    if (startPage > 2) {
      pages.push(
        <p key={"..."}><span>{"..."}</span></p>
      );
    }


    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <p key={i} className={currentPage === i ? styles.active : ''} onClick={() => goToPage(i)}>
          <span>{i}</span>
        </p>
      );
    }

    if (endPage < totalPages - 1) {
      pages.push(
        <p key={"..."}><span>{"..."}</span></p>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <p key={totalPages} onClick={() => goToPage(totalPages)}>
          <span>{">>"}</span>
        </p>
      );
    }

    return pages;
  };

  const { startIndex, endIndex } = calculatePagination();
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.path}>
          <h2>Shop</h2>
          <div className={styles.pathWrapper}>
            <p>Home</p>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/dashicons_arrow-down-alt2.svg" alt="" />
            <p>Shop</p>
          </div>
        </div>
      </div>

      <div className={styles.menu}>
        <div className={styles.left}>
          <div className={styles.filter}>
            <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/filter.svg" alt="Filter Icon" />
            <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
              <option value="">All</option>
              <option value="Chairs">Chairs</option>
              <option value="Sofa">Sofa</option>
              <option value="Tables and Stools">Tables and Stools</option>
              <option value="Lamps">Lamps</option>
              <option value="Mugs">Mugs</option>
              <option value="Beds">Beds</option>
              <option value="Decor">Decor</option>
            </select>
          </div>
          <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/grid-round.svg" alt="Grid View" />
          <img src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/viewslist.png" alt="List View" />
          <div className={styles.showing}>
            <p>Showing {startIndex + 1}–{Math.min(endIndex, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} results</p>
          </div>
        </div>

        <div className={styles.showShort}>
          <div className={styles.show}>
            <p>Show</p>
            <select className={styles.showNumber} value={visibleCount} onChange={(e) => setVisibleCount(parseInt(e.target.value))}>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>
          <div className={styles.shortBy}>
            <p>Sort by</p>
            <select className={styles.shortOptions} value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="default">Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.productsWrapper}>
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.pagination}>
        <div className={styles.pages}>
          <button onClick={goToPrevPage} disabled={!canGoPrev}>Prev</button>
          {renderPageNumbers()}
          <button onClick={goToNextPage} disabled={!canGoNext}>Next</button>
        </div>
      </div>

    
       <Commitment/>

    </>
  );
};


