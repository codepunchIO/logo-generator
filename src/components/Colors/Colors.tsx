import React from 'react'
import Bold from '../../assets/img/Colors_palletes/Bold.svg'
import Cheerful from '../../assets/img/Colors_palletes/Cheerful.svg'
import Friendly from '../../assets/img/Colors_palletes/Friendly.svg'
import Intense from '../../assets/img/Colors_palletes/Intense.svg'
import Natural from '../../assets/img/Colors_palletes/Natural.svg'
import Somber from '../../assets/img/Colors_palletes/Somber.svg'

const Colors = () => {
  return (
    <div className="flex flex-col h-full w-full p-1">
      <h2 className="text-3xl text-center font-bold p-4"> Choose a layout</h2>
      <div className=" flex flex-row justify-evenly my-30">
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Friendly} alt="layout1" />
        </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Natural} alt="layout2" />
            </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Bold} alt="layout4" />
        </div>
      </div>
      <div className=" flex flex-row justify-evenly py-10">
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Intense} alt="layout3" />
        </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Somber} alt="layout4" />
        </div>
         <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Cheerful} alt="layout4" />
        </div>
      </div>
    </div>
  )
}

export default Colors