
import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/51fea751-0b47-4430-b7bc-6cff7f9db49c'; 

export const fetchProductData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data.products; 
  } catch (error) {
    console.error("Erro na requisição de produto:", error);
    throw error;
}}

