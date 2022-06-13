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
  bgColor: string;
  txColor: string;
  lgColor: string;
}

const Navbar: React.FC<PropsType> = ({
  setInputValue,
  bgColor,
  lgColor,
  setBgColor,
  setLgColor,
  setTxColor,
  txColor,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [buttonType, setButtonType] = useState<null | string>("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setButtonType(event.currentTarget.textContent);
  };
  const handleClose = (e: any) => {
    console.log(handleClose, e.target);
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
          <div>
            <TextField
              sx={{ input: { background: "white" } }}
              id="standard-basic"
              label="Type your logo text..."
              variant="filled"
              margin="none"
              size="small"
              color="primary"
              onChange={onTestClick}
            />

            <IconButton className="mr-3" onClick={(e) => handleClick(e)}>
              <ColorLensIcon className="mr-1" />
              <Typography>Card color</Typography>
            </IconButton>
            <LogotypeColorPicker
              isOpen={buttonType === "Card color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={bgColor}
              setColor={setBgColor}
            />

            <IconButton className="mr-3" onClick={(e) => handleClick(e)}>
              <ColorLensIcon className="mr-1" />
              <Typography>Text color</Typography>
            </IconButton>
            <LogotypeColorPicker
              isOpen={buttonType === "Text color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={txColor}
              setColor={setTxColor}
            />

            <IconButton className="mr-3" onClick={(e) => handleClick(e)}>
              <ColorLensIcon className="mr-1" />
              <Typography>Logo color</Typography>
            </IconButton>
            <LogotypeColorPicker
              isOpen={buttonType === "Logo color"}
              anchorEl={anchorEl}
              handleClose={handleClose}
              color={lgColor}
              setColor={setLgColor}
            />

            <IconButton className="mr-3" onClick={(e) => handleClick(e)}>
              <GridViewIcon className="mr-1" />
              <Typography>Layout</Typography>
            </IconButton>

            <LayoutMenu
              isOpen={buttonType === "Layout"}
              anchorEl={anchorEl}
              handleClose={handleClose}
            />

            <IconButton className="mr-3" onClick={(e) => handleClick(e)}>
              <TextFieldsIcon className="mr-1" />
              <Typography>Fonts</Typography>
            </IconButton>

            <FontsMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              isOpen={buttonType === "Fonts"}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
