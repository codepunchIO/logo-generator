


import {useState} from 'react';
import { useDispatch } from "react-redux";
import { store } from "../../store/store";
import modernImg from '../../assets/fonts_img/modernImg.svg'
import elegantImg from '../../assets/fonts_img/elegantImg.svg'
import slabImg from '../../assets/fonts_img/slabImg.svg'
import handwrittenImg from '../../assets/fonts_img/handwrittenImg.svg'
import playfulImg from '../../assets/fonts_img/playfulImg.svg'
import futuristicImg from '../../assets/fonts_img/futuristicImg.svg'
import FontsStepper from'../../components/FontsStepper/FontsStepper'
import { setStyle } from "../../store/slices/logoSlice/logoSlice";
function NewStyle() {
    const [currentID,setCurrentId] =useState(null);
    const[displayFlag,setDisplay] = useState(true)
    const state = store.getState();
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id = e.currentTarget.id
        const text = e.currentTarget.innerText;
        // @ts-ignore
        setCurrentId(e.currentTarget.id);
        setDisplay(!displayFlag)
        dispatch(setStyle(text))
    }

    return (
        displayFlag?
        <div className="bg-white py-6 sm:py-8 lg:py-20">
            <div className=" w-9/12 justify-center mx-auto">
                <div className="flex justify-center items-end gap-4 mb-6">
                    <h2 className="text-4xl w-9/12 text-center font-extrabold p-4 text-gray-900 mb-7">
                        Choose font style
                    </h2>
                </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 w-auto mx-auto md:gap-x-6 gap-y-12 ">
                                    <div
                                    // Modern
                                        id="1"
                                        className={`flex flex-col w-full group flex-nowrap hover:bg-green-300 hover:scale-100 my-5 transition duration-700 ease-in hover:shadow-2xl shadow-md rounded-lg h-56 justify-center cursor-pointer`}
                                        key={1}
                                         onClick={(e) => handleClick(e)}

                                    >
                                            <span style={{fontFamily:`${'Baumans'}`}}
                                                  className='flex flex-col w-full flex-wrap text-center justify-center h-screen text-5xl mb-4'
                                                  // onClick={(e) => handleClick(e)}
                                                  // title={style[index]}
                                            >
                                              Modern
                                            </span>

                                        <div className="opacity-0 w-full group-hover:opacity-100 ease-in-out">
                                           <img className="hidden w-full group-hover:flex rounded-lg translate-x-4 hover:shadow-2xl" src={modernImg} />
                                        </div>
                                    </div>

                                <div className={`flex flex-col w-full group flex-nowrap hover:bg-green-300 hover:scale-100 my-5 transition duration-500 ease-in hover:shadow-2xl shadow-md rounded-lg h-56 justify-center cursor-pointer`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}
                                     
                                    //  Elegant
                                     id="2"
                                >
                                            <span style={{fontFamily:`${'Advent Pro'}`}}
                                                className=' flex flex-col w-full flex-wrap text-center justify-center h-screen text-5xl  mb-4'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Elegant
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 ease-in-out">
                                        <img className="hidden w-full group-hover:flex rounded-lg translate-x-4 hover:shadow-2xl" src={elegantImg} />
                                    </div>
                                </div>
                                <div className={`flex flex-col w-full group flex-nowrap hover:bg-green-300 hover:scale-100 my-5 transition duration-500 ease-in hover:shadow-2xl shadow-md rounded-lg h-56 justify-center cursor-pointer`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}

                                    //  Slab
                                     id="3"
                                >
                                            <span style={{fontFamily:`${'Quantico'}`}}
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap  text-center justify-center h-screen  text-5xl  mb-4'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Slab
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 ease-in-out">
                                        <img className="hidden w-full group-hover:flex rounded-lg translate-x-4 hover:shadow-2xl" src={slabImg} />
                                    </div>
                                </div>
                                <div className={`flex flex-col w-full group flex-nowrap hover:bg-green-300 hover:scale-100 my-5 transition duration-500 ease-in hover:shadow-2xl shadow-md rounded-lg h-56 justify-center cursor-pointer`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}

                                    //  Handwritten
                                     id="4"
                                >
                                            <span style={{fontFamily:`${'Monsieur La Doulaise'}`}}
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap text-center justify-center h-screen  text-5xl mb-4'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Handwritten
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 ease-in-out">
                                        <img className="hidden w-full group-hover:flex rounded-lg translate-x-4 hover:shadow-2xl" src={handwrittenImg} />
                                    </div>
                                </div>
                                <div className={`flex flex-col w-full group flex-nowrap hover:bg-green-300 hover:scale-100 my-5 transition duration-500 ease-in hover:shadow-2xl shadow-md rounded-lg h-56 justify-center cursor-pointer`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}

                                    //  Playfull
                                     id="5"
                                >
                                            <span style={{fontFamily:`${'Flamenco'}`}}
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap text-center justify-center h-screen text-5xl mb-4'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Playfull
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 ease-in-out">
                                        <img className="hidden w-full group-hover:flex rounded-lg translate-x-4 hover:shadow-2xl" src={playfulImg} />
                                    </div>
                                </div>
                                <div className={`flex flex-col w-full group flex-nowrap hover:bg-green-300 hover:scale-100 my-5 transition duration-500 ease-in hover:shadow-2xl shadow-md rounded-lg h-56 justify-center cursor-pointer`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}
                                    //  Futuristic
                                     id="6"
                                >
                                            <span style={{fontFamily:`${'Sarpanch'}`}}
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap text-center justify-center h-screen  text-5xl mb-4'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Futuristic
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 ease-in-out">
                                        <img className="hidden w-full group-hover:flex rounded-lg translate-x-4 hover:shadow-2xl" src={futuristicImg} />
                                    </div>
                                </div>
                            </div>
                     </div>

        </div>
            :
            <FontsStepper />
    );
}

export default NewStyle;

