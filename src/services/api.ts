import { ProductData } from '../Components/ProductCard/Product';
import axios from 'axios';

const API_URL = "https://run.mocky.io/v3/9dc08024-8994-42aa-8314-a1285883ac1e";

export const api = {
  async getAllProducts(): Promise<ProductData[]> {
    const response = await axios.get(API_URL);
    return response.data.products;
  },

  async getProductById(id: number): Promise<ProductData | undefined> {
    const response = await axios.get(API_URL);
    return response.data.products.find((p: ProductData) => p.id === id);
  },

  async getRelatedProducts(category: string, excludeId: number): Promise<ProductData[]> {
    const response = await axios.get(API_URL);
    return response.data.products
      .filter((p: ProductData) => p.category === category && p.id !== excludeId)
      .slice(0, 4);
  }
};
