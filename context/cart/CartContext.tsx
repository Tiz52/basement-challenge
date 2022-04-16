import {createContext} from "react";

import {ICartProduct} from "../../intefaces";

interface ContextProps {
  cart: ICartProduct[];
  numberOfItems: number;
  total: number;

  //methods
  addProductToCart(product: ICartProduct): void;
  updateCartQuantity(product: ICartProduct): void;
  removeProductFromCart(product: ICartProduct): void;
}

export const CartContext = createContext({} as ContextProps);
