import {ICartProduct} from "../../intefaces";

import {CartState} from "./";

type CartActionType =
  | {type: "[Cart] - Update products in cart"; payload: ICartProduct[]}
  | {type: "[Cart] - Update product quantity"; payload: ICartProduct[]}
  | {type: "[Cart] - Remove product from cart"; payload: ICartProduct[]}
  | {type: "[Cart] - Update cart quantity"; payload: number}
  | {type: "[Cart] - LoadCart from localstorage"; payload: ICartProduct[]};

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
  switch (action.type) {
    case "[Cart] - Update products in cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] - Update product quantity":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] - Remove product from cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] - Update cart quantity":
      return {
        ...state,
        numberOfItems: action.payload,
      };

    case "[Cart] - LoadCart from localstorage":
      return {
        ...state,
        cart: [...action.payload],
      };

    default:
      return state;
  }
};
