export interface ICartProduct {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  shortDesc: string;
  quantity: number;
  size?: ISize;
}

export type ISize = "S" | "M" | "L" | "XL" | "XXL";
