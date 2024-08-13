import { phoneNumber } from "@/common-data";
import CtaButton from "@/components/cta-button";
import SubHeading from "@/components/sub-heading";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4" id="about">
      <SubHeading>About Us</SubHeading>
      <div className="relative sm:h-[450px] aspect-video w-[100%]">
        <Image
          alt="Fruits"
          src="/images/img-about.png"
          fill
          sizes="100%"
          draggable={false}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-center sm:w-8/12 w-11/12">
        Fruit9 is a Chennai-based company specializing in delivering fresh fruit boxes containing a delightful
        assortment of 9 different fruits: Pineapple, Pomegranate, Papaya, Kiwi, Grapes, Banana, Watermelon, Oranges, and
        Jackfruit. Offering flexible subscription plans, customers can choose from 3-day, 1-week, or 1-month options
        with the convenience of selecting either a large or small fruit box. With Fruit9, enjoying a variety of seasonal
        and nutritious fruits has never been easier.
      </p>
      <CtaButton href={`https://wa.me/${phoneNumber}`}>Contact Us</CtaButton>
    </div>
  );
};

export default HomeAbout;
