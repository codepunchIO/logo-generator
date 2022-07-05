import { useState } from "react";
import { useDispatch } from "react-redux";
import elegantImg from "../../assets/fonts_img/elegantImg.svg";
import futuristicImg from "../../assets/fonts_img/futuristicImg.svg";
import handwrittenImg from "../../assets/fonts_img/handwrittenImg.svg";
import modernImg from "../../assets/fonts_img/modernImg.svg";
import playfulImg from "../../assets/fonts_img/playfulImg.svg";
import slabImg from "../../assets/fonts_img/slabImg.svg";
import FontsStepper from "../../components/FontsStepper/FontsStepper";
import categories from "../../models/categories/categories";
import { setFont, setStyle } from "../../store/slices/logoSlice/logoSlice";
import { store } from "../../store/store";
const model = [
  {
    id: 0,
    title: "Modern",
    font: "Baumans",
    img: modernImg,
  },
  {
    id: 1,
    title: "Elegant",
    font: "Advent Pro",
    img: elegantImg,
  },
  {
    id: 2,
    title: "Slab",
    font: "Quantico",
    img: slabImg,
  },
  {
    id: 3,
    title: "Handwritten",
    font: "Monsieur La Doulaise",
    img: handwrittenImg,
  },
  {
    id: 4,
    title: "Playfull",
    font: "Bubblegum Sans",
    img: playfulImg,
  },
  {
    id: 5,
    title: "Futuristic",
    font: "Sarpanch",
    img: futuristicImg,
  },
];

function NewStyle() {
  const [currentID, setCurrentId] = useState(null);
  const [displayFlag, setDisplay] = useState(true);
  const state = store.getState();
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = parseInt(e.currentTarget.id);
    console.log(id);
    const text = e.currentTarget.innerText;

    // @ts-ignore
    setCurrentId(e.currentTarget.id);
    setDisplay(!displayFlag);
    dispatch(setStyle(text));
    switch (id) {
      case 0:
        dispatch(setFont(categories.modern));

        break;
      case 1:
        dispatch(setFont(categories.light));

        break;
      case 2:
        dispatch(setFont(categories.retro));

        break;
      case 3:
        dispatch(setFont(categories.handWritten));
        break;
      case 4:
        dispatch(setFont(categories.rounded));

        break;
      case 5:
        dispatch(setFont(categories.futuristic));

        break;
    }
    // dispatch(setFont(categories[id]))
  };

  return displayFlag ? (
    <div className="h-screen bg-white py-6 sm:py-8 lg:py-20">
      <div className="w-11/12 md:w-4/6 justify-center mx-auto">
        <div className="flex justify-center items-end gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl w-4/6 text-center font-extrabold p-4 text-gray-900 mb-7">
            Choose font style
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 w-auto mx-auto md:gap-x-6 gap-y-12 ">
          {model.map((card, index) => (
            <div
              // Modern
              id={String(card.id)}
              className={`flex flex-col group border border-gray-400 flex-nowrap hover:shadow-lg text-6xl duration-200 hover:text-4xl my-5 rounded-lg h-72 justify-center cursor-pointer ease-in ease-linear`}
              key={index}
              onClick={(e) => handleClick(e)}
            >
              <span
                style={{ fontFamily: card.font }}
                className="flex flex-col flex-wrap text-center justify-center h-screen transition duration-700 ease-in-out ease-linear"
                // onClick={(e) => handleClick(e)}
                // title={style[index]}
              >
                {card.title}
              </span>

              <div className="h-0 group-hover:h-full ease-linear ease-in-out duration-200 border-t border-gray-400 hover:shadow-md">
                <img
                  className="hidden mx-auto group-hover:flex transition ease-in-out rounded-lg ease-linear h-0 group-hover:h-full w-full ease-linear ease-in-out duration-100 "
                  src={card.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <FontsStepper />
  );
}

export default NewStyle;
