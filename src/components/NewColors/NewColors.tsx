import React from 'react'

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



const NewColors = () => {


  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    dispatch(setColor(id));
  };


    return (
      




   <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="flex justify-center items-end gap-4 mb-6">
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Pick favorite color</h2>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8">
                    {/* <!-- product - start --> */}
                      {colorCards.map((card, index) => (
            <div
               onClick={(e) => {
                 handleClick(e);
              }}
              id={String(index + 1)}
                              key={index}
                   className="hover:scale-105 hover:border-2  hover:border-green-500 shadow hover:shadow-2xl rounded"            
            >
               <ul className="w-full p-3 bg-white  "  >
                                  {card.colors.map((color, index) => (
                     <div className="group h-12 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
                  <li
                    id={String(index + 1)}
                    //  className={`${color} h-12 w-full rounded-sm`}
                         className={`${color} h-12 w-full rounded-sm group-hover:scale-110 transition duration-200`}
                    key={index}
                 ></li>
                                          </div>
               ))}
              </ul>
              <p className="bg-white text-base pt-2 w-full text-center h-14 font-mono p-3 font-semibold text-gray-400 ">
                {card.title}
              </p>
             </div>
          ))}
      
    
    </div>
  </div>
</div>
  )
}

export default NewColors



