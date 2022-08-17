import type { AppProps } from "next/app";
import Bar from "components/Bar";
import Navbar from "components/navbar/Navbar";
import Form from "components/Form";
import Footer from "components/Footer";
import "styles/globals.css";

function Cosmac({ Component, pageProps }: AppProps) {
  return (
    <>
      <Bar />
      <Navbar />
      <Component {...pageProps} />
      <Form />
      <Footer />
    </>
  );
}

export default Cosmac;
