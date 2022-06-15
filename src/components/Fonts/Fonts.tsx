import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";

import { setFont } from "../../store/slices/logoSlice/logoSlice";

import { store } from "../../store/store";

import { colorCards } from '../../models/colorCards';
import { modern,futuristic,handWritten,retro,rounded,light }  from '../../models/categories/categories';
 


const Fonts = () => {

  const state = store.getState();
  // const [familiesNames, setfamiliesNames] = useState<any>(null);
  // const [selectedQuery, setQuery] = useState<string>('TRENDING');
  const [style,setStyle] = useState<string[]>(modern)
  const [pallete, setPallete] = useState<string>('bg-white-500')
  const [fontLoaded,setLoading] = useState(false)
  
  const fontCategories = [modern, futuristic, handWritten, retro, rounded, light];
  const fontCategoriesNames = ['Modern', 'Futuristic', 'Hand Written', 'Retro', 'Rounded', 'Light'];
  useEffect(()=>{
    if (state.logo.data.colors ) {
      const pallete_id = state.logo.data.colors! - 1;
      setPallete(colorCards[pallete_id].colors[2])
    }
    else {
      setPallete('bg-white-500')
    }
    },[])


 




  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const payload = style;
    dispatch(setFont(payload));
   
  };
  // const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   setStyle(e.currentTarget.title)
  //   console.log(selectedQuery);
  // }
  return (

    <>
      <div className="bg-white py-6 sm:py-8 lg:py-20">
        <div className="w-9/12 justify-center mx-auto">
        <h1 className="text-4xl text-center font-extrabold p-4 text-gray-900 mb-7">
          Choose font style
        </h1>

        
      <div className="flex flex-row justify-evenly">
        
            {
              fontCategories.map((style,index) => (
                
                   <div className="flex flex-col w-32 px-1 mx-5 h-10 bg-green-500 rounded text-white  justify-center text-center"
                     onClick={  (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        setStyle(style)
                      console.log(style);
                       setLoading(true);
                       
                     }}
                      >
                  {fontCategoriesNames[index]}
                  </div>
          
                )
              
             )
            }
            
          
    </div>
      <div className="flex flex-col h-full w-full p-1 ">
        <div className="flex flex-wrap flex-row justify-evenly p-4 h-full ">

         
 { 
            fontLoaded?
              style.map((family: any,index) => (

                  (
                    <div className={`${pallete} flex flex-row flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center`}
              key={style.indexOf(family)} >
                <span style={{ fontFamily: `${family}` }}
                       className='flex flex-col flex-wrap mx-2 text-center justify-center h-full  text-3xl'
                        onClick={(e) => handleClick(e)}
                        title={style[index]}
                >
                  {family}
                </span>

               </div>
                )
            )) //spinner
               : <div className='flex mt-[200px] '><svg role="status" className="inline w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>  
        </div>  }
            
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Fonts;

// {
//             familiesNames?
//               familiesNames.map((family: any) => (
//               (state.logo.data.brandName!=='')?(
//                   <div className=' flex flex-row flex-nowrap rounded h-24 justify-center p-3'
//                   key={familiesNames.indexOf(family)}>
//                 <span style={{ fontFamily: `${family}` }}
//                   className={`${pallete} flex flex-col text-center justify-center h-auto text-xl px-6 py-2`}
//                       onClick={(e) => handleClick(e)}
//                       title={family}
//                 >
//                   {state.logo.data.brandName}
//                 </span>
                
//                </div>
//                 ) :
//                 (
//               <div className=' flex flex-row flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center '
//               key={familiesNames.indexOf(family)} >
//                 <span style={{ fontFamily: `${family}` }}
//                        className={`${pallete} flex flex-col w-auto  text-center min-w-full border-2 justify-center h-auto rounded-lg text-xl px-6 py-2`}
//                         onClick={(e) => handleClick(e)}
//                         title={family}
//                 >
//                   {family}
//                 </span>
                
//                </div>
//                 )
//             ))
//                : <p>0</p>
//           }




//  let isLoaded = false;
  
  
  //possible queries
  // const fetchData = async () => {
  //     let fonts = [];
  //   const res = await axios.get(`http://127.0.0.1:8443/fonts/${selectedQuery}`)
  //     // .then((res) => {
  //   // console.log(isLoaded);
  //       console.log(res.data)
  //       fonts = res.data;
  //       console.log(fonts);
  //   //.slice(0,21)
  //     setfamiliesNames(fonts.map((font: any) => font.family))
  //      if (familiesNames !== null) {
  //       console.log("Families   ", familiesNames);
       
    
  //       console.log('familynamessss', familiesNames)
     
  //       WebFont.load({
  //         loading: function() {console.log('loading')},
  //         active: function () {
  //           console.log('active')
  //           setLoading(true);
  //         },
  // inactive: function() {console.log('inactive')},
  //         google: {
          
  //           // families:['Droid Sans', 'Chilanka']
  //           families: familiesNames
  //         }
    
  //       }
  //       )
    
       

      
     
  //    }
  //     }
  //       // },
  // //POPULARITY
  // // TRENDING
  // useEffect(() => {
    
  //   fetchData().catch(console.error);
    

  //        },[ ]);