import React, { useState } from 'react'
import { Box } from '@mui/system'
import LayoutImage2D from "../../Images/Image1/Layouts2D.png"
import LayoutImage3D from "../../Images/Image1/LayoutImage3D.png"
import ToggleButton2D3D from './ToggleButton2D3D'
import { Typography } from '@mui/material'

function LayoutImage() {
    const [display, setDisplay] = useState("2D")
    const getDisplayType = (type1) => {
        
        setDisplay(type1)
        
    }
  return (
    <div>
        <Box sx={{position: "relative", width: "100%", height: "206px", }}>
            <Box sx={{ position: "absolute", border: "green", top: "10px", right: "25px" }}>
                <ToggleButton2D3D gdt={getDisplayType}/>
            </Box>
            {display === "2D" ?  <img src={LayoutImage2D} style={{ maxWidth: "100%", maxHeight: "100%" }}/> : display === "3D" &&  <img src={LayoutImage3D} style={{ maxWidth: "100%", maxHeight: "100%" }}/> }  
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-around", mt: "12px"}} >
            <Typography variant="fs13fw500"> Carpet Area: <span style={{color: "#00286B"}}> 731 m² </span> </Typography>
            <Typography variant="fs13fw500" sx={{ mr: "12px" }}> Super Built Area: <span style={{color: "#00286B"}}> 1673 m² </span> </Typography>
        </Box>
    </div>
  )
}

export default LayoutImage