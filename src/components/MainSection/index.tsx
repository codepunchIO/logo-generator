import { Card } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import {store} from '../../store/store'
import { text } from "stream/consumers";
import path from "path";
import './index.css'
import axios from 'axios'
import { useState } from "react";
import { Markup } from 'interweave';
interface PropsType {
  inputValue: string;
  bgColor: any;
  txColor: any;
  lgColor: any;
  font: any;


}

const MainSection: React.FC<PropsType> = ({
  inputValue,
  bgColor,
  txColor,
  lgColor,
  font,
}) => {
  const state = store.getState();
  const backgroundColor = bgColor ? bgColor : "cyan";
  const textColor = txColor ? txColor : " black";
  const logoColor = lgColor ? lgColor : " black";
  const fontStyle = font ? font : "Sacramento";
  const url = state.logo.data.icons!;
  const [svg,setSVG] =useState('')
axios({
  url: url,
  method: 'GET',
  responseType: 'text',
  }).then((response: any) => {
   
    setSVG(response.data.slice(0,4)+` style="fill:${logoColor}!important"`+response.data.slice(4));
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
            className="border-2 rounded-lg text-blue-600 h-72 font-bold text-6xl flex  items-center justify-center"
            style={{ backgroundColor }}
          >
            {/* <CameraIcon style={{ fontSize: "80px", color: logoColor }} /> */}
            {/* <img src={state.logo.data.icons} className=' w-20 h-20' /> */}
            <div className="object" style={{fill:logoColor}}
          
             dangerouslySetInnerHTML={{__html: svg}}

                          />
            <p style={{ color: textColor, fontFamily: fontStyle }}>
              {inputValue}
            </p>
          </Card>
          <button className=" mr-4 ml-4">Download JPG</button>
          <button>Download PNG</button>
        </div>

        <div className="w-1/2 ">
          <Card className="border-2 rounded-lg text-neutral-50 h-72 text-6xl font-bold flex items-center justify-center">
            {/* <CameraIcon style={{ fontSize: "80px", color: logoColor }} /> */}
            <img src={state.logo.data.icons}  className=' w-20 h-20 fill-blue-500' />
            <p style={{ color: textColor, fontFamily: fontStyle }}>{inputValue}</p>
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
