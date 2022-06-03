import { useDispatch } from 'react-redux'
import layout1 from '../../assets/img/Style_layouts/layout1.svg'
import layout2 from '../../assets/img/Style_layouts/layout2.svg'
import layout3 from '../../assets/img/Style_layouts/layout3.svg'
import layout4 from '../../assets/img/Style_layouts/layout4.svg'
import { setStyle } from '../../store/slices/logoSlice/logoSlice'

const Style = () => {
  const dispatch = useDispatch()
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const id = e.currentTarget.id
    dispatch(setStyle(id))
  }
  return (
    <div className="flex flex-col h-full w-full p-1">
      <h2 className="text-3xl text-center font-bold p-4"> Choose a layout</h2>
      <div className=" flex flex-row justify-evenly my-30">
        <div className="">
          <img
            className="hover:bg-green-500"
            onClick={(e) => handleClick(e)}
            id="1"
            src={layout1}
            alt="layout1"
          />
        </div>
        <div className="">
          <img
            className="hover:bg-green-500"
            id="2"
            src={layout2}
            alt="layout2"
            onClick={(e) => handleClick(e)}
          />
        </div>
      </div>
      <div className=" flex flex-row justify-evenly py-10">
        <div className="">
          <img
            className="hover:bg-green-500"
            id="3"
            src={layout3}
            alt="layout3"
            onClick={(e) => handleClick(e)}
          />
        </div>
        <div className="">
          <img
            className="hover:bg-green-500"
            id="4"
            src={layout4}
            alt="layout4"
            onClick={(e) => handleClick(e)}
          />
        </div>
      </div>
    </div>
  )
}

export default Style
