import React from 'react'

import { useDispatch } from 'react-redux'
import { setColor } from '../../store/slices/logoSlice/logoSlice'
import { colorCards } from '../../models/colorCards'

const NewColors = () => {
  const dispatch = useDispatch()
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id
    dispatch(setColor(id))
  }

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-20">
      <div className=" w-9/12 justify-center mx-auto">
        <div className="flex justify-center items-end gap-4 mb-6">
          <h2 className="text-4xl w-9/12 text-center font-extrabold p-4 text-gray-900 mb-7 ">
            Pick favorite color
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 w-auto mx-auto md:gap-x-6 gap-y-8">
          {/* <!-- product - start --> */}
          {colorCards.map((card, index) => (
            <div
              onClick={(e) => {
                handleClick(e)
              }}
              id={String(index + 1)}
              key={index}
              className="hover:scale-100 transition duration-500 ease-in-out shadow-md hover:cursor-pointer hover:shadow-2xl rounded-2x1">
              <ul className="w-full p-3 bg-gray-30 rounded-t-lg border-2 border-b-0">
                {card.colors.map((color, index) => (
                  <div className="group h-12 block bg-gray-100 relative">
                    <li
                      id={String(index + 1)}
                      //  className={`${color} h-12 w-full rounded-sm`}
                      className={`${color} h-12 w-full group-hover:scale-105 transition duration-500`}
                      key={index}></li>
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
