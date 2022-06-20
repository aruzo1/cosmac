import { IProduct } from "types";
import Product from "components/category/Product";

function Products({ products }: { products: IProduct[] }) {
  return (
    <ul className="lg:grid-cols-4 md:grid-cols-2 grid gap-4 mt-4">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default Products;
