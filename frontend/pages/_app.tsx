import type { AppProps } from "next/app";
import Bar from "components/Bar";
import Navbar from "components/Navbar";
import "styles/globals.css";

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
