import type {NextPage} from "next";
import Image from "next/image";
import {GetStaticProps} from "next";

import {BasementLayout, Navbar} from "../components";
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import {ProductList} from "../components/products/ProductList";
import {IProduct} from "../product/types";

interface Props {
  products: IProduct[];
}

const Home: NextPage<Props> = ({products}) => {
  return (
    <BasementLayout pageDescription="Coding challenge for basement.studio." title="Basement Supply">
      <Navbar />

      <header className="py-6 px-3 md:px-5 flex justify-center">
        <Image alt="header" objectFit="contain" src={header} />
      </header>

      <div className=" relative flex overflow-x-hidden border-2">
        <div className="py-2 animate-marquee whitespace-nowrap">
          <span className="text-2xl mx-4">
            {"A man can't have enough basement. swag - A man can't have enough basement. swag - "}
          </span>
        </div>
        <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
          <span className="text-2xl mx-4">
            {"A man can't have enough basement. swag - A man can't have enough basement. swag - "}
          </span>
        </div>
      </div>

      <div className="flex flex-auto items-center">
        <ProductList products={products} />
      </div>

      <footer className="p-3 md:px-5">
        <Image alt="footer" objectFit="contain" src={footer} />
      </footer>
    </BasementLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products: IProduct[] = await import("../product/mock.json").then((res) => res.default);

  return {
    props: {
      products,
    },
  };
};
