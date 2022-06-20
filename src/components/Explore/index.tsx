import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIcon } from "../../store/slices/logoSlice/logoSlice";
import { store } from "../../store/store";

const orange = [
  "bg-orange-50",
  "bg-orange-100",
  "bg-orange-200",
  "bg-orange-300",
  "bg-orange-400",
  "bg-orange-500",
  "bg-orange-600",
  "bg-orange-700",
  "bg-orange-800",
  "bg-orange-900",
];
const amber = [
  "bg-amber-50",
  "bg-amber-100",
  "bg-amber-200",
  "bg-amber-300",
  "bg-amber-400",
  "bg-amber-500",
  "bg-amber-600",
  "bg-amber-700",
  "bg-amber-800",
  "bg-amber-900",
];
const red = [
  "bg-red-50",
  "bg-red-100",
  "bg-red-200",
  "bg-red-300",
  "bg-red-400",
  "bg-red-500",
  "bg-red-600",
  "bg-red-700",
  "bg-red-800",
  "bg-red-900",
];
const purple = [
  "bg-purple-50",
  "bg-purple-100",
  "bg-purple-200",
  "bg-purple-300",
  "bg-purple-400",
  "bg-purple-500",
  "bg-purple-600",
  "bg-purple-700",
  "bg-purple-800",
  "bg-purple-900",
];
const blue = [
  "bg-blue-50",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",
];
const green = [
  "bg-green-50",
  "bg-green-100",
  "bg-green-200",
  "bg-green-300",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
  "bg-green-700",
  "bg-green-800",
  "bg-green-900",
];

const Explore = () => {
  const state = store.getState();

  const [icons, seticons] = useState<string[]>(state.logo.data.icons!);
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

  const [oneIcon, setOneIcon] = useState<string>("");

  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // @ts-ignore
    const currentIcon = e.currentTarget.children[0].currentSrc;
    setOneIcon(currentIcon);
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

  useEffect(() => {
    dispatch(setIcon([oneIcon]));
  }, [oneIcon]);

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-20">
        <div className="w-9/12 justify-center mx-auto">
          <h1 className="text-4xl text-center font-extrabold p-4 text-gray-900 mb-7">
            Explore
          </h1>

          <div className="flex  h-full w-full justify-center overflow-y-auto p-3  ">
            <div className=" flex flex-wrap flex-row justify-between  p-2 gap-y-7 max-w-4xl ">
              {icons.map((icon, index) => (
                <div
                  onClick={(e) => handleClick(e)}
                  className={`flex flex-row border-2flex-nowrap hover:scale-100 my-2 duration-300 ease-in-out hover:shadow-2xl shadow-md rounded-lg h-40 w-72 justify-center items-center ${
                    icon === oneIcon ? "bg-green-500/50" : ""
                  }  
                  ${colors[Math.floor(Math.random() * colors.length)]}
                  `}
                  key={index}
                >
                  {/* <svg
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                  >
                    <g transform="translate(0,-952.36218)">
                      <ellipse
                        style=""
                        ry="0"
                        rx="0"
                        cy="0"
                        cx="0"
                        transform="matrix(1.4103746,0,0,1.428508,4.4855025,957.53801)"
                        fill="#ffffff"
                      ></ellipse>
                      <path
                        style=""
                        d="m 9.6035689,976.39432 c 0.7564391,0 1.4503281,0.24747 
                        1.9916111,0.65921 l 0.149091,0.1249 0.04693,-0.037 0.121525,0.19489 0.106936,0.10842 
                        c 0.255273,0.28504 0.452314,0.61596 0.574321,0.97722 l 0.0035,0.0124 7.273189,11.66407 
                        35.100638,-0.40727 c 6.3289,6.31469 21.020303,8.39197 17.452649,16.63974 l
                         0,33.182 -0.01888,0 -0.01396,0.2566 c -0.248295,2.2794 -2.313121,4.0546 -4.823479,4.0546 -2.508371,0
                          -4.573081,-1.7752 -4.821369,-4.0546 l -0.01396,-0.2566 -0.04069,0 0,-17.636 c 0,0 -23.161176,-0.3681
                           -33.395624,-7.2762 l -12.295757,8.0966 -3.572618,16.6225 -0.0093,0.1803 c -0.229384,2.2005 -2.136871,3.917
                            -4.4542137,3.917 -2.4730331,0 -4.4785398,-1.953 -4.4785398,-4.3632 0,-0.452 0.070506,-0.888 0.2013804,
                            -1.2981 l 0.1323881,-0.3525 3.2026111,-21.5275 c 6e-7,0 7.7194949,-5.7281 7.0914379,-14.1817 l -8.1685903,
                            -20.73204 0.070726,-0.0557 -0.00925,-0.0114 c -0.3377077,-0.46102 -0.5348938,-1.0169 -0.5348938,-1.61544 
                            0,-1.59223 1.4022108,-2.88515 3.132259,-2.88515 z M 67.702414,961.96435 c 3.848708,2.72433 3.126655,5.57474
                             5.042818,8.45191 l 5.266131,2.88759 -0.04225,0.0705 c -0.126623,0.23613 -0.198532,0.50676 -0.198532,0.79447
                              0,0.92065 0.736365,1.6666 1.645498,1.6666 0.624937,0 1.168272,-0.35257 1.44683,-0.8721 l 0.03615,-0.076 
                              10.248109,5.61938 c 0,0 4.578229,1.54589 3.41213,6.54555 l -2.065075,5.00324 c 0,0 -0.718875,1.99957 
                              -3.950194,2.1817 l -11.152261,-2.3451 -5.033871,14.92751 -17.330466,-17.03725 10.355501,-15.82078 c 
                              -0.701496,-3.2486 0.199139,-7.98831 -0.494891,-11.17342 0,-1.43063 -0.09601,-1.45514 1.614795,-1.45514 z"
                        fill="#000000"
                      ></path>
                    </g>
                  </svg> */}

                  <img src={icon} alt="icon" className="h-20 w-20" />

                  <p className="p-1">{brandName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
