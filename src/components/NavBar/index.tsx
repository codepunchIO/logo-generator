import ColorLensIcon from "@mui/icons-material/ColorLens";
import GridViewIcon from "@mui/icons-material/GridView";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import {
  AppBar,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FontsMenu from "./FontsMenu";
import LayoutMenu from "./LayoutMenu";
import Logotype from "./Logotype";
import LogotypeColorPicker from "./LogotypeColorPicker";

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setButtonType(event.currentTarget.textContent);
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
      <AppBar position="fixed" color="inherit" elevation={0} className="border">
        <Toolbar className="flex justify-between">
          <Logotype />
          <div className="flex flex row">
            {/*<TextField*/}
            {/*  sx={{ input: { background: "white" } }}*/}
            {/*  id="standard-basic"*/}
            {/*  label="Type your logo text..."*/}
            {/*  variant="filled"*/}
            {/*  margin="none"*/}
            {/*  size="small"*/}
            {/*  color="primary"*/}
            {/*  onChange={onTestClick}*/}
            {/*/>*/}
              <div className=" w-[400px] h-10 mr-4 mt-4 rounded-lg bg-gradient-to-br from-teal-300 to-lime-300">

                  <input type="text" id="small-input"
                         className=" relative inline-flex align-self-center mx-[2px] mt-[3px]   w-[396px] text-gray-900  bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                         placeholder="Brand name"




                         onChange={onTestClick}
                  />
              </div>

            <button onClick={(e) => handleClick(e)}
                className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                      <span
                          className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Card color
                      </span>
            </button>
            {/*<IconButton className="mr-3" onClick={(e) => handleClick(e)}>*/}
            {/*  <ColorLensIcon className="mr-1" />*/}
            {/*  <Typography>Card color</Typography>*/}
            {/*</IconButton>*/}
            <button  onClick={(e) => handleClick(e)}
                    className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                      <span
                          className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Logo color
                      </span>
            </button>
            <LogotypeColorPicker
              isOpen={buttonType === "Card color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={bgColor}
              setColor={setBgColor}
            />
            <button  onClick={(e) => handleClick(e)}
                     className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                      <span
                          className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Text color
                      </span>
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
            <button  onClick={(e) => handleClick(e)}
                     className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                      <span
                          className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Layout
                      </span>
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
            {/*</IconButton>*/}
            <button  onClick={(e) => handleClick(e)}
                     className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                      <span
                          className="font-['Iceland'] text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                         Fonts
                      </span>
            </button>
            <FontsMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              isOpen={buttonType === "Fonts"}
              font={font}
              setSelectedFont={setSelectedFont}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
