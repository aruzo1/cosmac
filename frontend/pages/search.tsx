import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { IProduct } from "types";
import Category from "components/category/Category";
import NoProductsMsg from "components/NoProductsMsg";
import server from "axios/server";

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
      {products.length > 0 ? (
        <Category
          Icon={ShoppingBagIcon}
          name={`Produkty dla "${term}"`}
          products={products}
        />
      ) : (
        <NoProductsMsg term={term} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const term = query.term;
  if (!term) return { redirect: { permanent: false, destination: "/" } };

  const products = await server
    .get("/products", { params: { search: term } })
    .then((res) => res.data);

  return { props: { term, products } };
};

export default SearchPage;
