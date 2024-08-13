import Image from "next/image";
import { useEffect, useState } from "react";

const fruitsList = ["Mango", "Apple", "Orange", "Pineapple", "Watermelon", "Grapes", "Cherry", "Kiwi"];

const FruitsCarousal = ({ setFruits, fruitsData }) => {
  const [checkedFruits, setCheckedFruits] = useState({});
  useEffect(() => {
    const newFruits = fruitsList.filter((fruit, index) => checkedFruits[`fruit-${index + 1}`]);
    setFruits(newFruits);
  }, [checkedFruits, setFruits]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedFruits((prev) => ({ ...prev, [name]: checked }));
  };

  const fruitsMapper = (fruit, index) => {
    const { name, fruitImage } = fruit;
    const fruitKey = `fruit-${index + 1}`;
    return (
      <div className="grid place-items-center p-1" key={fruitKey}>
        <li className="w-full list-none">
          <label htmlFor={fruitKey} className="block relative">
            <input
              id={fruitKey}
              type="checkbox"
              name={fruitKey}
              className="sr-only peer"
              onChange={handleCheckboxChange}
            />
            <div className="w-full flex flex-col items-start md:p-4 cursor-pointer rounded-lg border bg-[#fcfed6] shadow-sm ring-green-400 peer-checked:ring-2 duration-200">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="relative w-full aspect-square mx-auto">
                  <Image
                    alt="fruit"
                    src={fruitImage.url}
                    fill
                    sizes="100%"
                    draggable={false}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="heading text-2xl md:text-3xl">{name}</span>
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
      </div>
    );
  };

  return (
    <div className="max-w-4xl w-5/6 flex flex-col gap-2">
      <span>Select your fruits : </span>
      <span className="block text-sm text-green-600">
        * Guava and Kiwi will be the default fruits in every fruit box.
      </span>
      <span className="block text-sm text-green-600">* Add a minimum of 4 more fruits</span>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">{fruitsData.map(fruitsMapper)}</div>
    </div>
  );
};

export default FruitsCarousal;
