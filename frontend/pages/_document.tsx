import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta
            name="description"
            content="Studio Paznokci to miejsce, gdzie kompleksowo zadbamy o Twoje paznokcie."
          />
        </Head>
        <body>
          <div id="modals" className="relative z-10" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
