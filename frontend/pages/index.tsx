import type { GetServerSideProps, NextPage } from "next";
import { BadgeCheckIcon, StarIcon } from "@heroicons/react/outline";
import axios from "axios";
import { IProduct } from "types";
import Header from "components/Header";
import Category from "components/category/Category";

interface Props {
  bestsellerProducts: IProduct[];
  specialProducts: IProduct[];
}

const Home: NextPage<Props> = (props) => {
  const { bestsellerProducts, specialProducts } = props;

  return (
    <div>
      <Header />
      <Category
        name="Bestsellery"
        Icon={BadgeCheckIcon}
        products={bestsellerProducts}
      />
      <Category
        name="Wyróżnione Oferty"
        Icon={StarIcon}
        products={specialProducts}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const bestsellerProducts = await axios
    .get("/products", { params: { bestseller: true } })
    .then((res) => res.data);

  const specialProducts = await axios
    .get("/products", { params: { special: true } })
    .then((res) => res.data);

  return { props: { bestsellerProducts, specialProducts } };
};

export default Home;
