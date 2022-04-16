import Image from "next/image";
import Link from "next/link";
import {useContext} from "react";

import {UiContext, CartContext} from "../../context";
import hd4k from "../../public/hd4k.svg";
import logo from "../../public/logo.svg";
import mLogo from "../../public/mobile-logo.svg";
import {CartModal} from "../cart";

export const Navbar = () => {
  const {numberOfItems} = useContext(CartContext);
  const {openModal, closeModal, isModalOpen} = useContext(UiContext);

  return (
    <nav className="flex justify-between items-center px-3 md:px-5  h-12">
      <div className="flex">
        <Link href="/">
          <a className="hidden sm:block">
            <Image alt="Basement" className="w-48 h-auto" src={logo} />
          </a>
        </Link>
        <Link passHref href="/">
          <a className="sm:hidden">
            <Image alt="Basement" className="w-4 h-auto" src={mLogo} />
          </a>
        </Link>
      </div>

      <div className="hidden md:flex">
        <Image alt="logo" src={hd4k} />
      </div>

      <button
        className="border-2 text-sm rounded-full px-6 py-1 hover:bg-white hover:text-black"
        onClick={openModal}
      >
        Cart ({numberOfItems})
      </button>

      <CartModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </nav>
  );
};
