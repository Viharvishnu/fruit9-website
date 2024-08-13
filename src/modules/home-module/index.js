import HomeAbout from "@/modules/home-module/home-about";
import HomeLanding from "@/modules/home-module/home-landing";
import HomePlans from "@/modules/home-module/home-plans";
import HomeSubscription from "@/modules/home-module/home-subscription";
import Head from "next/head";
import { useState } from "react";

const HomeModule = ({ fruitsData }) => {
  const [fruitBox, setFruitBox] = useState(true);
  return (
    <>
      <Head>
        <title>Fruit9</title>
      </Head>
      <HomeLanding />
      <HomePlans setFruitBox={setFruitBox} />
      <HomeSubscription fruitsData={fruitsData} fruitBox={fruitBox} setFruitBox={setFruitBox} />
      <HomeAbout />
    </>
  );
};

export default HomeModule;
