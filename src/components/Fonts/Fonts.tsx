import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";

import { setFont } from "../../store/slices/logoSlice/logoSlice";
import axios from 'axios';
import WebFont from 'webfontloader';
import { StrollerRounded } from "@mui/icons-material";
import { store } from "../../store/store";

const Fonts = () => {
  let Fonts = [];
  const state = store.getState();
  const [familiesNames, setfamiliesNames] = useState<any>();

  //possible queries

  //POPULARITY
  // TRENDING
    useEffect( ()  => {
       axios.get('https://www.googleapis.com/webfonts/v1/webfonts?sort=POPULARITY&key=AIzaSyBKhpUOzLrAVaXXPJoPEKUs3qaeVbghs7o')
         .then(res => {
           console.log(res.data)
           Fonts = res.data.items.slice(0, 21);
           // console.log(Fonts);
      
           setfamiliesNames(Fonts.map((font: any) => font.family))
           console.log("Families   ", familiesNames);
           console.log("1Families effect   ", familiesNames);
           if (familiesNames) {
             WebFont.load({
               google: {
          
                 // families:['Droid Sans', 'Chilanka']
                 families: familiesNames
               }
    
             }
             )
             console.log('loaded');
             console.log("2Families   ", familiesNames);
           }
         });

  },[])




  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const payload = e.currentTarget.title;
    dispatch(setFont(payload));
   
  };
  return (
    <>
      <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7 ">
        Choose font style
      </h1>
      <div className="flex flex-col h-full w-full p-1">
        <div className="flex flex-wrap flex-row justify-evenly w-full p-8 h-full ">
          {/* {fonts.map((font) => (
            <div className="flex flex-row w-1/3 flex-nowrap" >
              <img
                // className="hover:bg-green-500"
                className="hover:bg-green-500 p-1 rounded-3xl  w-full flex justify-center"
                onClick={(e) => handleClick(e)}
                id={String(fonts.indexOf(font) + 1)}
                src={font}
                alt="layout"
              />
            </div>
          ))} */}
          { 
            familiesNames?
              familiesNames.map((family: any) => (
              (state.logo.data.brandName!=='')?(
              <div className="flex flex-row w-1/3 flex-nowrap hover:border-2 hover:border-green-500 h-24  justify-center p-3 "  >
                <span style={{ fontFamily: `${family}` }}
                  className=' flex flex-col text-center justify-center h-auto text-2xl'
                      onClick={(e) => handleClick(e)}
                      title={family}
                >
                  {state.logo.data.brandName}
                </span>
                
               </div>
                ) :
                (
              <div className="flex flex-row w-1/3 flex-nowrap hover:border-2 hover:border-green-500 h-24  justify-center p-3 "  >
                <span style={{ fontFamily: `${family}` }}
                  className=' flex flex-col text-center justify-center h-auto text-2xl'
                  onClick={(e) => handleClick(e)}
                >
                  {family}
                </span>
                
               </div>
                )   
            ))
               : <p>0</p>
          }
        </div>
      </div>
    </>
  );
};

export default Fonts;
