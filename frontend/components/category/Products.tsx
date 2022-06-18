import { IProduct } from "types";
import Product from "components/category/Product";

function Products(props: { products: IProduct[] }) {
  const { products } = props;

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default Products;
