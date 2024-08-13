import Image from "next/image";
const boxData = [
  {
    name: "Small box",
    weight: "250 grams",
    imgSrc: "/images/img-about.png",
    servings: "Can be shared with 1 - 2 people"
  },
  {
    name: "Large box",
    weight: "450 grams",
    imgSrc: "/images/img-about.png",
    servings: "Can be shared with 2 - 3 people"
  }
];

const rates = [
  {
    ogPrice: ["₹ 300", "₹ 540"],
    discPrice: ["₹ 300", "₹ 540"]
  },
  {
    ogPrice: ["₹ 660", "₹ 1320"],
    discPrice: ["₹ 510", "₹ 960"]
  },
  {
    ogPrice: ["₹ 2750", "₹ 5500"],
    discPrice: ["₹ 2125", "₹ 4000"]
  }
];

const FruitBoxOptions = ({ setFruitBox, fruitBox, subscription }) => {
  const boxDataMapper = (item, index) => {
    const { weight, name, servings, imgSrc } = item;
    return (
      <li key={`list-method-${index}`} className="h-auto">
        <label htmlFor={item.name} className="block relative">
          <input
            id={item.name}
            type="radio"
            defaultChecked={name.includes(fruitBox ? "Large" : "Small") ? true : false}
            name="fruit-box"
            className="sr-only peer"
            onClick={() => {
              setFruitBox(index === 0 ? false : true);
            }}
          />
          <div className="w-full flex flex-col items-start p-4 cursor-pointer rounded-lg border bg-[#fcfed6] shadow-sm ring-green-400 peer-checked:ring-2 duration-200">
            <div className="w-full">
              <h3 className="leading-none font-medium pr-3 mb-3">{name}</h3>
              <div className="relative w-10/12 aspect-square mx-auto">
                <Image
                  alt={name}
                  src={imgSrc}
                  fill
                  sizes="100%"
                  draggable={false}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                {subscription !== 0 && (
                  <span className="text-xl text-gray-500 line-through">{rates[subscription].ogPrice[index]}</span>
                )}
                <span className="text-2xl text-green-600 font-bold">{rates[subscription].discPrice[index]}</span>
              </div>
              <p className="mt-1 text-sm text-gray-700">{weight}</p>
              <p className="mt-1 text-sm text-gray-700">{servings}</p>
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
      <div className="flex flex-col gap-2 w-5/6 max-w-4xl">
        <span>Select your fruit box :</span>
        <span className="block text-sm text-red-500">* Best before 3 hours from delivery</span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 gap-3 w-5/6 max-w-4xl">{boxData.map(boxDataMapper)}</ul>
    </div>
  );
};

export default FruitBoxOptions;
