import { useSelector, useDispatch } from 'react-redux'
import { setBrandName } from '../../store/slices/logoSlice/logoSlice'
import { RootState } from '../../store/store'

import { useCallback, useRef } from 'react'

const NameEditor: React.FC = () => {
  //  const handleSubmit=(e:React.FormEventHandler<HTMLFormElement>)=>{

  //   }
  const brand = useSelector((state: RootState) => state.logo.data?.brandName)
  const dispatch = useDispatch()
  const newBrandRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(() => {
    if (newBrandRef.current) {
      console.log(newBrandRef.current.value)
      dispatch(setBrandName(newBrandRef.current.value))
    }
  }, [])

  return (
    <div className="p-1 h-[500px] flex flex-col">
      <div className="flex flex-col justify-self-center w-auto mx-auto h-full items-center justify-center">
        <div className="flex border rounded-lg flex-row justify-center mt-10 ">
          <input
            ref={newBrandRef}
            name="brand"
            placeholder="Brand name..."
            className="cursor-pointer rounded-l-lg bg-gray-50 h-12 md:w-64 px-2"
          />

          <button
            className="md:w-48 px-2 rounded-r-lg h-12 bg-green-500 text-white text-sm hover:scale-105 shadow-lg hover:shadow-2xl ease-in-out duration-200"
            onClick={handleSubmit}>
            Change Brand Name
          </button>
        </div>
      </div>
    </div>
  )
}
export default NameEditor
