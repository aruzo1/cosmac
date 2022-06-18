import type { AppProps } from "next/app";
import axios from "axios";
import Bar from "components/Bar";
import Navbar from "components/Navbar";
import "styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

function Cosmac({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Bar />
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default Cosmac;
