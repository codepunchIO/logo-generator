import React, { useEffect,useState,useRef } from "react";
import { useDispatch } from "react-redux";

import { setFont } from "../../store/slices/logoSlice/logoSlice";
import axios from 'axios';
import WebFont from 'webfontloader';
import { StrollerRounded } from "@mui/icons-material";
import { store } from "../../store/store";
import { common } from "@mui/material/colors";



const Fonts = () => {

  const state = store.getState();
  const [familiesNames, setfamiliesNames] = useState<any>(null);
  const [selectedQuery, setQuery] = useState<string>('TRENDING');
//  let isLoaded = false;
  
  //possible queries
  const fetchData = async () => {
      let fonts = [];
    const res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?sort=${selectedQuery}&key=AIzaSyBKhpUOzLrAVaXXPJoPEKUs3qaeVbghs7o`)
      // .then((res) => {
    // console.log(isLoaded);
        console.log(res.data)
        fonts = res.data.items.slice(0,21);
        console.log(fonts);
    
      setfamiliesNames(fonts.map((font: any) => font.family))
      if (familiesNames !== null) {
        console.log("Families   ", familiesNames);
        console.log("1Families effect   ", familiesNames);
        // isLoaded = !isLoaded;
        // console.log(isLoaded);
        console.log('familynamessss', familiesNames)
     
        WebFont.load({
          google: {
          
            // families:['Droid Sans', 'Chilanka']
            families: familiesNames
          }
    
        }
        )
        console.log('loaded');
        console.log("2Families   ", familiesNames);
        //  console.log(isLoaded);
      
     
    }
      }
        // },
  //POPULARITY
  // TRENDING
  useEffect(() => {
    
    fetchData().catch(console.error);
    

         },[selectedQuery ]);

 




  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const payload = e.currentTarget.title;
    dispatch(setFont(payload));
   
  };
  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setQuery(e.currentTarget.title)
    console.log(selectedQuery);
  }
  return (
    <>
      <h1 className="text-4xl text-center font-extrabold p-4 pt-24 text-gray-900 mb-7 ">
        Choose font style
      </h1>
      <h2 className="text-2xl text-center font-bold p-4 pt-24 text-gray-900 mb-7 ">
        Sort by:
      </h2>

      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white  justify-center text-center"
          onClick={(e) => handleSelect(e)}
          title='TRENDING'
        >
          Trending
        </div>
          <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white justify-center text-center"
          onClick={(e) => handleSelect(e)}
          title='POPULARITY'
          >
          Most Popular
        </div>
          <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white justify-center text-center"
          onClick={(e) => handleSelect(e)}
          title='STYLE'
          >
          Styles
        </div>

    </div>
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
                  <div className="flex flex-row w-1/3 flex-nowrap hover:border-2 hover:border-green-500 h-24  justify-center p-3 "
                  key={familiesNames.indexOf(family)}>
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
              <div className="flex flex-row w-1/3 flex-nowrap hover:border-2 hover:border-green-500 h-24  justify-center p-3 " 
              key={familiesNames.indexOf(family)} >
                <span style={{ fontFamily: `${family}` }}
                  className=' flex flex-col text-center justify-center h-auto text-2xl'
                        onClick={(e) => handleClick(e)}
                        title={family}
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
