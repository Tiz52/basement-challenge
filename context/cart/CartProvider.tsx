import {FC, useReducer, useEffect} from "react";

import {ICartProduct} from "../../intefaces";

import {CartContext, cartReducer} from "./";

export interface CartState {
  cart: ICartProduct[];
  numberOfItems: number;
  total: number;
}

const Cart_INITIAL_STATE: CartState = {
  cart: [],
  numberOfItems: 0,
  total: 0,
};

export const CartProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE);

  useEffect(() => {
    const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0);

    dispatch({type: "[Cart] - Update cart quantity", payload: numberOfItems});
  }, [state.cart]);

  const addProductToCart = (product: ICartProduct): void => {
    let cart: ICartProduct[] = [];

    const productAlreadyInCart = state.cart.find((p) => p.id === product.id);

    if (productAlreadyInCart) {
      return;
    }

    cart = [...state.cart, product];

    dispatch({type: "[Cart] - Update products in cart", payload: cart});
  };

  const updateCartQuantity = (product: ICartProduct): void => {
    let cart: ICartProduct[] = state.cart;

    const selectProduct = state.cart.find((p) => p.id === product.id);

    if (!selectProduct) {
      return;
    }

    cart = cart.map((p) => {
      if (p.id === product.id) {
        return product;
      }

      return p;
    });

    dispatch({type: "[Cart] - Update product quantity", payload: cart});
  };

  const removeProductFromCart = (product: ICartProduct): void => {};

  return (
    <CartContext.Provider
      value={{
        ...state,

        addProductToCart,
        updateCartQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
