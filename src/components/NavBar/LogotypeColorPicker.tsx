import { Button, Menu, MenuItem } from '@mui/material'
import { useMemo, useState } from 'react'
import { SketchPicker as Picker } from 'react-color'

interface PropsTypes {
  isOpen: boolean
  anchorEl: any
  handleClose: any
  color: any
  setColor: any
}

const LogotypeColorPicker: React.FC<PropsTypes> = ({
  isOpen,
  anchorEl,
  handleClose,
  color,
  setColor,
}) => {
  // const [color, setColor] = useState<any>('red')

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
        <div className="flex flex-col items-center">
          <Picker color={color} onChange={setColor} className="!w-5/6 mb-3" />
          <Button onClick={handleClose} variant="outlined" className="w-4/5">
            SET COLOR
          </Button>
        </div>
      </Menu>
    </>
  )
}

export default LogotypeColorPicker
