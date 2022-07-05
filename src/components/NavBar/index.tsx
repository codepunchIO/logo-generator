import { FormEvent, useEffect, useState } from "react";
import FontsMenu from "./FontsMenu";
import LayoutMenu from "./LayoutMenu";
import Logotype from "./Logotype";
import LogotypeColorPicker from "./LogotypeColorPicker";

import axios from "axios";
import { useDispatch } from "react-redux";
import Colors from "../../assets/NavBar/Colors.svg";
import Fonts from "../../assets/NavBar/Fonts.svg";
import Icon from "../../assets/NavBar/Icon.svg";
import Layout from "../../assets/NavBar/Layout.svg";
import Name from "../../assets/NavBar/Name.svg";
import Preview from "../../assets/NavBar/Preview.svg";
import { setBrandName, setIcon } from "../../store/slices/logoSlice/logoSlice";

interface PropsType {
  setInputValue: (value: string) => void;
  setBgColor: (value: string) => void;
  setTxColor: (value: string) => void;
  setLgColor: (value: string) => void;
  setSelectedFont: (value: string) => void;
  setSelectedStyle: (value: string) => void;
  setSelectedIcon: (value: any) => void;
  bgColor: string;
  txColor: string;
  lgColor: string;
  font: string;
  selectedStyle: string;
  selectedIcon: any;
}

