import icon1 from '../../assets/img/Icons/1.svg'
import icon2 from '../../assets/img/Icons/2.svg'
import icon3 from '../../assets/img/Icons/3.svg'
import icon4 from '../../assets/img/Icons/4.svg'
import icon5 from '../../assets/img/Icons/5.svg'
import icon6 from '../../assets/img/Icons/6.svg'
import icon7 from '../../assets/img/Icons/7.svg'
import icon8 from '../../assets/img/Icons/8.svg'
import icon9 from '../../assets/img/Icons/9.svg'
import { useDispatch } from 'react-redux'
import {  setIcon } from '../../store/slices/logoSlice/logoSlice'


const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9]





const Icons = () => {
   const dispatch = useDispatch()
   const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const id = e.currentTarget.id
    dispatch(setIcon(id))
  }
  return (

        <div className="flex flex-col h-full w-full p-1">
  <div className="flex flex-wrap flex-row justify-evenly w-full p-4 ">
      {icons.map((icon) => 
        <div className="flex flex-row w-1/3 flex-nowrap">
          <img
            // className="hover:bg-green-500"
            className="hover:bg-green-500 p-1 rounded-lg  w-full flex justify-center"
            onClick={(e) => handleClick(e)}
            id={String(icons.indexOf(icon)+1)}
            src={icon}
            alt="layout"
          />
        </div>
      )}
      </div>
      </div>
    
  )
}

export default Icons
