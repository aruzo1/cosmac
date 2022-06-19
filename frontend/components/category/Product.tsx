import Image from "next/image";
import type { IProduct } from "types";
import useModal from "hooks/useModal";
import ProductModal from "components/category/ProductModal";

function Product(props: IProduct) {
  const { name, description, img } = props;
  const modal = useModal();

  return (
    <li className="flex flex-col gap-y-4 p-4 rounded-lg drop-shadow-lg bg-white">
      <div className="relative aspect-square border border-brand rounded-lg">
        <Image
          src={img}
          alt="zdjęcie produktu"
          className="rounded-lg"
          layout="fill"
        />
      </div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="line-clamp-4 text-accent-light">{description}</p>
      <button className="self-start btn-accent" onClick={modal.open}>
        Szczegóły
      </button>
      {modal.show && <ProductModal modal={modal} product={props} />}
    </li>
  );
}

export default Product;
