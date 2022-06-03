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
    <div className="p-1 h-full flex flex-col">
      <div className="flex flex-col justify-self-center  w-auto mx-auto h-full items-center justify-center">
        <div className="flex flex-row justify-center mt-10 ">
          <input
            ref={newBrandRef}
            name="brand"
            placeholder="Brand name..."
            className="border border-black-100 h-10 w-64"
          />

          <button
            className="w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white text-sm"
            onClick={handleSubmit}>
            Change Brand Name
          </button>
        </div>
      </div>
    </div>
  )
}
export default NameEditor
