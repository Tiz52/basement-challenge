import {FC} from "react";

import {ICartProduct} from "../../intefaces";

import {CartItem} from "./CartItem";

interface Props {
  cartProducts: ICartProduct[];
}

export const CartList: FC<Props> = ({cartProducts}) => {
  return (
    <div className="grid grid-rows-product-cart-list w-full gap-2 md:px-6 ">
      {cartProducts.map(({id, name, price, imgUrl, quantity, shortDesc}) => (
        <CartItem
          key={id}
          id={id}
          imgUrl={imgUrl}
          name={name}
          price={price}
          quantity={quantity}
          shortDesc={shortDesc}
        />
      ))}
    </div>
  );
};
