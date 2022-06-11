import { AppBar, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import Logotype from './Logotype'
import { useState } from 'react'
import LayoutMenu from './LayoutMenu'
import FontsMenu from './FontsMenu'
import LogotypeColor from './ColorPicker'

interface PropsType {
  setInputValue: any
}

const Navbar: React.FC<PropsType> = ({ setInputValue }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [buttonType, setButtonType] = useState<null | string>('')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setButtonType(event.currentTarget.textContent)
  }
  const handleClose = () => {
    console.log('handleClose work!')
    setAnchorEl(null)
    setButtonType('')
  }
  const onTestClick = (e: any) => {
    console.log(e.target.value)
    const inputValue = e.target.value
    setInputValue(inputValue)
  }
  return (
    <>
      <AppBar position="fixed" color="inherit" elevation={0} className="border">
        <Toolbar className="flex justify-between">
          <Logotype />
          <div>
            <TextField
              sx={{ input: { background: 'white' } }}
              id="standard-basic"
              label="Type your logo text..."
              variant="filled"
              margin="none"
              size="small"
              color="primary"
              onChange={onTestClick}
            />
            <IconButton className="mr-3" onClick={(e) => handleClick(e)}>
              <GridViewIcon className="mr-1" />
              <Typography>Layout</Typography>
            </IconButton>

            <LayoutMenu
              isOpen={buttonType === 'Layout'}
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
              isOpen={buttonType === 'Fonts'}
            />
          </div>
          <LogotypeColor />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Navbar
