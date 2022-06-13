import { Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import layout1 from "../../assets/img/Style_layouts/layout1.svg";
import layout2 from "../../assets/img/Style_layouts/layout2.svg";
import layout3 from "../../assets/img/Style_layouts/layout3.svg";
import layout4 from "../../assets/img/Style_layouts/layout4.svg";
import { setStyle } from "../../store/slices/logoSlice/logoSlice";
const layouts = [
  { id: "1", screen: layout1 },
  { id: "2", screen: layout2 },
  { id: "3", screen: layout3 },
  { id: "4", screen: layout4 },
];
interface PropsType {
  isOpen: boolean;
  anchorEl: any;
  handleClose: any;
}

const LayoutMenu: React.FC<PropsType> = ({ isOpen, anchorEl, handleClose }) => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState("");
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    dispatch(setStyle(id));
    setCurrentId(id);
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 350,
          },
        }}
      >
        <Typography>Several layout options for your logo :)</Typography>
        {layouts.map(({ screen, id }) => (
          <MenuItem onClick={handleClose}>
            <div id={id} onClick={(e) => handleClick(e)} className="">
              <img
                className="hover:bg-green-500 p-1 rounded-lg"
                src={screen}
                alt="layout1"
              />
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LayoutMenu;
