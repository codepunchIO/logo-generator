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
import { useDispatch } from 'react-redux'
import { setFont } from '../../store/slices/logoSlice/logoSlice'


const fonts=[Clean,Modern,Funny,Luxury,Handwritten,Geometric,Rounded,Futuristic,Funky]
const Fonts = () => {
  const dispatch = useDispatch()
   const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const id = e.currentTarget.id
    dispatch(setFont(id))
  }
  return (

        <div className="flex flex-col h-full w-full p-1">
  <div className="flex flex-wrap flex-row justify-evenly w-full p-4 ">
      {fonts.map((font) => 
        <div className="flex flex-row w-1/3 flex-nowrap">
          <img
            // className="hover:bg-green-500"
            className="hover:bg-green-500 p-1 rounded-lg  w-full flex justify-center"
            onClick={(e) => handleClick(e)}
            id={String(fonts.indexOf(font)+1)}
            src={font}
            alt="layout"
          />
        </div>
      )}
      </div>
      </div>
    // <div className="flex flex-col h-full w-full p-1">
    //   <h2 className="text-3xl text-center font-bold p-4"> Choose a layout</h2>
    //   <div className=" flex flex-row justify-evenly my-30">
    //     <div className="">
    //       <img
    //         id="1"
    //         onClick={() => {
    //           id = 1
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Clean}
    //         alt="layout1"
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         id="2"
    //         onClick={() => {
    //           id = 2
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Modern}
    //         alt="layout2"
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         id="3"
    //         onClick={() => {
    //           id = 3
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Funny}
    //         alt="layout4"
    //       />
    //     </div>
    //   </div>
    //   <div className=" flex flex-row justify-evenly py-10">
    //     <div className="">
    //       <img
    //         id="4"
    //         onClick={() => {
    //           id = 4
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Luxury}
    //         alt="layout3"
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         id="5"
    //         onClick={() => {
    //           id = 5
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Handwritten}
    //         alt="layout4"
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         id="6"
    //         onClick={() => {
    //           id = 6
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Geometric}
    //         alt="layout4"
    //       />
    //     </div>
    //   </div>
    //   <div className=" flex flex-row justify-evenly py-10">
    //     <div className="">
    //       <img
    //         id="7"
    //         onClick={() => {
    //           id = 7
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Rounded}
    //         alt="layout3"
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         id="8"
    //         onClick={() => {
    //           id = 8
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Futuristic}
    //         alt="layout4"
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         id="9"
    //         onClick={() => {
    //           id = 9
    //           console.log(id)
    //           dispatch(setFont(id))
    //         }}
    //         className="hover:bg-green-500 p-1 rounded-lg"
    //         src={Funky}
    //         alt="layout4"
    //       />
    //     </div>
    //   </div>
    // </div>
  )
}

export default Fonts
