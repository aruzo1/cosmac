import { ComponentProps, ComponentType } from "react";
import { IProduct } from "types";
import Products from "components/category/Products";

interface Props {
  name: string;
  Icon: ComponentType<ComponentProps<"svg">>;
  products: IProduct[];
}

function Category(props: Props) {
  const { Icon, name, products } = props;

  return (
    <section className="container py-8">
      <div className="flex items-center">
        <Icon className="w-12 h-12 text-brand" />
        <h1 className="ml-2 text-3xl font-bold">{name}</h1>
      </div>
      <Products products={products} />
    </section>
  );
}

export default Category;
