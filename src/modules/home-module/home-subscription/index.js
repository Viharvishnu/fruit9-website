import CtaButton from "@/components/cta-button";
import SubHeading from "@/components/sub-heading";
import FruitBoxOptions from "@/modules/home-module/home-subscription/fruit-box-options";
import FruitsCarousal from "@/modules/home-module/home-subscription/fruits-carousal";
import SubscriptionOptions from "@/modules/home-module/home-subscription/subscription-options";
import { useState } from "react";
import { toast } from "react-toastify";

const HomeSubscription = ({ fruitsData, setFruitBox, fruitBox }) => {
  const [subscription, setSubscription] = useState(true);
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
    } else if (fruits.length < 2) {
      toast.error("Please select at least 2 fruits");
      event.preventDefault();
    }
  };
  const encodedMessage = encodeURIComponent(
    `I am ${name},
I would like a ${subscription ? "large box" : "small box"} for a ${
      fruitBox ? "monthly subscription" : "weekly subscription"
    } with these fruits:
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
      <FruitBoxOptions setFruitBox={setFruitBox} fruitBox={fruitBox} />
      <div className="w-5/6 max-w-4xl flex flex-col gap-4">
        <label className="flex flex-col gap-2 mb-2">
          Your Name
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            className="bg-green-100 border border-green-300 text-green-800 text-sm rounded-lg w-full p-2.5 placeholder-green-800"
            placeholder="Your Name..."
            required
          />
        </label>

        <label className="flex flex-col gap-2 mb-2">
          <span>Your Address</span>
          <span className="block text-sm text-red-500">* We deliver only within 20 kms from Ramapuram, Chennai</span>
          <textarea
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            className="resize-none bg-green-100 border border-green-300 text-green-800 text-sm rounded-lg w-full p-2.5 placeholder-green-800 h-28"
            placeholder="Your Address..."
            required
          />
        </label>
      </div>
      <CtaButton href={`https://wa.me/9892901074?text=${encodedMessage}`} onClick={orderClickHandler}>
        Order Now
      </CtaButton>
    </div>
  );
};

export default HomeSubscription;
