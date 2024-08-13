import HomeAbout from "@/modules/home-module/home-about";
import HomeLanding from "@/modules/home-module/home-landing";
import HomePlans from "@/modules/home-module/home-plans";
import HomeSubscription from "@/modules/home-module/home-subscription";
import { useState } from "react";

const HomeModule = ({ fruitsData }) => {
  const [fruitBox, setFruitBox] = useState(true);
  return (
    <>
      <HomeLanding />
      <HomePlans setFruitBox={setFruitBox} />
      <HomeSubscription fruitsData={fruitsData} fruitBox={fruitBox} setFruitBox={setFruitBox} />
      <HomeAbout />
    </>
  );
};

export default HomeModule;
