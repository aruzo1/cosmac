import Image from "next/image";
import { ComponentProps, ComponentType } from "react";

interface Props {
  Icon: ComponentType<ComponentProps<"svg">>;
  title: string;
  description: string;
  img: string;
  left?: boolean;
}

function AboutPoint(props: Props) {
  const { Icon, title, description, img, left } = props;

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-8">
      <div
        className={`flex flex-col md:flex-row gap-4 md:w-1/2 ${
          left ? "order-last" : ""
        }`}
      >
        <Icon className="w-16 h-16 text-brand" />
        <div className="w-fit">
          <h2 className="text-xl font-bold">COSMAC - {title}</h2>
          <p className="text-accent-light">{description}</p>
        </div>
      </div>
      <div className="relative md:w-1/2 h-[20rem]">
        <Image
          src={"/images/about/" + img}
          layout="fill"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default AboutPoint;
