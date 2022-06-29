import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setColor } from '../../store/slices/logoSlice/logoSlice'
import { colorCards } from '../../models/colorCards'
import { store } from "../../store/store";
const NewColors = () => {
  const state = store.getState();
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch()
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id
    setSelected(id);
    dispatch(setColor(id))
  }
  
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-20">
      <div className="w-11/12 md:w-4/6 justify-center mx-auto">
        <div className="flex justify-center items-end gap-4 mb-6">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl w-4/6 text-center font-extrabold p-4 text-gray-900 mb-7 ">
            Pick favorite color
          </h2>
        </div>

        <div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 w-full mx-auto md:gap-x-6 gap-y-12 ">
          {/* <!-- product - start --> */}
          {colorCards.map((card, index) => (
            <div
              onClick={(e) => {
                handleClick(e)
              }}
              id={String(index + 1)}
              key={index}
              className={`flex flex-col group  border border-gray-400 flex-nowrap hover:shadow-lg text-8xl duration-200 hover:text-4xl my-5 rounded-lg h-72 justify-center cursor-pointer ease-in ease-linear
               ${
                    selected === String(index + 1) ? "border-4 border-green-500 " : ""
                  }
               `}>
                
              {/* // className="hover:scale-100 transition duration-500 ease-in-out shadow-md hover:cursor-pointer hover:shadow-2xl rounded-2x1"> */}
              <ul className="w-full p-3 bg-gray-30 rounded-t-lg">
                {card.colors.map((color, index) => (
                  <div className="group h-12 block bg-gray-100 relative">
                    <li
                      id={String(index + 1)}
                      //  className={`${color} h-12 w-full rounded-sm`}
                      className={`${color} h-12 w-full group-hover:scale-105  transition duration-500`}
                      key={index}></li>
                  </div>
                ))}
              </ul>
              <p className="pt-3 text-base w-full text-center h-14 font-mono p-3 font-semibold text-gray-400 transition rounded-b-2xl duration-500 group-hover:text-gray-500">
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
