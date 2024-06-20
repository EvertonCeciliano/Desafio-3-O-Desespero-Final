
export interface RouteParams {
  id: string;
}
// types.ts

import { ProductData } from '../Components/ProductCard/Product';

// Define o tipo RootState para representar o estado global da aplicação
export interface RootState {
  cart: CartState;
  // Adicione outros estados globais aqui, se houver
}

export interface CartState {
  items: ProductData[];

}


