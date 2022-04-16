import Image from "next/image";
import {FC, useContext} from "react";

import {CartContext} from "../../context/cart";
import {ICartProduct, ISize} from "../../intefaces";

const sizes: ISize[] = ["S", "M", "L", "XL", "XXL"];

export const CartItem: FC<ICartProduct> = ({
  id,
  name,
  imgUrl,
  shortDesc,
  quantity,
  price,
  size,
}) => {
  const {updateCartQuantity} = useContext(CartContext);

  const onUpdateQuantity = (number: number) => {
    let newQuantity = quantity + number;

    if (newQuantity <= 0) {
      return;
    }

    updateCartQuantity({
      id,
      name,
      price,
      imgUrl,
      quantity: newQuantity,
      shortDesc,
      size,
    });
  };

  const handleSizeProduct = (size: ISize) => {
    updateCartQuantity({
      id,
      name,
      price,
      imgUrl,
      quantity,
      shortDesc,
      size,
    });
  };

  return (
    <div className="flex border-2">
      <div className="flex">
        <Image alt="shirt" height={256} objectFit="contain" src={imgUrl} width={256} />
      </div>
      <div className="flex flex-col flex-auto p-3">
        <h2 className="uppercase md:text-xl font-medium">{name}</h2>
        <h2 className="capitalize font-medium text-gray-400">{shortDesc}</h2>
        <div className="flex flex-auto items-end py-3">
          <span className="uppercase text-sm md:text-xl font-medium">Quantity:</span>
          <div className="border-2 px-2 rounded-xl text-sm md:text-lg ml-4">
            <button className="px-1 " onClick={() => onUpdateQuantity(-1)}>
              {" "}
              -{" "}
            </button>
            <span>{quantity}</span>
            <button className="px-1" onClick={() => onUpdateQuantity(1)}>
              {" "}
              +{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center">
            <span className="uppercase text-sm md:text-xl font-medium py-1">Size:</span>
            <div className="flex justify-between p-1">
              {sizes.map((SIZE, index) => (
                <button
                  key={index}
                  className="disabled:opacity-100 text-sm text-center rounded-full flex justify-center items-center w-7 h-7 border-2 border-black
								mx-1 hover:border-gray-50 focus:border-gray-50 
								"
                  onClick={() => handleSizeProduct(SIZE)}
                >
                  {SIZE}
                </button>
              ))}
            </div>
          </div>
          <span className="flex flex-auto md:justify-end uppercase text-xl md:text-2xl font-medium">
            $ {quantity * price}
          </span>
        </div>
      </div>
    </div>
  );
};
