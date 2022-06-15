import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import layout1 from "../../assets/img/Style_layouts/layout1.svg";
import layout2 from "../../assets/img/Style_layouts/layout2.svg";
import layout3 from "../../assets/img/Style_layouts/layout3.svg";
import layout4 from "../../assets/img/Style_layouts/layout4.svg";
import { setStyle } from "../../store/slices/logoSlice/logoSlice";

const layouts = [
  { id: "1", screen: layout1 },
  { id: "2", screen: layout2 },
  { id: "3", screen: layout3 },
  { id: "4", screen: layout4 },
];

const Style = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState("");
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setCurrentId(e.currentTarget.id);
  };

  useEffect(() => {
    dispatch(setStyle(currentId));
    console.log(currentId);
  }, [currentId]);

  return (
    <>
      <div className="max-w-7xl m-auto justify-center">
        <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7">
          Choose a layout
        </h1>
        <div className=" flex flex-wrap p-4 justify-center ">
          <div className="flex flex-wrap flex-row justify-between  p-2 gap-y-7 max-w-4xl ">
            {layouts.map(({ screen, id }) => (
              <ul key={id}>
                <li
                  onClick={(e) => handleClick(e)}
                  id={id}
                  className={`cursor-pointer p-1 my-2 mx-2 hover:scale-100  shadow-md ease-in-out transition duration-500 hover:shadow-2xl 
                   rounded-lg flex-wrap w-96 h-48 flex justify-center border-2   ${
                     currentId === id ? "bg-green-500" : "bg-white-500"
                   } `}
                >
                  <img src={screen} alt="layout" />

                </li>
                <div className=" bg-green-300 h-1 " ></div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Style;
