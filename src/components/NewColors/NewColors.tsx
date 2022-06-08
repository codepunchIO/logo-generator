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
      




   <div className="bg-white py-6 sm:py-8 lg:py-20">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="flex justify-center items-end gap-4 mb-6">
      <h2 className="text-4xl text-center font-extrabold p-4  text-gray-900 mb-7 ">Pick favorite color</h2>

    </div>

    <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-x-4 w-3/4 mx-auto md:gap-x-6 gap-y-8">
                    {/* <!-- product - start --> */}
                      {colorCards.map((card, index) => (
            <div
               onClick={(e) => {
                 handleClick(e);
              }}
              id={String(index + 1)}
                              key={index}
                   className="hover:scale-100 transition duration-500 ease-in-out shadow-md hover:cursor-pointer hover:shadow-2xl rounded-2x1"            
            >
               <ul className="w-full p-3 bg-gray-30 rounded-t-lg border-2 border-b-0"  >
                                  {card.colors.map((color, index) => (
                     <div className="group h-12 block bg-gray-100 relative">
                  <li
                    id={String(index + 1)}
                    //  className={`${color} h-12 w-full rounded-sm`}
                         className={`${color} h-12 w-full group-hover:scale-105 transition duration-500`}
                    key={index}
                 ></li>
              </div>
               ))}
              </ul>
              <p className="bg-gray-100 pt-3 border-2 text-base pt-2 w-full text-center h-14 font-mono p-3 font-semibold text-gray-400 transition duration-500 hover:text-gray-500">
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



