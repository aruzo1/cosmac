import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { BadgeCheckIcon, StarIcon } from "@heroicons/react/outline";
import { IProduct } from "types";
import Header from "components/Header";
import Category from "components/category/Category";
import server from "axios/server";

interface Props {
  bestsellerProducts: IProduct[];
  specialProducts: IProduct[];
}

const HomePage: NextPage<Props> = (props) => {
  const { bestsellerProducts, specialProducts } = props;

  return (
    <>
      <Head>
        <title>Cosmac - Home</title>
      </Head>
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const bestsellerProducts = await server
    .get("/products", { params: { bestseller: true } })
    .then((res) => res.data);

  const specialProducts = await server
    .get("/products", { params: { special: true } })
    .then((res) => res.data);

  return { props: { bestsellerProducts, specialProducts } };
};

export default HomePage;
