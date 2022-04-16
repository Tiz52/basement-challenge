import Image from "next/image";
import {useState, useContext, FC, useEffect, memo} from "react";

import {CartContext} from "../../context/cart";
import yourCart from "../../public/your-cart-desktop.svg";
import yourCartMobile from "../../public/your-cart.svg";
import {useOuterClick} from "../../hooks";

import {CartList} from "./CartList";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const CartModal: FC<Props> = ({isModalOpen, closeModal}) => {
  const {cart, total} = useContext(CartContext);

  const [isOpen, setIsOpen] = useState("hidden");

  const ref = useOuterClick();

  useEffect(() => {
    if (isModalOpen) {
      setIsOpen("flex");
    } else {
      setIsOpen("hidden");
    }
  }, [isModalOpen]);

  return (
    <div
      className={`fixed z-50 inset-0 w-full min-h-screen bg-opacity-50 bg-black transform transition-transform duration-5	${isOpen}`}
    >
      <div
        ref={ref}
        className={`fixed flex flex-col p-4 bg-black inset-0
		md:p-0 md:border-b-2 md:border-l-2 md:w-modal md:h-modal md:top-0 md:left-auto
	`}
      >
        <div className="flex justify-end md:px-4 md:pt-4">
          <button
            className="uppercase text-xl font-bold rounded p-1 hover:bg-gray-50 hover:text-gray-900"
            type="button"
            onClick={closeModal}
          >
            {" "}
            ➜ Close
          </button>
        </div>
        <div className="hidden p-4 md:inline-block">
          <Image alt="yourCart" objectFit="contain" src={yourCart} />
        </div>
        <div className="flex mb-2 p-4 md:hidden justify-center">
          <Image alt="yourCart" objectFit="contain" src={yourCartMobile} />
        </div>
        <div className="flex-auto overflow-auto flex justify-center items-start">
          <CartList cartProducts={cart} />
        </div>
        <div className="flex flex-col md:flex-row justify-between md:border-t-2">
          <div className="flex md:items-center justify-between ">
            <span className=" py-2 text-2xl md:text-4xl md:pl-4 uppercase">Total:</span>
            <span className=" py-2 text-2xl md:text-4xl md:pl-4 uppercase">${total}</span>
          </div>
          <button
            className="self-center w-full md:w-1/3 border-t-2 md:border-l-2 md:text-4xl px-6 pt-3 md:py-4 text-black text-6xl outline-title uppercase
					hover:bg-gray-50 hover:text-gray-900"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CartModal);
