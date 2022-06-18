import type { ICategory, IProduct } from "types";
import Products from "components/category/Products";

function Category(props: { category: ICategory; products: IProduct[] }) {
  const { category, products } = props;

  return (
    <section className="container py-4">
      <div className="flex items-center">
        <category.Icon className="w-12 h-12 text-brand" />
        <h1 className="ml-2 text-3xl font-bold">{category.name}</h1>
      </div>
      <Products products={products} />
    </section>
  );
}

export default Category;
