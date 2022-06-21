import Head from "next/head";
import AboutWelcome from "components/about/AboutWelcome";
import AboutPoints from "components/about/AboutPoints";

function AboutUsPage() {
  return (
    <>
      <Head>
        <title>Cosmac - O Nas</title>
      </Head>
      <AboutWelcome />
      <AboutPoints />
    </>
  );
}

export default AboutUsPage;
