import React, { useEffect,useState,useRef } from "react";
import { useDispatch } from "react-redux";

import { setFont } from "../../store/slices/logoSlice/logoSlice";
import axios from 'axios';
import WebFont from 'webfontloader';
import { StrollerRounded } from "@mui/icons-material";
import { store } from "../../store/store";
import { common } from "@mui/material/colors";
import { colorCards } from '../../models/colorCards';



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
    const res = await axios.get(`http://127.0.0.1:8443/fonts/${selectedQuery}`)
      // .then((res) => {
    // console.log(isLoaded);
        console.log(res.data)
        fonts = res.data.slice(0,21);
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
        <h1 className="text-4xl text-center w-9/12 m-auto justify-center font-extrabold p-4 text-gray-900 mb-7">
          Choose font style
        </h1>

        <h2 className="text-2xl text-center w-9/12 m-auto justify-center font-bold p-4 pt-24 text-gray-900 mb-7 ">
          Sort by:
        </h2>
        
      <div className="flex flex-row w-9/12 m-auto justify-center justify-evenly">
        <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white w-24 px-1 mx-5 h-9 cursor-pointer  shadow-lg hover:shadow-xl  ease-in-out duration-200 justify-center text-center"
          onClick={(e) => handleSelect(e)}
          title='TRENDING'>
          Trending
        </div>
        <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white justify-center text-center  cursor-pointer  shadow-lg hover:shadow-xl  ease-in-out duration-200"
          onClick={(e) => handleSelect(e)}
          title='POPULARITY'>
          Most Popular
        </div>
        <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white justify-center text-center  cursor-pointer  shadow-lg hover:shadow-xl  ease-in-out duration-200"
          onClick={(e) => handleSelect(e)}
          title='STYLE'>
          Styles
        </div>
    </div>
      <div className=" flex flex-wrap p-4 justify-center ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 w-full py-4 md:gap-x-6 gap-y-8 flex flex-wrap flex-row justify-center">
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
              <div  className={`${pallete} flex flex-wrap hover:scale-100 transition h-72 auto duration-500  cursor-pointer ease-in-out mx-2 my-2 py-14 shadow-md hover:shadow-2xl border-2 rounded-2xl flex justify-center`}
              key={familiesNames.indexOf(family)} >
                <span style={{ fontFamily: `${family}` }}
                       className={`${pallete} flex flex-col flex-wrap mx-2 text-center justify-center h-full  text-3xl`}
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
