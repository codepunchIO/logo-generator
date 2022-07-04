import React, { useEffect, useState } from "react";
// @ts-ignore
import { store } from "../../store/store";
import {
  Elegant,
  Futuristic,
  Handwritten,
  Modern,
  Playfull,
  Slab,
} from "./fontCategories";

function FontsStepper() {
  const state = store.getState();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [categories, setCategories] = useState<string[][]>(Modern);
  useEffect(() => {
    switch (state.logo.data.style!) {
      case "Modern":
        setCategories(Modern);
        console.log("Modern");

        break;
      case "Elegant":
        setCategories(Elegant);
        console.log("Elegant");

        break;
      case "Slab":
        setCategories(Slab);
        console.log("Slab");

        break;
      case "Handwritten":
        setCategories(Handwritten);
        console.log("Handwritten");
        break;
      case "Playfull":
        setCategories(Playfull);
        console.log("Playfull");

        break;
      case "Futuristic":
        setCategories(Futuristic);
        console.log("Futuristic");

        break;
    }
  }, [state.logo.data.style]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setSelectedIndex(selectedIndex + 1);
  };

  console.log(categories);
  return selectedIndex < 7 ? (
    <div className=" w-11/12 sm:w-4/6 flex flex-col md:flex-row md:justify-between mt-10 md:mt-0 h-screen items-center mx-auto">
      {categories[selectedIndex].map((family: any, index) => (
        <div
          className={`flex flex-col w-full border mx-4 border-gray-400 flex-nowrap hover:shadow-lg text-8xl duration-200 hover:text-4xl my-5 rounded-lg h-72 justify-center cursor-pointer ease-in ease-linear hover:border-2 hover:border-green-500`}
          onClick={(e) => handleClick(e)}
          key={index}
        >
          <span
            style={{ fontFamily: `${family}` }}
            className="flex flex-col p-4 flex-wrap mx-2 text-center justify-center h-full text-2xl"
            // onClick={(e) => handleClick(e)}
          >
            {state.logo.data.brandName}
          </span>
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  );
  //  <NewColors />
}

export default FontsStepper;
