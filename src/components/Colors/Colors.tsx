import React from 'react'
import Bold from '../../assets/img/Colors_palletes/Bold.svg'
import Cheerful from '../../assets/img/Colors_palletes/Cheerful.svg'
import Friendly from '../../assets/img/Colors_palletes/Friendly.svg'
import Intense from '../../assets/img/Colors_palletes/Intense.svg'
import Natural from '../../assets/img/Colors_palletes/Natural.svg'
import Somber from '../../assets/img/Colors_palletes/Somber.svg'
import { useDispatch } from 'react-redux'
import { setColor } from '../../store/slices/logoSlice/logoSlice'
 
const Colors = () => {
let id = null;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-full w-full p-1">
      <h2 className="text-3xl text-center font-bold p-4"> Choose a layout</h2>
      <div className=" flex flex-row justify-evenly my-30">
        <div className="">
          <img 
          className="hover:bg-green-500 p-1 rounded-lg"
          id='1'
           src={Friendly}
            alt="layout1"
           onClick={() => {
              id = 1
              dispatch(setColor(id))
              console.log(id)}}/>
        </div>
        <div className="">
          <img 
          className="hover:bg-green-500 p-1 rounded-lg"
          id='2'
           src={Natural}
            alt="layout2"
           onClick={() => {
              id = 2
              dispatch(setColor(id))
              console.log(id)}}/>
            </div>
        <div className="">
          <img 
          className="hover:bg-green-500 p-1 rounded-lg"
          id='3'
           src={Bold} 
            alt="layout4"
           onClick={() => {
              id = 3
              dispatch(setColor(id))
              console.log(id)}}/>
        </div>
      </div>
      <div className=" flex flex-row justify-evenly py-10">
        <div className="">
          <img 
          className="hover:bg-green-500 p-1 rounded-lg"
          id='4'
           src={Intense}
            alt="layout3"
          onClick={() => {
              id = 4
              dispatch(setColor(id))
              console.log(id)}}/>
        </div>
        <div className="">
          <img 
          className="hover:bg-green-500 p-1 rounded-lg"
          id='5'
           src={Somber}
            alt="layout4"
          onClick={() => {
              id = 5
              dispatch(setColor(id))
              console.log(id)}}/>
        </div>
         <div className="">
          <img 
          className="hover:bg-green-500 p-1 rounded-lg"
          id='6'
           src={Cheerful}
            alt="layout4"
          onClick={() => {
              id = 6
              dispatch(setColor(id))
              console.log(id)}}/>
        </div>
      </div>
    </div>
  )
}

export default Colors