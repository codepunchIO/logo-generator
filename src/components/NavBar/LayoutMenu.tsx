import { Menu, MenuItem, Typography } from '@mui/material'
import Clean from '../../assets/img/Fonts/Clean.svg'
import Funny from '../../assets/img/Fonts/Funny.svg'
import Modern from '../../assets/img/Fonts/Modern.svg'

interface PropsType {
  isOpen: boolean
  anchorEl: any
  handleClose: any
}

const LayoutMenu: React.FC<PropsType> = ({ isOpen, anchorEl, handleClose }) => {
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <Typography>Several layout options for your logo :)</Typography>
        <MenuItem onClick={handleClose}>
          <div className="">
            <img className="hover:bg-green-500 p-1 rounded-lg" src={Clean} alt="layout1" />
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="">
            <img className="hover:bg-green-500 p-1 rounded-lg" src={Modern} alt="layout2" />
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="">
            <img className="hover:bg-green-500 p-1 rounded-lg" src={Funny} alt="layout4" />
          </div>
        </MenuItem>
      </Menu>
    </>
  )
}

export default LayoutMenu
