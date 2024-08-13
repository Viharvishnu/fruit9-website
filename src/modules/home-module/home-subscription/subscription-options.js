const subscriptionData = [
  {
    name: "Weekly Subscription",
    duration: "6 days",
    description: "We will send you fresh and healthy fruit boxes for 6 days of a week."
  },
  {
    name: "Monthly Subscription",
    duration: "25 days",
    description: "We will send you fresh and healthy fruit boxes for 25 days of a month."
  }
];

const SubscriptionOptions = ({ setSubscription }) => {
  const subscriptionDataMapper = (item, index) => {
    const { description, name, duration } = item;
    return (
      <li key={`list-method-${index}`} className="h-auto">
        <label htmlFor={item.name} className="block relative">
          <input
            onClick={() => setSubscription(index === 0 ? false : true)}
            id={item.name}
            type="radio"
            defaultChecked={index == 1 ? true : false}
            name="subscription"
            className="sr-only peer"
          />
          <div className="w-full flex flex-col items-start p-4 cursor-pointer rounded-lg border bg-[#fcfed6] shadow-sm ring-green-400 peer-checked:ring-2 duration-200">
            <div>
              <h3 className="leading-none font-medium pr-3 mb-3">{name}</h3>
              <p className="mt-1 text-sm text-gray-700">{duration}</p>
              <p className="mt-1 text-sm text-gray-700">{description}</p>
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