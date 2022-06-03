import CloseIcon from '@mui/icons-material/Close'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import * as React from 'react'

interface ModalBlockProps {
  title?: string
  children: React.ReactNode
  visible?: boolean
  handleClose: () => void
}

const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  children,
  visible = false,
  handleClose,
}): React.ReactElement | null => {
  if (!visible) {
    return null
  }
  return (
    <Dialog open={visible} onClose={handleClose} fullWidth>
      <DialogTitle
        id="form-dialog-title"
        className="flex justify-between font-bold text-4xl pl-30 w-full">
        {title}
        <IconButton onClick={handleClose}>
          <CloseIcon className="font-bold" color="primary" />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default ModalBlock
