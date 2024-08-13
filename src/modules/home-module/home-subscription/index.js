import CtaButton from "@/components/cta-button";
import SubHeading from "@/components/sub-heading";
import FruitBoxOptions from "@/modules/home-module/home-subscription/fruit-box-options";
import FruitsCarousal from "@/modules/home-module/home-subscription/fruits-carousal";
import OrderInputs from "@/modules/home-module/home-subscription/order-inputs";
import SubscriptionOptions from "@/modules/home-module/home-subscription/subscription-options";
import { useState } from "react";
import { toast } from "react-toastify";

const HomeSubscription = ({ fruitsData, setFruitBox, fruitBox }) => {
  const [subscription, setSubscription] = useState(2);
  const [fruits, setFruits] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const orderClickHandler = (event) => {
    if (name.length < 1) {
      toast.error("Please enter your name");
      event.preventDefault();
    } else if (address.length < 1) {
      toast.error("Please enter your address");
      event.preventDefault();
    } else if (fruits.length < 4) {
      toast.error("Please select at least 4 fruits");
      event.preventDefault();
    }
  };
  const encodedMessage = encodeURIComponent(
    `I am ${name},
I would like a ${
      subscription === 0 ? "3 day subscription" : subscription === 1 ? "weekly subscription" : "monthly subscription"
    } for a ${fruitBox ? "large box" : "small box"} with these fruits:
${fruits}

My address :
${address}`
  );
  return (
    <div id="subscriptions" className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-4 max-w-4xl w-5/6">
        <SubHeading>Our Subscriptions</SubHeading>
        <p>Customize your fruit box instantly and order right away</p>
      </div>
      <FruitsCarousal setFruits={setFruits} fruitsData={fruitsData} />
      <SubscriptionOptions setSubscription={setSubscription} />
      <FruitBoxOptions setFruitBox={setFruitBox} fruitBox={fruitBox} subscription={subscription} />
      <OrderInputs setName={setName} setAddress={setAddress} />
      <CtaButton href={`https://wa.me/9892901074?text=${encodedMessage}`} onClick={orderClickHandler}>
        Order Now
      </CtaButton>
    </div>
  );
};

export default HomeSubscription;
