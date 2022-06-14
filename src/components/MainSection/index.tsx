import { Card } from "@mui/material";
import { useState } from "react";
import { store } from "../../store/store";
import "./index.css";

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
  const backgroundColor = bgColor ? bgColor : "cyan";
  const textColor = txColor ? txColor : " black";
  const logoColor = lgColor ? lgColor : " black";
  const fontStyle = font ? font : "Sacramento";
  const selectedStyleId = selectedStyle ? selectedStyle : "1";

  const url = state.logo.data.icons!;
  const [svg, setSVG] = useState("");
  axios({
    url: url,
    method: "GET",
    responseType: "text",
  }).then((response: any) => {
    setSVG(
      response.data.slice(0, 4) +
        ` style="fill:${logoColor}!important"` +
        response.data.slice(4)
    );
  });
  console.log("responssss", svg);

  return (
    <div className="pl-6 pr-6">
      <h1 className=" mb-4">Logo-generator</h1>
      <hr className="w-36 mb-4" />
      <p className=" mb-10">Easy, fast and even fun! </p>

      <div className="flex justify-between h-5/6mb-4">
        <div className="w-1/2 mr-6">
          <Card
            className={`border-2 rounded-lg text-blue-600 h-72 font-bold text-6xl flex  items-center justify-center  ${
              selectedStyleId === "2" ? "flex-col" : ""
            }`}
            style={{ backgroundColor }}
          >
            <div
              style={{ fill: logoColor }}
              dangerouslySetInnerHTML={{ __html: svg }}
              className={` object ${selectedStyleId === "3" ? "hidden" : ""}`}
            />
            <p style={{ color: textColor, fontFamily: fontStyle }}>
              {inputValue}
            </p>
          </Card>

          <button className=" mr-4 ml-4">Download JPG</button>
          <button>Download PNG</button>
        </div>

        <div className="w-1/2 ">
          <Card
            className={`border-2 rounded-lg  h-72 font-bold text-6xl flex  items-center justify-center  ${
              selectedStyleId === "2" ? "flex-col" : ""
            }`}
          >
            <div
              style={{ fill: logoColor }}
              dangerouslySetInnerHTML={{ __html: svg }}
              className={` object ${selectedStyleId === "3" ? "hidden" : ""}`}
            />

            <p
              style={{ color: textColor, fontFamily: fontStyle }}
              className={`${selectedStyleId === "3" ? "hidden" : ""}`}
            >
              {inputValue}
            </p>
          </Card>
          <button className=" mr-4 ml-4">Download JPG</button>
          <button>Download PNG</button>
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
