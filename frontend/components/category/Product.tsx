import Image from "next/image";
import type { IProduct } from "types";

function Product(props: IProduct) {
  const { name, description, img } = props;

  return (
    <li className="flex flex-col gap-y-4 p-4 rounded-lg drop-shadow-lg bg-white">
      <div className="relative aspect-square border border-brand rounded-lg">
        <Image src={img} className="rounded-lg" layout="fill" />
      </div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="line-clamp-4">{description}</p>
      <button className="self-start btn-black">Szczegóły</button>
    </li>
  );
}

export default Product;
