import Image from "next/image";
import { IProduct } from "types";
import useModal from "hooks/useModal";
import ProductModal from "components/category/ProductModal";

function Product(props: IProduct) {
  const { name, description, img } = props;
  const modal = useModal();

  return (
    <li className="flex flex-col p-4 rounded-lg drop-shadow-lg bg-white">
      <div className="relative aspect-square border rounded-lg border-brand">
        <Image src={img} alt="produkt" className="rounded-lg" layout="fill" />
      </div>
      <div className="flex flex-col justify-between gap-y-4 mt-4 flex-1">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="line-clamp-4 text-accent-light">{description}</p>
        <button className="self-start btn-accent" onClick={modal.open}>
          Szczegóły
        </button>
      </div>

      <ProductModal modal={modal} product={props} />
    </li>
  );
}

export default Product;
