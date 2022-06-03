import { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Footer from '../../components/Footer'
import SignInModal from '../../components/SignIn'
import SignUpModal from '../../components/SignUp'
import { updateBrand } from '../../store/slices/brandSlice/brandSlice'
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

  const brand = useSelector((state: RootState) => state.brand.value)
  const dispatch = useDispatch()
  const newBrandRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(() => {
    console.log('hello')
    if (newBrandRef.current) {
      console.log(newBrandRef.current.value)
      dispatch(updateBrand(newBrandRef.current.value))
    }
  }, [])

  return (
    <div className="p-1 h-full flex flex-col">
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
      {/* <Header /> */}
      <div className="flex flex-col justify-self-center  w-auto mx-auto h-full items-center justify-center">
        <p className="text-3xl  text-center font-bold mb-4 ">Create logo in 3 minutes</p>
        <p className="text-l text-center font-semibold">
          Flex is a Small SaaS Business. Flex isn’t a traditional company.{' '}
        </p>
        <div className="flex flex-row justify-center mt-10 ">
          <input
            ref={newBrandRef}
            name="brand"
            placeholder="Brand name..."
            className="border border-black-100 h-10 w-64 px-2"
          />
          <NavLink to={'/generator'}>
            <button
              className="w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white"
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
