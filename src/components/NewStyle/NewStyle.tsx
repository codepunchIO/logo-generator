


import {useState} from 'react';
import { useDispatch } from "react-redux";
import { store } from "../../store/store";
import modernImg from '../../assets/fonts_img/modernImg.svg'
import elegantImg from '../../assets/fonts_img/elegantImg.svg'
import slabImg from '../../assets/fonts_img/slabImg.svg'
import handwrittenImg from '../../assets/fonts_img/handwrittenImg.svg'
import playfulImg from '../../assets/fonts_img/playfulImg.svg'
import futuristicImg from '../../assets/fonts_img/futuristicImg.svg'

import { setStyle } from "../../store/slices/logoSlice/logoSlice";
function NewStyle() {
    const [currentID,setCurrentId] =useState(null);
    const state = store.getState();
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id = e.currentTarget.id
        // @ts-ignore
        setCurrentId(e.currentTarget.id);
        dispatch(setStyle(id))
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-20">
            <div className=" w-9/12 justify-center mx-auto">
                <div className="flex justify-center items-end gap-4 mb-6">
                    <h2 className="text-4xl w-9/12 text-center font-extrabold p-4 text-gray-900 mb-7 ">
                        Choose font style
                    </h2>
                </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 w-auto mx-auto md:gap-x-6 gap-y-12 ">
                                    <div
                                        id="1"
                                        className={` flex flex-col w-full group flex-nowrap   hover:scale-100 my-5   transition duration-500 ease-in hover:shadow-2xl shadow-md rounded-lg h-56 justify-center `}
                                        // key={style.indexOf(family)} >
                                         onClick={(e) => handleClick(e)}

                                    >
                                            <span
                                // style={{ fontFamily: `${family}` }}
                                                  className=' flex flex-col flex-wrap w-full  mx-2 text-center justify-center h-screen  text-3xl hover: scale-75 transition delay-150 duration-500 ease-out'
                                                  // onClick={(e) => handleClick(e)}
                                                  // title={style[index]}
                                            >
                                              Modern
                                            </span>

                                        <div className="  opacity-0 w-full group-hover:opacity-100 transition delay-150 duration-500 ease-in-out mb-3 ">
                                           <img className=" hidden w-full group-hover:flex " src={modernImg} />
                                        </div>
                                    </div>

                                <div className={` flex flex-col group w-full flex-nowrap hover:scale-100 my-5 transition duration-150 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-56  justify-center`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}
                                     id="2"
                                >
                                            <span
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap mx-2 text-center justify-center h-screen  text-3xl'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Elegant
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 transition delay-150 duration-500 ease-in-out ">
                                        <img className=" hidden w-full group-hover:flex " src={elegantImg} />
                                    </div>
                                </div>
                                <div className={` flex flex-col group w-full flex-nowrap hover:scale-100 my-5 transition duration-150 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-56 justify-center`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}
                                     id="3"
                                >
                                            <span
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap mx-2 text-center justify-center h-screen  text-3xl'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Slab
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 transition delay-150 duration-500 ease-in-out ">
                                        <img className=" hidden w-full group-hover:flex " src={slabImg} />
                                    </div>
                                </div>
                                <div className={` flex flex-col group w-full flex-nowrap hover:scale-100 my-5 transition duration-150 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-56  justify-center`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}
                                     id="4"
                                >
                                            <span
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap mx-2 text-center justify-center h-screen  text-3xl'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Handwritten
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 transition delay-150 duration-500 ease-in-out ">
                                        <img className=" hidden w-full group-hover:flex " src={handwrittenImg} />
                                    </div>
                                </div>
                                <div className={` flex flex-col group w-full flex-nowrap hover:scale-100 my-5 transition duration-150 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-56  justify-center`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}
                                     id="5"
                                >
                                            <span
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap mx-2 text-center justify-center h-screen  text-3xl'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Playfull
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 transition delay-150 duration-500 ease-in-out ">
                                        <img className=" hidden w-full  group-hover:flex " src={playfulImg} />
                                    </div>
                                </div>
                                <div className={` flex flex-col group w-full flex-nowrap hover:scale-100 my-5 transition duration-150 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-56 justify-center`}
                                    // key={style.indexOf(family)} >
                                     onClick={(e) => handleClick(e)}
                                     id="6"
                                >
                                            <span
                                                // style={{ fontFamily: `${family}` }}
                                                className=' flex flex-col w-full flex-wrap mx-2 text-center justify-center h-screen  text-3xl'
                                                // onClick={(e) => handleClick(e)}
                                                // title={style[index]}
                                            >
                                              Futuristic
                                            </span>

                                    <div className="opacity-0 w-full group-hover:opacity-100 transition delay-150 duration-500 ease-in-out ">
                                        <img className=" hidden w-full  group-hover:flex " src={futuristicImg} />
                                    </div>
                                </div>
                            </div>
                     </div>
        </div>
    );
}

export default NewStyle;

