import { ComponentProps, ComponentType } from "react";

export interface ICategory {
  id?: number;
  name: string;
  Icon: ComponentType<ComponentProps<"svg">>;
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
