import { Menu, MenuItem } from '@mui/material'

import { store } from "../../store/store";
import React, { useEffect,useState } from "react";

interface PropsType {
  isOpen: boolean
  anchorEl: any
  handleClose: any
  font: any
   setSelectedFont: any
}


const FontsMenu: React.FC<PropsType> = ({ isOpen, anchorEl, handleClose, setSelectedFont }) => {
  const state = store.getState();
const [fonts,setFonts] = useState<string[]>([])
  useEffect(() => {
    setFonts(state.logo.data.fonts!)
  
   
  }, [])
  
  return (
    <>
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 350,
          },
        }}> */}
        {
          fonts.map((font: any, index) => (
            // <MenuItem   >
              <div
                onClick={
                  (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                    setSelectedFont(e.currentTarget.innerText) 
                  console.log(e.currentTarget.innerText)  
                  }
                }className=' overflow-y-auto flex flex-row flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center'
                key={index} >
                <span style={{ fontFamily: `${font}` }}
                  className='flex flex-col flex-wrap mx-2 text-center justify-center h-full  text-3xl'
                       
                       
                >
                  {font}
                </span>
                
              </div>
            // </MenuItem>
          ))
          }
      
      {/* </Menu> */}
    </>
  )
}

export default FontsMenu
  {/* <MenuItem onClick={handleClose}>
          <div className="">
            <img className="hover:bg-green-500 p-1 rounded-lg" src={Clean} alt="layout1" />
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="">
            <img className="hover:bg-green-500 p-1 rounded-lg" src={Modern} alt="layout2" />
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="">
            <img className="hover:bg-green-500 p-1 rounded-lg" src={Funny} alt="layout4" />
          </div>
        </MenuItem> */}