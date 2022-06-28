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
import { setIcon } from "../../store/slices/logoSlice/logoSlice";

interface PropsType {
  setInputValue: (value: string) => void;
  setBgColor: (value: string) => void;
  setTxColor: (value: string) => void;
  setLgColor: (value: string) => void;
  setSelectedFont: (value: string) => void;
  setSelectedStyle: (value: string) => void;
  bgColor: string;
  txColor: string;
  lgColor: string;
  font: string;
  selectedStyle: string;
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
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [buttonType, setButtonType] = useState<null | string>("");
  const [isOpen, setIsopen] = useState<boolean>(false);
  // const [icons, setIconsState] = useState<string[]>([]);
  const [list, setList] = useState<string[]>([]);
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
      setList(res.data["icon_list"]);
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
      dispatch(setIcon(currentIcon));
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
            <LogotypeColorPicker
              isOpen={buttonType === "Card color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={bgColor}
              setColor={setBgColor}
            />
            <button onClick={(e) => handleClick(e)} className="hover:text-green-500  border-b border-t h-20 hover:bg-gray-100">
              <img
                src={Colors}
                alt="Colors"
                className="w-6 h-6 mx-auto
                "
              />
              <span className="text-center mx-4">Colors</span>
            </button>
            {/*<IconButton className="mr-3" onClick={(e) => handleClick(e)}>*/}
            {/*  <ColorLensIcon className="mr-1" />*/}
            {/*  <Typography>Text color</Typography>*/}
            {/*</IconButton>*/}
            <LogotypeColorPicker
              isOpen={buttonType === "Text color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={txColor}
              setColor={setTxColor}
            />
            {/*<IconButton className="mr-3" onClick={(e) => handleClick(e)}>*/}
            {/*  <ColorLensIcon className="mr-1" />*/}
            {/*  <Typography>Logo color</Typography>*/}
            {/*</IconButton>*/}
            <LogotypeColorPicker
              isOpen={buttonType === "Logo color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={lgColor}
              setColor={setLgColor}
            />
            {/*<IconButton className="mr-3" onClick={(e) => handleClick(e)}>*/}
            {/*  <GridViewIcon className="mr-1" />*/}
            {/*  <Typography>Layout</Typography>*/}
            {/*</IconButton>*/}
            <button onClick={(e) => handleClick(e)} className="hover:text-green-500  border-b border-t h-20 hover:bg-gray-100">
              <img
                src={Icon}
                alt="Icon"
                className="w-6 h-6 mx-auto
                "
              />
              <span className="text-center mx-4">Icon</span>
            </button>
            <LayoutMenu
              isOpen={buttonType === "Layout"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              setSelectedStyle={setSelectedStyle}
            />
            {/*<IconButton className="mr-3" onClick={(e) => handleClick(e)}>*/}
            {/*  <TextFieldsIcon className="mr-1" />*/}
            {/*  <Typography>Fonts</Typography>*/}
            <button onClick={(e) => handleClick(e)}className="hover:text-green-500  border-b border-t h-20 hover:bg-gray-100">
              {/* // className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" */}
            
              <img
                src={Preview}
                alt="Preview"
                className="w-6 h-6 mx-auto
                "
              />
              <span className="text-center mx-4">Preview</span>
            </button>
            <FontsMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              isOpen={buttonType === "Fonts"}
              font={font}
              setSelectedFont={setSelectedFont}
            />
          </div>{" "}
        </div>{" "}
        {isOpen ? (
          <form
            className="w-80 h-full bg-white border p-5"
            onSubmit={(e) => QueryIcons(e)}
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
                    src={item}
                    alt=""
                    className="w-20 h-20 p-3"
                    onClick={(e) => handleCardClick(e)}
                  />
                </li>
              ))}
            </ul>
          </form>
        ) : (
          ""
        )}
      </div>{" "}
    </>
  );
};

export default Navbar;
