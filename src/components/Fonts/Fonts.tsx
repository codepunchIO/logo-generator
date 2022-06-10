import React, { useEffect,useState,useRef } from "react";
import { useDispatch } from "react-redux";

import { setFont } from "../../store/slices/logoSlice/logoSlice";
import axios from 'axios';
import WebFont from 'webfontloader';
import { StrollerRounded } from "@mui/icons-material";
import { store } from "../../store/store";
import { common } from "@mui/material/colors";


const colorCards = [
  {
    title: "Friendly, Loyal & Peacefull",
    colors: ["bg-blue-400", "bg-blue-300", "bg-blue-200", "bg-blue-100"],
  },
  {
    title: "Natural, Happy & Calm",
    colors: ["bg-green-400", "bg-green-300", "bg-green-200", "bg-green-100"],
  },
  {
    title: "Bold, Engaging & Vibrant",
    colors: [
      "bg-purple-400",
      "bg-purple-300",
      "bg-purple-200",
      "bg-purple-100",
    ],
  },
  {
    title: "Intense, Warm & Romantic",
    colors: ["bg-red-400", "bg-red-300", "bg-red-200", "bg-red-100"],
  },
  {
    title: "Somber, Earthy,Solid & Natural",
    colors: [
      "bg-orange-400",
      "bg-orange-300",
      "bg-orange-200",
      "bg-orange-100",
    ],
  },
  {
    title: "Cheerful, Vibrant & Happy",
    colors: ["bg-amber-400", "bg-amber-300", "bg-amber-200", "bg-amber-100"],
  },
];

const Fonts = () => {

  const state = store.getState();
  const [familiesNames, setfamiliesNames] = useState<any>(null);
  const [selectedQuery, setQuery] = useState<string>('TRENDING');

  const [pallete,setPallete] = useState<string>('bg-white-500')
 
  useEffect(()=>{
    if (state.logo.data.colors ) {
      const pallete_id = state.logo.data.colors! - 1;
      setPallete(colorCards[pallete_id].colors[2])
    }
    else {
      setPallete('bg-white-500')
    }
    },[])
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

  <><div className="bg-white py-6 sm:py-8 lg:py-20">
      <div className="w-9/12 justify-center mx-auto">
        <h1 className="text-4xl text-center font-extrabold p-4 text-gray-900 mb-7">
          Choose font style
        </h1>

        <h2 className="text-2xl text-center font-bold p-4 pt-24 text-gray-900 mb-7 ">
          Sort by:
        </h2>
        
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white  justify-center text-center"
          onClick={(e) => handleSelect(e)}
          title='TRENDING'>
          Trending
        </div>
        <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white justify-center text-center"
          onClick={(e) => handleSelect(e)}
          title='POPULARITY'>
          Most Popular
        </div>
        <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white justify-center text-center"
          onClick={(e) => handleSelect(e)}
          title='STYLE'>
          Styles
        </div>
    </div>
      <div className="flex flex-col h-full w-full p-1">
        <div className="flex flex-wrap flex-row justify-evenly p-4 h-full ">
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
                  <div className=' flex flex-row flex-nowrap rounded h-24 justify-center p-3'
                  key={familiesNames.indexOf(family)}>
                <span style={{ fontFamily: `${family}` }}
                  className={`${pallete} flex flex-col text-center justify-center h-auto text-xl px-6 py-2`}
                      onClick={(e) => handleClick(e)}
                      title={family}
                >
                  {state.logo.data.brandName}
                </span>
                
               </div>
                ) :
                (
              <div className=' flex flex-row flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center '
              key={familiesNames.indexOf(family)} >
                <span style={{ fontFamily: `${family}` }}
                       className={`${pallete} flex flex-col w-auto  text-center min-w-full border-2 justify-center h-auto rounded-lg text-xl px-6 py-2`}
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
      </div>
      </div>
    </>
  );
};

export default Fonts;
