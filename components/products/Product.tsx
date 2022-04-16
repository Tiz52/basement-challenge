import {FC, useContext} from "react";
import Image from "next/image";

import world from "../../public/world.svg";
import {CartContext} from "../../context/cart";
import {IProduct} from "../../product/types";

interface Props {
  product: IProduct;
}

export const Product: FC<Props> = ({product}) => {
  const {imgUrl, name, price} = product;

  const {addProductToCart} = useContext(CartContext);

  const onAddProduct = () => {
    addProductToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imgUrl: product.imgUrl,
      quantity: 1,
      shortDesc: product.shortDesc,
    });
  };

  return (
    <div className="">
      <div className="relative bg-gradient-to-t from-gray-900 border-b-2">
        <Image
          alt="shirt"
          height={512}
          layout="responsive"
          objectFit="contain"
          src={imgUrl}
          width={512}
        />

        <div
          className="absolute inset-0 w-full h-full  flex items-center justify-center cursor-pointer
					opacity-0
					hover:opacity-100 focus-within:opacity-100 transition-opacity
					"
          onClick={onAddProduct}
        >
          <Image alt="world" aria-hidden="true" height={96} src={world} width={96} />
          <h2 className="absolute uppercase text-3xl text-black outline-title">Add To Cart</h2>
        </div>
      </div>

      <div className="flex h-10% items-end justify-between px-1 py-2">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};
