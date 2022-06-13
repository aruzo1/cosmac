import type { AppProps } from "next/app";
import Bar from "components/Bar";
import "styles/globals.css";

function Cosmac({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Bar />
      <Component {...pageProps} />
    </div>
  );
}

export default Cosmac;
