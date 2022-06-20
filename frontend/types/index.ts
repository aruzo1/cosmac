export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  category: number;
  name: string;
  description: string;
  img: string;
  table_img: string;
  bestseller: boolean;
  special: boolean;
}
