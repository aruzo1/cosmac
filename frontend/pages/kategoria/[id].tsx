import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ICategory, IProduct } from "types";
import Category from "components/category/Category";
import server from "axios/server";

interface Props {
  category: ICategory;
  products: IProduct[];
}

const CategoryPage: NextPage<Props> = ({ category, products }) => {
  return (
    <>
      <Head>
        <title>Cosmac - {category.name}</title>
      </Head>
      <Category
        Icon={ShoppingBagIcon}
        name={category.name}
        products={products}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id;

  const category = await server.get("/categories/" + id).then((res) => res.data);
  const products = await server
    .get("/products", { params: { category: id } })
    .then((res) => res.data);

  return { props: { category, products } };
};

export default CategoryPage;
