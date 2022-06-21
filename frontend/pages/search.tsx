import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import axios from "axios";
import { IProduct } from "types";
import Category from "components/category/Category";

interface Props {
  term: string;
  products: IProduct[];
}

const SearchPage: NextPage<Props> = ({ term, products }) => {
  return (
    <>
      <Head>
        <title>Cosmac - {term}</title>
      </Head>
      <Category
        Icon={ShoppingBagIcon}
        name={`Produkty dla "${term}"`}
        products={products}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const term = query.term;
  if (!term) return { redirect: { permanent: false, destination: "/" } };

  const products = await axios
    .get("/products", { params: { search: term } })
    .then((res) => res.data);

  return { props: { term, products } };
};

export default SearchPage;
