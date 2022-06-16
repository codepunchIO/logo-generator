import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIcon } from "../../store/slices/logoSlice/logoSlice";
import { store } from "../../store/store";

const Explore = () => {
  const state = store.getState();

  const [icons, seticons] = useState<string[]>(state.logo.data.icons!);
  //   const [icons, seticons] = useState<string[]>([
  //     "https://static.thenounproject.com/noun-svg/364.svg?Expires=1655384339&Signature=g8bwTOq3dReOwyJnKVvprTRfJzPfyqKG~J6HJjtz71I45N-8VP1WtnbZrAESk1aEus6RGKwcHuUfklSXneAjoaGk7Dygb-5dOgOJC2YJm2vSO-CQUb6xxUonH56A3VCjkoir25Slqzr4u2WBTUHwq4s4-4VyW6AE5M1NFMuZZcI_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/41163.svg?Expires=1655384339&Signature=ToXWCu1iyLplZEAIXofvDXtSBVyhPLGcrlcOxJ5TbW2nDqUqPSoF3C3c--z5qPS28H97Tta0YOqOqIUukoE0J8gXKDYXtpgzJH5ncUWOndMWege66-NUtywUR9qw9y4Qx4vaAXXpVCptNRVK5rzdM3x4OkxoNPQjQ3~~S0K9MHk_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/134522.svg?Expires=1655384339&Signature=NB2gSQpw99rd04XTMY~PSkDu9ZI4pkHk-E9uX3Qp2eDlUjuFFWu~4R0vZYKGWDNclDcGSPdb~91O8BRvv6PxUnh7n9FOcYe3LaLVXvWtQ50m9jSNJhMNbRxdYI828BwmBTQZogqHsLrEoGFZYJMQLQ5wiCLARtQt6BcxtSQhaIU_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/149571.svg?Expires=1655384339&Signature=JTvped8~PY-p5i~ruqhnt35~QSL1yk4teZbvBEVfy34oY8L8rWcvSkOICD~XVA6Y7tI-NifG4SUkG1fNV6qXFFWpJUfYVgugP-IdsmWdHXp~32tIr-jUQL2mPYDgEeFmVuSfCvZ5k8J3HHy9oxAQ~RkcyPVMt3FUv6M3XJW5Gas_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/285509.svg?Expires=1655384339&Signature=lYXPnc~8~0KrQpsJxnI4d4b4CKaznOIdHmw1LIn11s4vJ5BuPt06zNNoabbkbNRnltEMxAI-Ld0Jlyf9ddoY52Ac6Pm4cqEbMWF8oGQWZA5NiLQBRSqyqY10h7rvF2~sew3ztdcTWiQBZIRGH0-Uyk3dDVbQvJMbe5-oqLAwvQw_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/1669106.svg?Expires=1655384339&Signature=ARye~3l2LQWh3R0~RvzKm4WS-f0BZDMXke~pc2AsAQPUNEhkjBtm21rJxdLcq7tYv~ubIHdCpW28xKrLbYPiFE8Ll99W1l7G3h8wU9aYpJQEaFfV7accWswbSFt5tTJ5kaC6oNCSt2Nr~ae1MXGcyx6OXQ35yheedRE4HMt2I-g_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/2391208.svg?Expires=1655384339&Signature=cxxOKsOyXpnyxHKqttlWJw5jD0n0CmqATnICktdmcWMoj4cB1L3vYrnPPSk5fVwebQApYKIWrktEReXpbkGPHePVPsoxmYF9q2RogxI9dP0fViDgmw0RGkSNRh09Eyheqndn4qiX6AWgSc-3QZlIl9FXWg~B-ADE5J9BQLDEoo4_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/2455345.svg?Expires=1655384339&Signature=QskllMAMYYo0OroPjXkmedjdW8-ahWYzRlLob2URLP2v~~ydQrl89vYnrVJG9btkAnpdZhbxvh96j2ZSC7ABBbz-8HESFpJWuTxsWnhI~9-Fn8tueGFjxNKmdIO2MczCdSCZCTh6osU5i1oz7rI~5Ew9hsSksakaoCPnqxvUKtM_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/2891610.svg?Expires=1655384339&Signature=AuD0yoxapxvCdl5YTfjp8Rjc~26AjaYOrdPdKx3Bv7HoR39dD6mzT5bHXGy2Z2uY4SnufhCQBDHwq~5EkPAZf3Ow-vQVMR0D~4UenIH6N2FTKigNB6aspOfPfjau89LhvBqi3SyOoWSVU~wSvfq07WHlvrSijkYQSxD374B7oU8_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/3170.svg?Expires=1655384339&Signature=kYl5CZatWx98UTg1eo07mVT8NT9B~xoz6WZZ0~a~Rb5~57PrudIXeSaW7fnem0VcTgETSoYTESZwsgsSP-edbcBDCTKnapRHSPnhE02~wX8qtyHBj0MlNiJpAqcPZt9T7OIAGOAD1WPTEjPvdaVmt~BLY951zlQCDpFznhkdUrg_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/3171.svg?Expires=1655384339&Signature=ka44yF3DormkeJrzkPpJnpqTvx4JfDWYOc-QLF02DJppEdcv2IbOGRF-lzpoGLiJ5nlTgJQnasEmW5cU9Wz0nef4Ft7CMgusHx~1NB0GvDsPNE6EHoTKUYIHbgbZHEq-ZthcwAAX2klmxvHLe3JIe93os77MvymAqMPahOc4Gfo_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/13643.svg?Expires=1655384339&Signature=B4JJpDIOCHIYB1whaSMHxS797Gaq~54T57MltIL68~Ib0X-sAUNSBadGRIABFMppjuCDVBm7e4HEgy5Lhmvd7ll6jMW4SISxiAgNPBOvibVl6RsRDZ70LdZHocafZlsAyxe~molj3EIcRGVh1nkH6AHYiRcdcCMsR-vfpBJpJQk_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/6323.svg?Expires=1655384339&Signature=I3pqmkCi-1yhW3WdiT7zbFWzNpssD6s7bkWioei2CCGK9VQFvNEaap9ULJtGj~aCJKWrH8z2apwhUytA3vlRXumlhc7nYY~mADZ35mk~JbvUOnzhQL1JkObGBIoc2toI0r1CY0bjzNmNLfd-aTbEN1TGH7WzOFVBKbJbD2ygIwc_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/8670.svg?Expires=1655384339&Signature=at4SysN3t-I2Pn9jUMxXX1182z7Erbtv2QdAf1oZpXgD2jmO3IYpNPUwBRMcf0TkYN8BGKWoY465X7BLqv-5H9nCnTf09SanL1rNba-c~ZUOuy1td48MEPWPTGJOUohmJc1GvdFNEnHrXyFclGDJjzpmOLBYDyDCwY9htxCcekM_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //     "https://static.thenounproject.com/noun-svg/9104.svg?Expires=1655384339&Signature=XreK9~FBIVhngkWi6Ao9xc9v6BMoZhnvAT5NASmFiZ6PNgMxvq4AA1OFTY~8CiWsnf7vDXmS~dmqu26hoUNqkWVTtXNdo~cBmY7Gbf9IjGtFwQzq2~pCDTQkbBgANVFuQijLjVnr1UIPNsfGTEqXWr5lZV0UaE2jRS5PZU~lTS0_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q",
  //   ]);
  const [brandName, setBrandName] = useState<string>(
    state.logo.data.brandName!
  );

  const [oneIcon, setOneIcon] = useState<string>("");

  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // @ts-ignore
    const currentIcon = e.currentTarget.children[0].currentSrc;
    setOneIcon(currentIcon);
  };

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
                  }  `}
                  key={index}
                >
                  <img src={icon} alt="icon" className="h-20 w-20 " />
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
