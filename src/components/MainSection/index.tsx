import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectColor, selectStyle } from "../../store/slices/logoSlice/logoSlice";
// import tShirt from "../../assets/img/Isolated.jpg";
import { store } from "../../store/store";
import ButtonList from "../ButtonList";
import "./style.css";
interface PropsType {
  inputValue: string;
  bgColor: any;
  txColor: any;
  lgColor: any;
  font: any;
  selectedStyle: any;
  selectedIcon: any;
}

const MainSection: React.FC<PropsType> = ({
  inputValue,
  bgColor,
  txColor,
  lgColor,
  font,
  selectedStyle,
  selectedIcon,
}) => {
  const fonts = useSelector(selectStyle);
  const color = useSelector(selectColor);
  const state = store.getState();
  const backgroundColor = bgColor ? bgColor :  color;
  // const backgroundColor = bgColor ? bgColor : color;
  const textColor = txColor ? txColor : " Black";
  const logoColor = lgColor ? lgColor : "Black";
  const fontStyle = font ? font : fonts;
  const selectedStyleId = selectedStyle ? selectedStyle : "1";
  // const text = state.logo.data.brandName
console.log('backgroundColor :', color );
  const icons = state.logo.data.icons!;

  const [svg, setSVG] = useState(icons[0].icon_svg);
  const [svg2, setSVG2] = useState("");

  useEffect(() => {
    let elements = document.querySelectorAll("path");
    console.log(elements);

    //  @ts-ignore
    if (elements) {
      elements.forEach((element) =>
        element.style.setProperty("--lgColor", logoColor)
      );
    }
  }, [logoColor]);

  const htmlDivElementRef =
    React.useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setSVG(selectedIcon);
  }, [selectedIcon]);

  // @ts-ignore
  return (
    <div className="w-11/12 h-screen float-right">
      <h1 className="text-4xl text-center font-bold p-4 text-gray-900 mb-5 mt-7 font-['Iceland'] mb-16">
        Your logo project. Make it perfect!{" "}
      </h1>

      <div className="flex h-5/6 flex-row mb-4 justify-end">
        <div
          ref={htmlDivElementRef}
          className="w-full flex flex-col flex-nowrap content-center justify-center mr-[10px]"
        >
          <div
            className={`flex flex-row rounded-lg text-blue-600 h-full w-full font-bold text-6xl  items-center justify-center ${
              selectedStyleId === "2" ? "flex-col" : ""
            }`}
            // style={{ backgroundColor }}
            style={{ background:`${backgroundColor}` }}
          >
        <div ref={htmlDivElementRef} className="w-full flex flex-row flex-wrap xl:flex-nowrap h-full content-center justify-end sm:justify-center py-8">
          <div
            className={`flex flex-col rounded-lg text-blue-600 w-full h-full font-bold text-6xl bg-green-500 items-center justify-center border ${
              selectedStyleId === "2" ? "flex-col" : ""
            }`}
            style={{ backgroundColor }}
            >
            <div
              className={`items-center justify-center flex flex-start w-full text-center ${
                selectedStyleId === "2" ? "flex-col" : ""
              }`}
              >
              <div
                dangerouslySetInnerHTML={{ __html: svg }}
                className={`logo w-4/12 my-5${
                  selectedStyleId === "4" ? "hidden" : ""
                }`}
              />
              <div className="flex items-center text-center float:right md:justify-start md:pl-10 pl-5 w-5/12">
              <p
                style={{ color: textColor, fontFamily: `${fontStyle}` }}
                className={`logo w-full h-full text-center text-9xl leading-[125px] my-5 ${selectedStyleId === "3" ? "hidden" : ""}`}
              >
                {inputValue}
              </p>
              </div>
            </div>
          </div>

          {/* <div
            className={`flex flex-col rounded-lg my-8 mx-2 xl:mx-auto text-blue-600 h-3/6 xl:h-4/6 xl:w-4/12 w-10/12 md:w-8/12 xl:float-left xl:mx-10 font-bold text-6xl bg-green-500 items-center justify-center ${
              selectedStyleId === "2" ? "flex-col" : ""
            }`}
            style={{ backgroundColor }}
          >
            <div
              className={`items-center justify-center flex ${
                selectedStyleId === "2" ? "flex-col" : ""
              }`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: svg }}
                className={`logo xl:h-20 xl:w-20 w-16 h-16 mx-4 mb-4 xl:mx-8 xl-mb-8 ${
                  selectedStyleId === "4" ? "hidden" : ""
                }`}
              />

             
              <p
                style={{ color: textColor, fontFamily: fontStyle }}
                className={`${selectedStyleId === "3" ? "hidden" : ""}`}
              >
                {inputValue}
              </p>
            </div>
            
          </div> */}
        </div>
      </div>
      <div className="flex flex-row justify-around py-4">
        <div className="flex flex-row">
          <ButtonList
            htmlDivElementRef={htmlDivElementRef}
            backgroundColor={""}
          />
        </div>
        {/* <div className="flex flex-row">
          <ButtonList
            htmlDivElementRef={htmlDivElementRef}
            backgroundColor={""}
            />
        </div> */}
      </div>
    </div>
    </div>
    </div>
  );
};
export default MainSection;
