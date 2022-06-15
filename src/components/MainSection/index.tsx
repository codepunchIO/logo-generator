import { Card } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import { store } from "../../store/store";
import { text } from "stream/consumers";
import path from "path";

import axios from "axios";
import { useEffect, useState } from "react";

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
  const textColor = txColor ? txColor : " black";
  const logoColor = lgColor ? lgColor : " black";
  const fontStyle = font ? font : "Sacramento";
  const selectedStyleId = selectedStyle ? selectedStyle : "1";
  // const text = state.logo.data.brandName

  const url = state.logo.data.icons!;
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
          <Card
            className={`border-2 rounded-lg text-blue-600 h-4/6 font-bold text-6xl flex bg-green-500 items-center justify-center  ${
              selectedStyleId === "2" ? "flex-col" : ""
            }`}
            style={{ backgroundColor }}
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
          </Card>

          <button className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dowlnoad JPG
            </span>
          </button>
          <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dowlnoad PNG
            </span>
          </button>
        </div>

        <div className="w-1/2 ">
          <Card
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
          </Card>
          <button className=" mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dowlnoad JPG
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Dowlnoad PNG
            </span>
          </button>
        </div>
      </div>

      {/* <footer>
        <p>select to layout : </p>
        <button>LOGO</button>
        <button>LOGO+ISOTYPE-V</button>
        <button>LOGO+ISOTYPE-H</button>
        <button>ISOTYPE</button>
      </footer> */}
    </div>
  );
};
export default MainSection;