const Navbar: React.FC<PropsType> = ({
  setInputValue,
  bgColor,
  lgColor,
  setBgColor,
  setLgColor,
  setTxColor,
  txColor,
  font,
  setSelectedFont,
  setSelectedStyle,
  setSelectedIcon,
  selectedIcon
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [buttonType, setButtonType] = useState<null | string>("");
  const [isOpen, setIsopen] = useState<boolean>(false);
  // const [icons, setIconsState] = useState<string[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const textContent = event.currentTarget.textContent;
    setAnchorEl(event.currentTarget);
    setButtonType(textContent);

    textContent === "Preview" ? setIsopen(false) : setIsopen(!isOpen);

    setTitle("Logo icon");
    switch (textContent) {
      case "Name":
        setTitle("Brand Name");

        break;
      case "Layout":
        setTitle("Logo layout");

        break;
      case "Fonts":
        setTitle("Typography");
        
            
        break;
      case "Colors":
        setTitle("Color palette");

        break;
      case "Icon":
        setTitle("Logo icon");

        break;
      case "Preview":
        setTitle("");

        break;
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("icons", icons);
    console.log("list", list);
  }, [list]);

  const FetchIcons = async (query: string) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await axios.get(`https://u2b7t9.deta.dev/icon/${query}`, {
        params: {
          hash: "fasnfhasi!@$124casd@#$dnjzshd2q_214124SDa23123",
        },
      });
      console.log(res, "response");
      setList(res.data["icon_dicts"]);
      setIsLoading(false);
    } catch {
      setIsError(true);
      setErrorMessage(searchInputValue);
      setIsLoading(false);
    }
  };

  const QueryIcons = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInputValue !== "") {
      FetchIcons(searchInputValue);
      
    }
  };

  const handleCardClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const currentIcon = e.currentTarget.src;
    if (list.length > 0) {
       let payload: any = [];
      
        list.map((icon, index) => {
          if (currentIcon === icon.icon_link) {
           
           payload=[...payload,icon]
          }
        })
      
     
     
      
      dispatch(setIcon(payload));
    // dispatch(setIcon(currentIcon));
      setSelectedIcon(payload[0].icon_svg);
      

    }
  };

  const handleChange = (e: any) => {
    setSearchInputValue(e.target.value);
  };

  const handleClose = (e: any) => {
    setAnchorEl(null);
    setButtonType("");
  };

  const onTestClick = (e: any) => {
    console.log(e.target.value);
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  return (
    <>
      <div
        // elevation={0}
        className="border-r flex fixed inset-y-0 left-0 bg-white"
      >
        <div className="">
          <div className="flex flex-col">
            {" "}
            <Logotype/> {/*<TextField*/}
            {/*  sx={{ input: { background: "white" } }}*/}
            {/*  id="standard-basic"*/}
            {/*  label="Type your logo text..."*/}
            {/*  variant="filled"*/}
            {/*  margin="none"*/}
            {/*  size="small"*/}
            {/*  color="primary"*/}
            {/*  onChange={onTestClick}*/}
            {/*/>*/}
            <button onClick={(e) => handleClick(e)} className="hover:text-green-500 mx-auto border-b border-t w-full h-20 hover:bg-gray-100 hover:fill-green-500">
              <img
                src={Name}
                alt="Name"
                className="w-6 h-6 mx-auto
                "
              />
              <span className="text-center mx-4">Name</span>
            </button>
            {/* <div className=" w-[400px] h-10 mr-4 mt-4 rounded-lg bg-gradient-to-br from-teal-300 to-lime-300">
              <input
                type="text"
                id="small-input"
                className=" relative inline-flex align-self-center mx-[2px] mt-[3px]   w-[396px] text-gray-900  bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Brand name"
                onChange={onTestClick}
              />
            </div> */}
            <button onClick={(e) => handleClick(e)} className="hover:text-green-500  border-b h-20 hover:bg-gray-100">
              <img
                src={Layout}
                alt="Layout"
                className="w-6 h-6 mx-auto 
                "
              />
              <span className="text-center mx-4">Layout</span>
            </button>
            {/*<IconButton className="mr-3" onClick={(e) => handleClick(e)}>*/}
            {/*  <ColorLensIcon className="mr-1" />*/}
            {/*  <Typography>Card color</Typography>*/}
            {/*</IconButton>*/}
            <button onClick={(e) => handleClick(e)} className="hover:text-green-500 border-b h-20 hover:bg-gray-100">
              <img
                src={Fonts}
                alt="Fonts"
                className="w-6 h-6 mx-auto
                "
              />
              <span className="text-center mx-4 ">Fonts</span>
            </button>
           
            <button onClick={(e) => handleClick(e)} className="hover:text-green-500  border-b border-t h-20 hover:bg-gray-100">
              <img
                src={Colors}
                alt="Colors"
                className="w-6 h-6 mx-auto
                "
              />
              <span className="text-center mx-4">Colors</span>
            </button>
        
           
           
            <button onClick={(e) => handleClick(e)} className="hover:text-green-500  border-b border-t h-20 hover:bg-gray-100">
              <img
                src={Icon}
                alt="Icon"
                className="w-6 h-6 mx-auto
                "
              />
              <span className="text-center mx-4">Icon</span>
            </button>
         
            {/* <button onClick={(e) => handleClick(e)}className="hover:text-green-500  border-b border-t h-20 hover:bg-gray-100">
             
            
              <img
                src={Preview}
                alt="Preview"
                className="w-6 h-6 mx-auto
                "
              />
              <span className="text-center mx-4">Preview</span>
            </button> */}
        
          </div>{" "}
        </div>{" "}
        {isOpen && title==="Logo icon" ?  (
          
          <form
            className="w-80 h-full bg-white border p-5"
            onSubmit={(e) => {
             
                  QueryIcons(e)
                }
           
            }
          >
            <h2 className="text-center text-3xl tracking-wider font-extrabold mb-6 drop-shadow-2xl">
              {title}
            </h2>
            {list ? (
              <input
                type="search"
                className="  mb-6 h-14 w-full text-gray-900  bg-gray-50  rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search icons..."
                onChange={handleChange}
                aria-label="Search"
                aria-describedby="button-addon3"
              />
            ) : (
              ""
            )}
            <ul className="flex flex-wrap gap-3 justify-center">
              {list.map((item, index) => (
                <li key={index} className="border rounded cursor-pointer">
                  <img
                    src={item.icon_link}
                    alt=""
                    className="w-20 h-20 p-3"
                    onClick={(e) => handleCardClick(e)}
                  />
                </li>
              ))}
            </ul>
            
          </form>
      
    
        ) : isOpen && title === "Typography" ? (
            <div className="w-80 h-full overflow-y-auto bg-white border ">
              <h2 className="text-center text-3xl tracking-wider font-extrabold mb-6 drop-shadow-2xl">
              {title}
            </h2>
          <FontsMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              isOpen={buttonType === "Fonts"}
              font={font}
              setSelectedFont={setSelectedFont}
              />
              </div>
          ) : isOpen && title === "Brand Name" ? (
              // @ts-ignore
                <form 
            className="w-80 h-full bg-white border p-5"
            onSubmit={(e) => {
             
                  QueryIcons(e)
                }
           
            }
          >
            <h2 className="text-center text-3xl tracking-wider font-extrabold mb-6 drop-shadow-2xl">
              {title}
            </h2>
           
              <input
                type="search"
                className="  mb-6 h-14 w-full text-gray-900  bg-gray-50  rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type new Brand Name"
                onChange={(e) => {
             
                  dispatch(setBrandName(e.currentTarget.value))
                  setInputValue(e.currentTarget.value)
                   setAnchorEl(null);
                    setButtonType("");
                }
           
            }
                aria-label="Search"
                aria-describedby="button-addon3"
                />
               
                </form>
            ) : isOpen && title === "Logo layout" ? (
             <div className="w-80 h-full overflow-y-auto bg-white border ">
              <h2 className="text-center text-3xl tracking-wider font-extrabold mb-6 drop-shadow-2xl">
              {title}
            </h2>
           <LayoutMenu
              isOpen={buttonType === "Layout"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              setSelectedStyle={setSelectedStyle}
            />
              </div>
            
            )  : isOpen && title === "Color palette" ? (
             <div className="w-80 h-full overflow-y-auto bg-white border ">
              <h2 className="text-center text-3xl tracking-wider font-extrabold mb-6 drop-shadow-2xl">
              {title}
                    </h2>
                     <h2 className="text-center text-xl tracking-wider font-extrabold mb-6 drop-shadow-2xl">
             Background
            </h2>
         <LogotypeColorPicker
              isOpen={buttonType === "Card color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={bgColor}
              setColor={setBgColor}
                    />
                     <h2 className="text-center text-xl tracking-wider font-extrabold mb-6 drop-shadow-2xl">
              Text
            </h2>
                     <LogotypeColorPicker
              isOpen={buttonType === "Text color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={txColor}
              setColor={setTxColor}
            />
             <h2 className="text-center text-xl tracking-wider font-extrabold mb-6 drop-shadow-2xl">
              Icon
            </h2>
            <LogotypeColorPicker
              isOpen={buttonType === "Logo color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={lgColor}
              setColor={setLgColor}
            />
              </div>
            
            )
        
          
          
          
            : (
          ""
        )}
      </div>{" "}
    </>
  );
};

export default Navbar;
