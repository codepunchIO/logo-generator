import React from 'react';
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import fontCategories from "./fontCategories";
import {setFont, setStyle} from "../../store/slices/logoSlice/logoSlice";
// @ts-ignore

function FontsStepper() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    let [categories] = useState(
                    [

                     ["Wire One",
                        "Syncopate",
                        "Josefin Slab"],


        [
        "Advent Pro",
        "Orbitron",
        "Rajdhani",

        ],
                        [
                            "Exo 2.0",
                            "Audiowide",
                            "Expletus Sans ",

                            ],

                        [
                            "Quantico",
                            "Iceland",
                            "Electrolize",

                            ],
                        [
                            "Monofett",
                            "Sarpanch",
                            "Share Tech Mono",
                            ]
                    ]


    )
    const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setSelectedIndex(selectedIndex+1);

    };


            console.log(categories)
        return (

            (selectedIndex<5)?

                <div className="w-9/12 flex flex-row justify-between h-screen items-center mx-auto">
                    {categories[selectedIndex].map((family: any, index) => (

                        (
                            <div
                                className={`flex flex-row flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center`}
                                onClick={(e) => handleClick(e)}
                                key={index}>
                                                <span style={{fontFamily: `${family}`}}
                                                      className='flex flex-col flex-wrap mx-2 text-center justify-center h-full  text-3xl'
                                                    // onClick={(e) => handleClick(e)}

                                                >
                                                  {family}
                                                </span>

                            </div>
                        )
                    ))}

                </div>

                :
                <div className="flex  h-screen justify-center items-center gap-4 mb-6">
                    <h2 className="text-4xl w-9/12 text-center font-extrabold p-4 text-gray-900 mb-7 ">
                        Thank you for selecting fonts for us!
                    </h2>
                </div>
        )
    }


export default FontsStepper;



