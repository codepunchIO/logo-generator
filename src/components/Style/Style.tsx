import React from 'react'
import layout1 from '../../assets/img/Style_layouts/layout1.svg'
import layout2 from '../../assets/img/Style_layouts/layout2.svg'
import layout3 from '../../assets/img/Style_layouts/layout3.svg'
import layout4 from '../../assets/img/Style_layouts/layout4.svg'
const Style = () => {
  return (
    <div className="flex flex-col h-full w-full p-1">
      <h2 className="text-3xl text-center font-bold p-4"> Choose a layout</h2>
      <div className=" flex flex-row justify-evenly my-30">
        <div className="">
          <img className="hover:bg-green-500" src={layout1} alt="layout1" />
        </div>
        <div className="">
          <img className="hover:bg-green-500" src={layout2} alt="layout2" />
        </div>
      </div>
      <div className=" flex flex-row justify-evenly py-10">
        <div className="">
          <img className="hover:bg-green-500" src={layout3} alt="layout3" />
        </div>
        <div className="">
          <img className="hover:bg-green-500" src={layout4} alt="layout4" />
        </div>
      </div>
    </div>
  )
}

export default Style
