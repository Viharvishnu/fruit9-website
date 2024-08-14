const subscriptionData = [
  {
    name: "3 day Subscription",
    small: "Rs 300/-",
    large: "Rs 540/-",
    ogSmall: "Rs 300/-",
    ogLarge: "Rs 540/-",
    duration: "3 days",
    description: "We will send you fresh and healthy fruit boxes for 3 days of a week."
  },
  {
    name: "Weekly Subscription",
    small: "Rs 510/-",
    large: "Rs 960/-",
    ogSmall: "Rs 660/-",
    ogLarge: "Rs 1320/-",
    duration: "6 days",
    description: "We will send you fresh and healthy fruit boxes for 6 days of a week."
  },
  {
    name: "Monthly Subscription",
    small: "Rs 2125/-",
    large: "Rs 4000/-",
    ogSmall: "Rs 2750/-",
    ogLarge: "Rs 5500/-",
    duration: "25 days",
    description: "We will send you fresh and healthy fruit boxes for 25 days of a month."
  }
];

const SubscriptionOptions = ({ setSubscription }) => {
  const subscriptionDataMapper = (item, index) => {
    const { description, name, duration, small, large, ogSmall, ogLarge } = item;
    return (
      <li key={`list-method-${index}`} className="h-auto">
        <label htmlFor={item.name} className="block relative">
          <input
            onClick={() => setSubscription(index)}
            id={item.name}
            type="radio"
            defaultChecked={index == 2 ? true : false}
            name="subscription"
            className="sr-only peer"
          />
          <div className="w-full flex flex-col items-start p-4 cursor-pointer rounded-lg border bg-[#fcfed6] shadow-sm ring-green-400 peer-checked:ring-2 duration-200">
            <div className="flex flex-col">
              <h3 className="leading-none font-medium pr-3">{name}</h3>
              <p className="text-sm text-gray-700 mt-1 mb-2">{duration}</p>
              <span className="flex items-center my-1 gap-2">
                <span>Small Box :</span>
                <span className="flex gap-2 items-center">
                  {index > 0 && <span className="text-gray-500 line-through">{ogSmall}</span>}
                  <span className="bg-green-300 block py-1 px-4 rounded-lg">{small}</span>
                </span>
              </span>
              <span className="flex items-center my-1 gap-2">
                <span>Large Box :</span>
                <span className="flex gap-2 items-center">
                  {index > 0 && <span className="text-gray-500 line-through">{ogLarge}</span>}
                  <span className="bg-green-300 block py-1 px-4 rounded-lg">{large}</span>
                </span>
              </span>
              <p className="mt-1 text-gray-700">{description}</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full border peer-checked:bg-green-400 text-white peer-checked:text-white duration-200">
            <svg className="w-2.5 h-2.5" viewBox="0 0 12 10">
              <polyline
                fill="none"
                strokeWidth="2px"
                stroke="currentColor"
                strokeDasharray="16px"
                points="1.5 6 4.5 9 10.5 1"
              ></polyline>
            </svg>
          </div>
        </label>
      </li>
    );
  };
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <span className="w-5/6 max-w-4xl">Select your subscription plan :</span>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-3 w-5/6 max-w-4xl">
        {subscriptionData.map(subscriptionDataMapper)}
      </ul>
    </div>
  );
};

export default SubscriptionOptions;
