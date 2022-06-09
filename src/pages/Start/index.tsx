import { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Footer from '../../components/Footer'
import SignInModal from '../../components/SignIn'
import SignUpModal from '../../components/SignUp'
import { setBrandName } from '../../store/slices/logoSlice/logoSlice'
import { RootState } from '../../store/store'
import menuImg from '../../assets/img/menu.svg'

const StartPage: React.FC = () => {
  //MODALS
  const [visibleModal, setVisibleModal] = useState<string | null>()
  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget.textContent === 'Sign Up')
    setVisibleModal(e.currentTarget.textContent)
  }
  const handleClose = (): void => {
    setVisibleModal(undefined)
  }
  //MODALS

  // const brand = useSelector((state: RootState) => state.logo.data?.brandName)
  const dispatch = useDispatch()
  const newBrandRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(() => {
    console.log('hello')
    if (newBrandRef.current) {
      console.log(newBrandRef.current.value)
      dispatch(setBrandName(newBrandRef.current.value))
    }
  }, [])

  return (
    <div className="h-full flex flex-col">
      <div className="">
        <div className="flex flex-row justify-between items-center py-4 px-24 top-0 left-0  bg-white">
          <div className="menu">
            <img src={menuImg} alt="logo" className='w-12 h-12 my-auto'/>
          </div>
          <div className="flex flex-row justify-evenly ">
            <button className="w-24 px-1 mx-5 h-9 shadow-lg rounded hover:scale-105 hover:shadow-lg bg-gray-50 ease-in-out duration-200 " onClick={(e) => handleOpenModal(e)}>
              Log in
            </button>
            <button
              className="w-24 px-1 mx-5 h-9  bg-green-500 rounded text-white hover:scale-105 shadow-lg hover:shadow-xl  ease-in-out duration-200"
              onClick={(e) => handleOpenModal(e)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* <Header /> */}
      <div className="flex flex-col w-auto mx-auto h-full items-center justify-center">
        <p className="text-3xl  text-center font-extrabold mb-4 ">Create logo in 3 minutes</p>
        <p className="text-1 text-center text-gray-500 font-semibold">
          Flex is a Small SaaS Business. Flex isn’t a traditional company.{' '}
        </p>
        <div className="flex flex-row bg-grey-400 shadow-lg justify-center mt-10  ">
          <input
            ref={newBrandRef}
            name="brand"
            placeholder="Brand name..."
            className="shadow-md cursor-pointer rounded-l-lg bg-gray-50 h-12 w-64 px-2"
          />
          <NavLink to={'/generator'}>
            <button
              className="w-48 rounded-r-lg items-center justify-center text-lg text-white font-medium text-whit shadow-md h-12 bg-green-500 py-2 px-8 hover:scale-105 hover:shadow-xl ease-in-out duration-200 leading-6 tracking-wider ease-linear"
              onClick={handleSubmit}>
              Get Started!
            </button>
          </NavLink>
        </div>
      </div>
      <SignInModal
        isVisible={visibleModal === 'Log in'}
        handleClose={handleClose}
        title={'Sign In'}
      />
      <SignUpModal
        isVisible={visibleModal === 'Sign Up'}
        handleClose={handleClose}
        title={'Sign Up'}
      />
      <Footer />
    </div>
  )
}
export default StartPage
