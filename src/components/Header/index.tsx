import { useState } from 'react'
import menuImg from '../../assets/img/menu.svg'

const Header: React.FC = () => {
  //MODALS
  const [visibleModal, setVisibleModal] = useState<string | null>()
  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget.textContent)
    setVisibleModal(e.currentTarget.textContent)
  }
  //MODALS
  return (
    <div className="p-4">
      <div className="flex flex-row justify-between top-0 left-0 h-24 bg-white mt-3 ">
        <div className="menu">
          <img src={menuImg} alt="logo" />
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="w-24 px-1 mx-5 h-9 " onClick={(e) => handleOpenModal(e)}>
            Log in
          </button>
          <button
            className="w-24 px-1 mx-5 h-9  bg-green-500 rounded text-white"
            onClick={(e) => handleOpenModal(e)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
export default Header
