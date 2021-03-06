import React from "react";
import { useDispatch } from "react-redux";
import { setColor } from "../../store/slices/logoSlice/logoSlice";

const colorCards = [
  {
    title: "Friendly, Loyal & Peacefull",
    colors: ["bg-blue-400", "bg-blue-300", "bg-blue-200", "bg-blue-100"],
  },
  {
    title: "Natural, Happy & Calm",
    colors: ["bg-green-400", "bg-green-300", "bg-green-200", "bg-green-100"],
  },
  {
    title: "Bold, Engaging & Vibrant",
    colors: [
      "bg-purple-400",
      "bg-purple-300",
      "bg-purple-200",
      "bg-purple-100",
    ],
  },
  {
    title: "Intense, Warm & Romantic",
    colors: ["bg-red-400", "bg-red-300", "bg-red-200", "bg-red-100"],
  },
  {
    title: "Somber, Earthy,Solid & Natural",
    colors: [
      "bg-orange-400",
      "bg-orange-300",
      "bg-orange-200",
      "bg-orange-100",
    ],
  },
  {
    title: "Cheerful, Vibrant & Happy",
    colors: ["bg-amber-400", "bg-amber-300", "bg-amber-200", "bg-amber-100"],
  },
];

const Colors = () => {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    dispatch(setColor(id));
  };

  return (
    <>
      <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7 ">
        {" "}
        Pick favorite color
      </h1>
      <div className="flex h-full w-full justify-center overflow-y-auto p-3  ">
        <div className=" flex flex-wrap flex-row justify-between  p-2 gap-y-7 max-w-4xl ">
          {colorCards.map((card, index) => (
            <div
              onClick={(e) => {
                handleClick(e);
              }}
              id={String(index + 1)}
              className="hover:bg-green-500 p-1 rounded-lg flex-wrap w-56 flex justify-center border-2"
              key={index}
            >
              <ul className="w-full p-3 bg-white ">
                {card.colors.map((color, index) => (
                  <li
                    id={String(index + 1)}
                    className={`${color} h-12 w-full rounded-sm`}
                    key={index}
                  ></li>
                ))}
              </ul>
              <p className="bg-white text-base pt-2 w-full text-center h-14 font-mono p-3 font-semibold text-gray-400 ">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Colors;
