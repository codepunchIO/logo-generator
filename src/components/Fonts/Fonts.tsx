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
    
  )
}

export default Fonts
