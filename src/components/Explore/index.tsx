import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setColor, setIcon, setStyle } from "../../store/slices/logoSlice/logoSlice";
import { store } from "../../store/store";






const orange = [
  '#fff7ed',
  '#ffedd5',
  '#fed7aa',
  '#fdba74',
  '#fb923c',
  '#f97316',
  '#ea580c',
  '#c2410c',
  '#9a3412',
  '#7c2d12',
];
const amber = [
  "#fffbeb",
  "#fef3c7",
  "#fde68a",
  "#fcd34d",
  "#fbbf24",
  "#f59e0b",
  "#d97706",
  "#b45309",
  "#92400e",
  "#78350f",
];
const red = [
 " #fee2e2",
  "#fecaca",
  "#fca5a5",
  "#f87171",
  "#ef4444",
  "#dc2626",
  "#b91c1c",
  "#991b1b",
  "#7f1d1d",
];
const purple = [

  "#faf5ff",
 "#f3e8ff",
 "#e9d5ff",
 "#d8b4fe",
 "#c084fc",
 "#a855f7",
 "#9333ea",
 "#7e22ce",
 "#6b21a8",
 "#581c87",
];
const blue = [
  "#eff6ff",
  "#dbeafe",
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
  "#2563eb",
  "#1d4ed8",
  "#1e40af",
  "#1e3a8a",
];
const green = [
  "#f0fdf4",
  "#dcfce7",
  "#bbf7d0",
  "#86efac",
  "#4ade80",
  "#22c55e",
  "#16a34a",
  "#15803d",
  "#166534",
  "#14532d",
];
const Explore = () => {
  const state = store.getState();
  const fonts = state.logo.data.fonts;
  const [icons, seticons] = useState<any[]>(state.logo.data.icons!);
  // const [icons, seticons] = useState<string[]>([
  //   "https://static.thenounproject.com/noun-svg/364.svg?Expires=1655384339&Signature=g8bwTOq3dReOwyJnKVvprTRfJzPfyqKG~J6HJjtz71I45N-8VP1WtnbZrAESk1aEus6RGKwcHuUfklSXneAjoaGk7Dygb-5dOgOJC2YJm2vSO-CQUb6xxUonH56A3VCjkoir25Slqzr4u2WBTUHwq4s4-4VyW6AE5M1NFMuZZcI_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/41163.svg?Expires=1655384339&Signature=ToXWCu1iyLplZEAIXofvDXtSBVyhPLGcrlcOxJ5TbW2nDqUqPSoF3C3c--z5qPS28H97Tta0YOqOqIUukoE0J8gXKDYXtpgzJH5ncUWOndMWege66-NUtywUR9qw9y4Qx4vaAXXpVCptNRVK5rzdM3x4OkxoNPQjQ3~~S0K9MHk_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/134522.svg?Expires=1655384339&Signature=NB2gSQpw99rd04XTMY~PSkDu9ZI4pkHk-E9uX3Qp2eDlUjuFFWu~4R0vZYKGWDNclDcGSPdb~91O8BRvv6PxUnh7n9FOcYe3LaLVXvWtQ50m9jSNJhMNbRxdYI828BwmBTQZogqHsLrEoGFZYJMQLQ5wiCLARtQt6BcxtSQhaIU_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/149571.svg?Expires=1655384339&Signature=JTvped8~PY-p5i~ruqhnt35~QSL1yk4teZbvBEVfy34oY8L8rWcvSkOICD~XVA6Y7tI-NifG4SUkG1fNV6qXFFWpJUfYVgugP-IdsmWdHXp~32tIr-jUQL2mPYDgEeFmVuSfCvZ5k8J3HHy9oxAQ~RkcyPVMt3FUv6M3XJW5Gas_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/285509.svg?Expires=1655384339&Signature=lYXPnc~8~0KrQpsJxnI4d4b4CKaznOIdHmw1LIn11s4vJ5BuPt06zNNoabbkbNRnltEMxAI-Ld0Jlyf9ddoY52Ac6Pm4cqEbMWF8oGQWZA5NiLQBRSqyqY10h7rvF2~sew3ztdcTWiQBZIRGH0-Uyk3dDVbQvJMbe5-oqLAwvQw_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/1669106.svg?Expires=1655384339&Signature=ARye~3l2LQWh3R0~RvzKm4WS-f0BZDMXke~pc2AsAQPUNEhkjBtm21rJxdLcq7tYv~ubIHdCpW28xKrLbYPiFE8Ll99W1l7G3h8wU9aYpJQEaFfV7accWswbSFt5tTJ5kaC6oNCSt2Nr~ae1MXGcyx6OXQ35yheedRE4HMt2I-g_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/2391208.svg?Expires=1655384339&Signature=cxxOKsOyXpnyxHKqttlWJw5jD0n0CmqATnICktdmcWMoj4cB1L3vYrnPPSk5fVwebQApYKIWrktEReXpbkGPHePVPsoxmYF9q2RogxI9dP0fViDgmw0RGkSNRh09Eyheqndn4qiX6AWgSc-3QZlIl9FXWg~B-ADE5J9BQLDEoo4_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/2455345.svg?Expires=1655384339&Signature=QskllMAMYYo0OroPjXkmedjdW8-ahWYzRlLob2URLP2v~~ydQrl89vYnrVJG9btkAnpdZhbxvh96j2ZSC7ABBbz-8HESFpJWuTxsWnhI~9-Fn8tueGFjxNKmdIO2MczCdSCZCTh6osU5i1oz7rI~5Ew9hsSksakaoCPnqxvUKtM_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/2891610.svg?Expires=1655384339&Signature=AuD0yoxapxvCdl5YTfjp8Rjc~26AjaYOrdPdKx3Bv7HoR39dD6mzT5bHXGy2Z2uY4SnufhCQBDHwq~5EkPAZf3Ow-vQVMR0D~4UenIH6N2FTKigNB6aspOfPfjau89LhvBqi3SyOoWSVU~wSvfq07WHlvrSijkYQSxD374B7oU8_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/3170.svg?Expires=1655384339&Signature=kYl5CZatWx98UTg1eo07mVT8NT9B~xoz6WZZ0~a~Rb5~57PrudIXeSaW7fnem0VcTgETSoYTESZwsgsSP-edbcBDCTKnapRHSPnhE02~wX8qtyHBj0MlNiJpAqcPZt9T7OIAGOAD1WPTEjPvdaVmt~BLY951zlQCDpFznhkdUrg_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/3171.svg?Expires=1655384339&Signature=ka44yF3DormkeJrzkPpJnpqTvx4JfDWYOc-QLF02DJppEdcv2IbOGRF-lzpoGLiJ5nlTgJQnasEmW5cU9Wz0nef4Ft7CMgusHx~1NB0GvDsPNE6EHoTKUYIHbgbZHEq-ZthcwAAX2klmxvHLe3JIe93os77MvymAqMPahOc4Gfo_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/13643.svg?Expires=1655384339&Signature=B4JJpDIOCHIYB1whaSMHxS797Gaq~54T57MltIL68~Ib0X-sAUNSBadGRIABFMppjuCDVBm7e4HEgy5Lhmvd7ll6jMW4SISxiAgNPBOvibVl6RsRDZ70LdZHocafZlsAyxe~molj3EIcRGVh1nkH6AHYiRcdcCMsR-vfpBJpJQk_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/6323.svg?Expires=1655384339&Signature=I3pqmkCi-1yhW3WdiT7zbFWzNpssD6s7bkWioei2CCGK9VQFvNEaap9ULJtGj~aCJKWrH8z2apwhUytA3vlRXumlhc7nYY~mADZ35mk~JbvUOnzhQL1JkObGBIoc2toI0r1CY0bjzNmNLfd-aTbEN1TGH7WzOFVBKbJbD2ygIwc_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/8670.svg?Expires=1655384339&Signature=at4SysN3t-I2Pn9jUMxXX1182z7Erbtv2QdAf1oZpXgD2jmO3IYpNPUwBRMcf0TkYN8BGKWoY465X7BLqv-5H9nCnTf09SanL1rNba-c~ZUOuy1td48MEPWPTGJOUohmJc1GvdFNEnHrXyFclGDJjzpmOLBYDyDCwY9htxCcekM_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   "https://static.thenounproject.com/noun-svg/9104.svg?Expires=1655384339&Signature=XreK9~FBIVhngkWi6Ao9xc9v6BMoZhnvAT5NASmFiZ6PNgMxvq4AA1OFTY~8CiWsnf7vDXmS~dmqu26hoUNqkWVTtXNdo~cBmY7Gbf9IjGtFwQzq2~pCDTQkbBgANVFuQijLjVnr1UIPNsfGTEqXWr5lZV0UaE2jRS5PZU~lTS0_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  // ]);
  const [brandName, setBrandName] = useState<string>(
    state.logo.data.brandName!
  );
  const [colors, setColors] = useState<string[]>([]);

  const [oneIcon, setOneIcon] = useState<any>("");

  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    
    e.preventDefault();
    // @ts-ignore
    const currentIcon = e.currentTarget.children[0].currentSrc;
    // setOneIcon(currentIcon);
    let payload: any = [];
      
        icons.map((icon, index) => {
          if (currentIcon === icon.icon_link) {
           payload=[...payload,icon]
          }
        })
      
     
      console.log("payloaddd", payload);
      
    dispatch(setIcon(payload));
    dispatch(setStyle(e.currentTarget.style.fontFamily))
    dispatch(setColor(e.currentTarget.style.background))
  };

  useEffect(() => {
    console.log("colors: ", colors);
    console.log("state.logo.data.colors!", state.logo.data.colors!);

    switch (state.logo.data.colors) {
      case "1":
        setColors(blue);
        console.log("blue");

        break;
      case "2":
        setColors(green);
        console.log("green");

        break;
      case "3":
        setColors(purple);
        console.log("purple");

        break;
      case "4":
        setColors(red);
        console.log("red");
        break;
      case "5":
        setColors(orange);
        console.log("orange");

        break;
      case "6":
        setColors(amber);
        console.log("amber");

        break;
    }
  }, []);

  // useEffect(() => {
    

  //     let payload: any = [];
      
  //       icons.map((icon, index) => {
  //         if (oneIcon === icon.icon_link) {
  //          payload=[...payload,icon]
  //         }
  //       })
      
     
  //     console.log("payloaddd", payload);
      
  //     dispatch(setIcon(payload));
  //   // dispatch(setIcon([oneIcon]));
  // }, [oneIcon]);

  return (
    <>
      <div className="h-screen bg-white py-6 sm:py-8 lg:py-20">
        <div className=" w-5/6 md:w-4/6 justify-center mx-auto">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl text-center font-extrabold p-4 text-gray-900 mb-7">
            Explore
          </h1>

          <div className="flex h-full w-full justify-center overflow-y-auto p-3  ">
            <div className="grid sm:grid-cols-2 gap-x-3 w-full mx-auto  gap-y-2">
              {
                
                fonts?.map((font, index) => 
                  icons.map((icon, index) => (
                <div
                  onClick={(e) => handleClick(e)}
                  // @ts-ignore
              style={{ fontFamily: `${state.logo.data.fonts[Math.floor(Math.random() * fonts.length)]}`, background:`${colors[Math.floor(Math.random() * colors.length)]}` }}
                  // className={`flex flex-col  w-full  flex-nowrap hover:shadow-lg text-8xl duration-200 hover:text-4xl my-5 rounded-lg h-72 justify-center cursor-pointer ease-in ease-linear`}>
                  className={`flex flex-col  w-full  flex-nowrap hover:shadow-lg text-4xl text-center duration-200 hover:text-6xl my-1 rounded-lg h-72 justify-center cursor-pointer ease-in ease-linear ${
                    icon === oneIcon ? "border-4 border-green-500" : ""
                  }
                 
                  
                  `}
                  key={index}
                >
                 

                  <img src={icon.icon_link} alt="icon" className="flex flex-col w-full h-32 text-center min-w-full  justify-center  rounded-lg text-xl px-6 py-2" />

                  <p className="p-1">{brandName}</p>
                </div>
              ))
                  
                
                )
              
              /* {icons.map((icon, index) => (
                <div
                  onClick={(e) => handleClick(e)}
                  // @ts-ignore
              style={{ fontFamily: `${state.logo.data.fonts[index]}` }}
                  // className={`flex flex-col  w-full  flex-nowrap hover:shadow-lg text-8xl duration-200 hover:text-4xl my-5 rounded-lg h-72 justify-center cursor-pointer ease-in ease-linear`}>
                  className={`flex flex-col  w-full  flex-nowrap hover:shadow-lg text-4xl text-center duration-200 hover:text-6xl my-1 rounded-lg h-72 justify-center cursor-pointer ease-in ease-linear ${
                    icon === oneIcon ? "border-4 border-green-500" : ""
                  }
                 
                  ${colors[Math.floor(Math.random() * colors.length)]}
                  `}
                  key={index}
                >
                 

                  <img src={icon.icon_link} alt="icon" className="flex flex-col w-full h-32 text-center min-w-full  justify-center  rounded-lg text-xl px-6 py-2" />

                  <p className="p-1">{brandName}</p>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
