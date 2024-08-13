import CtaButton from "@/components/cta-button";
import SubHeading from "@/components/sub-heading";
import Image from "next/image";

const planDetails = [
  {
    name: "Small Box",
    imgSrc: "/images/box-2.png",
    rates: "₹ 100 / day",
    feats: ["Compactly assorted", "250 grams", "Juicy and succinct", "Shared by 1-2 people"]
  },
  {
    name: "Large Box",
    imgSrc: "/images/box-1.png",
    rates: "₹ 180 / day",
    feats: ["Greatly assorted", "450 grams", "Contains greater fruit quantity", "Shared by 2-3 people"]
  }
];

const HomePlans = ({ setFruitBox }) => {
  const planHandler = (name) => {
    return () => {
      const element = document.getElementById("subscriptions");
      element?.scrollIntoView({
        behavior: "smooth"
      });
      setFruitBox(() => (name.includes("Large Box") ? true : false));
    };
  };
  const planMapper = (box, index) => {
    const { name, imgSrc, feats, rates } = box;
    return (
      <div
        key={`fruit-box-${index + 1}`}
        className="plan-card flex flex-col rounded-lg p-6 md:w-fit bg-green-100 items-center gap-3 w-11/12 max-w-96"
      >
        <span className="heading text-5xl font-bold text-green-600">{name}</span>
        <div className="relative lg:min-w-72 w-full aspect-square mx-auto">
          <Image alt={name} src={imgSrc} fill sizes="100%" draggable={false} className="w-full h-full object-contain" />
        </div>
        <div className="w-full">
          <span className="text-gray-600 mb-2 block">Features</span>
          <span className="text-2xl text-green-600 font-bold my-1 block">{rates}</span>
          <ul className="list-disc pl-5">{feats.map(featsMapper)}</ul>
        </div>
        <CtaButton extraClassName="mt-4 w-full text-center" secondary onClick={planHandler(name)}>
          Order {name}
        </CtaButton>
      </div>
    );
  };
  const featsMapper = (str, index) => <li key={`feat-${index + 1}`}>{str}</li>;
  return (
    <div id="plans" className="flex flex-col gap-12 items-center justify-center">
      <SubHeading>Our Plans</SubHeading>
      <div className="flex gap-16 flex-col md:flex-row w-full items-center justify-center">
        {planDetails.map(planMapper)}
      </div>
    </div>
  );
};

export default HomePlans;
