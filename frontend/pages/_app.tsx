import type { AppProps } from "next/app";
import axios from "axios";
import Bar from "components/Bar";
import Navbar from "components/Navbar";
import Form from "components/Form";
import "styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

function Cosmac({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Bar />
      <Navbar />
      <Component {...pageProps} />
      <Form />
    </div>
  );
}

export default Cosmac;
