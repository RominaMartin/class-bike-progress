import type { NextPage } from "next";
import Head from "next/head";
import { Preview } from "styles/Home";
import Bike from "../components/bike/Bike";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Class progress - La teacher Canaria</title>
        <meta name="description" content="Class progress" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏻‍🏫</text></svg>"
        />
      </Head>

      <Preview>
        <Bike />
      </Preview>
      <div></div>
    </div>
  );
};

export default Home;
