import { useDispatch } from "react-redux";
import icon1 from "../../assets/img/Icons/1.svg";
import icon2 from "../../assets/img/Icons/2.svg";
import icon3 from "../../assets/img/Icons/3.svg";
import icon4 from "../../assets/img/Icons/4.svg";
import icon5 from "../../assets/img/Icons/5.svg";
import icon6 from "../../assets/img/Icons/6.svg";
import icon7 from "../../assets/img/Icons/7.svg";
import icon8 from "../../assets/img/Icons/8.svg";
import icon9 from "../../assets/img/Icons/9.svg";
import { setIcon } from "../../store/slices/logoSlice/logoSlice";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];

const Icons = () => {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    dispatch(setIcon(id));
  };
  return (
    <>
      <div className=" flex justify-center mb-10 mt-20">
        <input
          placeholder="Search icon here..."
          type="search"
          className="  w-1/4 h-14 cursor-default border-none overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        />
      </div>

      <div className="flex  h-full w-full p-1 justify-center">
        <div className="flex flex-wrap flex-row justify-evenly w-full p-4  max-w-4xl">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-row w-1/3 flex-nowrap">
              <img
                className="hover:bg-green-500 p-1 rounded-2xl  w-full flex justify-center"
                onClick={(e) => handleClick(e)}
                id={String(icons.indexOf(icon) + 1)}
                src={icon}
                alt="layout"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Icons;
