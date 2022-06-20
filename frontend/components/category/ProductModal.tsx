import Image from "next/image";
import { XIcon } from "@heroicons/react/outline";
import type { IProduct } from "types";
import useModal from "hooks/useModal";
import Portal from "components/hoc/Portal";

interface Props {
  modal: ReturnType<typeof useModal>;
  product: IProduct;
}

function ProductModal({ modal, product }: Props) {
  return (
    <Portal to="modals">
      <div
        className="absolute z-20 inset-0 container"
        style={{ top: modal.top }}
      >
        <div className="grid md:grid-cols-12 gap-4 p-4 rounded-lg bg-white">
          <div className="relative md:col-span-4 aspect-square border rounded-lg border-brand">
            <Image
              src={product.img}
              alt="produkt"
              className="rounded-lg"
              layout="fill"
            />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-4xl font-bold">{product.name}</h2>
            <p className="mt-2 text-accent-light">{product.description}</p>
          </div>
          <XIcon
            className="order-first md:order-none w-8 h-8 ml-auto hover:text-accent-light cursor-pointer transition-colors"
            onClick={modal.close}
          />
          <img
            src={product.table_img}
            alt="tabela produktu"
            className="w-full col-span-full"
          />
        </div>
      </div>
      <div className="fixed z-10 inset-0 bg-accent/50" onClick={modal.close} />
    </Portal>
  );
}

export default ProductModal;
