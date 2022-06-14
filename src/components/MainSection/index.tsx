import { Card } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import {store} from '../../store/store'
import { text } from "stream/consumers";
import path from "path";

import axios from 'axios'
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
  const backgroundColor = bgColor ? bgColor : "cyan";
  const textColor = txColor ? txColor : " black";
  const logoColor = lgColor ? lgColor : " black";
  const fontStyle = font ? font : "Sacramento";
  const selectedStyleId = selectedStyle ? selectedStyle : "1";

  const url = state.logo.data.icons!;
  const [svg,setSVG] =useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const FetchIcon = async () => {
    setIsError(false)
    setIsLoading(true)
    try {
      const res = await axios({
        url: url,
        method: 'GET',
        responseType: 'text',
      })
   
      setSVG(res.data.slice(0, 4) + ` style="fill:${logoColor}!important"` + res.data.slice(4));
      setIsLoading(false)
     
    }
    
 
    catch {
      setIsError(true)
      setErrorMessage('error')
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    FetchIcon();
  
    
  }, [logoColor])
  

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
              className={` h-20 w-20 ${selectedStyleId === "4" ? "hidden" : ""}`}
            />
            <p style={{ color: textColor, fontFamily: fontStyle }}
            className={`${selectedStyleId === "3" ? "hidden" : ""}`}>
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
              className={` h-20 w-20 ${selectedStyleId === "4" ? "hidden" : ""}`}
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
