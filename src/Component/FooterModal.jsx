import { Modal, Backdrop, Fade, Box, Typography, Button, ButtonBase } from '@mui/material'
import React, { useImperativeHandle } from 'react'
import { forwardRef } from 'react';
import CallUs from "../Images/Image1/CallUs.png"
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';


const FooterModal = forwardRef((props, ref) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    useImperativeHandle(ref, () => ({

        handleOpen1()
        {
            setOpen(true)
        }

        }))

  

  return (
    <div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{position: "absolute", top: "12px", right: "20px"}}>
                <ButtonBase onClick={handleClose}>
                    <CloseIcon />
                </ButtonBase>
                
            </Box>
            <img src = { CallUs } />
            <Button onClick={()=> { alert("call")}} variant="button2" sx={{ width: "100%", fontSize: "20px" }}>  <CallIcon sx= {{ mr: "12px" }} /> Call us now </Button>
            <Button variant="button2" sx={{ width: "100%", fontSize: "20px", mt: "20px", backgroundColor: "#00E676" }}>  <WhatsAppIcon sx= {{ mr: "12px" }} /> Call us now </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
})

export default FooterModal