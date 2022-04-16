import {FC} from "react";

import {IProduct} from "../../product/types";

import {Product} from "./Product";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({products}) => {
  return (
    <div className="grid grid-cols-product-list gap-8 w-full p-3 md:p-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
