import React from 'react'
import Clean from '../../assets/img/Fonts/Clean.svg'
import Funky from '../../assets/img/Fonts/Funky.svg'
import Funny from '../../assets/img/Fonts/Funny.svg'
import Futuristic from '../../assets/img/Fonts/Futuristic.svg'
import Geometric from '../../assets/img/Fonts/Geometric.svg'
import Handwritten from '../../assets/img/Fonts/Handwritten.svg'
import Luxury from '../../assets/img/Fonts/Luxury.svg'
import Modern from '../../assets/img/Fonts/Modern.svg'
import Rounded from '../../assets/img/Fonts/Rounded.svg'

const Fonts = () => {
  return (
    <div className="flex flex-col h-full w-full p-1">
      <h2 className="text-3xl text-center font-bold p-4"> Choose a layout</h2>
      <div className=" flex flex-row justify-evenly my-30">
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Clean} alt="layout1" />
        </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Modern} alt="layout2" />
        </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Funny} alt="layout4" />
        </div>
      </div>
      <div className=" flex flex-row justify-evenly py-10">
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Luxury} alt="layout3" />
        </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Handwritten} alt="layout4" />
        </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Geometric} alt="layout4" />
        </div>
      </div>
      <div className=" flex flex-row justify-evenly py-10">
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Rounded} alt="layout3" />
        </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Futuristic} alt="layout4" />
        </div>
        <div className="">
          <img className="hover:bg-green-500 p-1 rounded-lg" src={Funky} alt="layout4" />
        </div>
      </div>
    </div>
  )
}

export default Fonts
