import { ProductData } from '../Components/ProductCard/Product';
import db from './db.json';

export const api = {
  async getAllProducts(): Promise<ProductData[]> {
    return Promise.resolve(db.products);
  },

  async getProductById(id: number): Promise<ProductData | undefined> {
    const product = db.products.find((p: ProductData) => p.id === id);
    return Promise.resolve(product);
  },

  async getRelatedProducts(category: string, excludeId: number): Promise<ProductData[]> {
    const relatedProducts = db.products
      .filter((p: ProductData) => p.category === category && p.id !== excludeId)
      .slice(0, 4);
    return Promise.resolve(relatedProducts);
  }
};
