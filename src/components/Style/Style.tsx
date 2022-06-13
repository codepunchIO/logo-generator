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
    <><div className="w-9/12 m-auto justify-center">
      <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7">
        Choose a layout
      </h1>
      <div className=" flex flex-wrap p-4 justify-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 w-auto mx-auto md:gap-x-6 gap-y-8 flex flex-wrap flex-row justify-center ">
          {layouts.map((layout) => (
            <div className="flex flex-row w-auto justify-center flex-nowrap ">
              <img
                className="hover:scale-100 transition w-auto h-72 duration-500 ease-in-out mx-2 my-2 shadow-md hover:shadow-2xl border-2 rounded-2xl flex justify-center cursor-pointer"
                onClick={(e) => handleClick(e)}
                id={String(layouts.indexOf(layout) + 1)}
                src={layout}
                alt="layout"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Style;
