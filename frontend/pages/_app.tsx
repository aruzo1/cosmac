import type { AppProps } from "next/app";
import axios from "axios";
import { ICategory } from "types";
import Bar from "components/Bar";
import Navbar from "components/Navbar";
import Form from "components/Form";
import Footer from "components/Footer";
import "styles/globals.css";

interface Props extends AppProps {
  categories: ICategory[];
}

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

function Cosmac({ Component, pageProps, categories }: Props) {
  return (
    <>
      <Bar />
      <Navbar categories={categories} />
      <Component {...pageProps} />
      <Form />
      <Footer />
    </>
  );
}

Cosmac.getInitialProps = async () => {
  const categories = await axios.get("/categories").then((res) => res.data);

  return { categories };
};

export default Cosmac;
