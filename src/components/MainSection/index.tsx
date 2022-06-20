import axios from "axios";
import React, { useEffect, useState } from "react";
// import tShirt from "../../assets/img/Isolated.jpg";
import { store } from "../../store/store";
import ButtonList from "../ButtonList";

interface PropsType {
  inputValue: string;
  bgColor: any;
  txColor: any;
  lgColor: any;
  font: any;
  selectedStyle: any;
}

const MainSection: React.FC<PropsType> = ({
  inputValue,
  bgColor,
  txColor,
  lgColor,
  font,
  selectedStyle,
}) => {
  const state = store.getState();
  const backgroundColor = bgColor ? bgColor : "";
  const textColor = txColor ? txColor : " LightPink";
  const logoColor = lgColor ? lgColor : " CornflowerBlue";
  const fontStyle = font ? font : "Sacramento";
  const selectedStyleId = selectedStyle ? selectedStyle : "1";
  // const text = state.logo.data.brandName

  const icons = state.logo.data.icons!;

  const url = icons[0];

  const [svg, setSVG] = useState("");
  const [svg2, setSVG2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const FetchIcon = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await axios({
        url: url,
        method: "GET",
        responseType: "text",
      });

      setSVG(
        res.data.slice(0, 4) +
          ` style="fill:${logoColor}!important"` +
          res.data.slice(4)
      );
      setSVG2(
        res.data.slice(0, 4) +
          ` style="fill:${backgroundColor}!important"` +
          res.data.slice(4)
      );
      setIsLoading(false);
    } catch {
      setIsError(true);
      setErrorMessage("error");
      setIsLoading(false);
    }
  };
  const htmlDivElementRef =
    React.useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    FetchIcon();
  }, [logoColor, backgroundColor]);

  return (
    <div className="pl-6 h-screen pr-6">
      <h1 className=" flex text-4xl text-center font-bold p-4 text-gray-900 mb-7 font-['Iceland']">
        Your logo project. Make it perfect!{" "}
      </h1>
      <hr className="w-36 mb-4" />

      <div className="flex justify-between h-full mb-4">
        <div className="w-1/2 mr-6">
          <div
            ref={htmlDivElementRef}
            className={`border-2 rounded-lg text-blue-600 h-4/6 font-bold text-6xl flex bg-green-500 items-center justify-center  ${
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
                className={` h-20 w-20 ${
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
          </div>

          <ButtonList
            htmlDivElementRef={htmlDivElementRef}
            backgroundColor={""}
          />
        </div>

        {/* <button className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dowlnoad JPG
            </span>
          </button>
          <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dowlnoad PNG
            </span>
          </button> */}

        <div className="w-1/2">
          <div
            ref={htmlDivElementRef}
            style={{ backgroundColor: logoColor }}
            className={`border-2 rounded-lg  h-4/6 font-bold text-6xl flex  items-center justify-center  ${
              selectedStyleId === "2" ? "flex-col" : ""
            }`}
          >
            <div
              dangerouslySetInnerHTML={{ __html: svg2 }}
              className={` h-20 w-20 ${
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

          {/* <button className=" mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dowlnoad JPG
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dowlnoad PNG
            </span>
          </button> */}
          <ButtonList
            htmlDivElementRef={htmlDivElementRef}
            backgroundColor=""
          />
        </div>
      </div>
      <div className=" pb-40 pr-7 max-w-[1200px] h-[800px] bg-black ml-auto mr-auto bg-[url('./assets/img/white.jpg')] bg-cover flex  bg-top items-center justify-center">
        <div
          className={` max-w-[280px] flex  bg-dark static top-40 left-96 ${
            selectedStyleId === "2" ? "flex-col" : ""
          }`}
        >
          <div
            dangerouslySetInnerHTML={{ __html: svg }}
            className={`min-w-[130px] max-w-[100%] h-[100%] ${
              selectedStyleId === "4" ? "hidden" : ""
            }`}
          />
          <p
            style={{ color: textColor, fontFamily: fontStyle }}
            className={` text-8xl text-center  mt-auto mb-auto ${
              selectedStyleId === "3" ? "hidden" : ""
            }`}
          >
            {inputValue}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MainSection;
