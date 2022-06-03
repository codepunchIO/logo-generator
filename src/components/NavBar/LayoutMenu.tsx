import { Menu, MenuItem, Typography } from '@mui/material'
import layout1 from '../../assets/img/Style_layouts/layout1.svg'
import layout2 from '../../assets/img/Style_layouts/layout2.svg'
import layout3 from '../../assets/img/Style_layouts/layout3.svg'
import layout4 from '../../assets/img/Style_layouts/layout4.svg'

const layouts = [layout1, layout2, layout3, layout4]
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
        PaperProps={{
          style: {
            width: 350,
          },
        }}>
        <Typography>Several layout options for your logo :)</Typography>
        {layouts.map((layout) => (
          <MenuItem onClick={handleClose}>
            <div className="">
              <img className="hover:bg-green-500 p-1 rounded-lg" src={layout} alt="layout1" />
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default LayoutMenu
