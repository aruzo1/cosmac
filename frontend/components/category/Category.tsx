import type { ICategory, IProduct } from "types";
import Product from "components/category/Product";

function Category(props: { category: ICategory; products: IProduct[] }) {
  const { category, products } = props;

  return (
    <section className="container py-4">
      <div className="flex items-center">
        {category.icon}
        <h1 className="ml-2 text-3xl font-bold">{category.name}</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Category;
