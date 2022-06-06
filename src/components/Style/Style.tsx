import { useDispatch } from "react-redux";
import layout1 from "../../assets/img/Style_layouts/layout1.svg";
import layout2 from "../../assets/img/Style_layouts/layout2.svg";
import layout3 from "../../assets/img/Style_layouts/layout3.svg";
import layout4 from "../../assets/img/Style_layouts/layout4.svg";
import { setStyle } from "../../store/slices/logoSlice/logoSlice";

const layouts = [layout1, layout2, layout3, layout4];

const Style = () => {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    dispatch(setStyle(id));
  };

  return (
    // <div className="flex flex-row justify-evenly h-full w-1/2 p-1">
    <>
      <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7 ">
        Choose a layout
      </h1>
      <div className=" flex h-full w-full ml-auto mr-auto p-1 max-w-5xl justify-center">
        <div className="flex flex-wrap flex-row justify-center w-full p-4 ">
          {layouts.map((layout) => (
            <div className="flex flex-row w-1/2 flex-nowrap ">
              <img
                className="hover:bg-green-500 p-1 rounded-2xl  w-full flex justify-center"
                onClick={(e) => handleClick(e)}
                id={String(layouts.indexOf(layout) + 1)}
                src={layout}
                alt="layout"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Style;
