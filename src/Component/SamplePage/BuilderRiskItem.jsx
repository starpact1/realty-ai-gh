import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Construction from "../../Images/Icon/construction.png"

function BuilderRiskItem({title, image, status, statusColor}) {
  return (
    <div style={{width: "100%"}}>
        <Paper elevation={6} sx={{ borderRadius: "5px",  width: "100%"  }}>
            <Box sx={{ display: "flex", py: "12px", height: "120px", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                <img src={image} style={{height: "30px"}} />
                <Box sx={{textAlign: "center"}}>
                    <Typography variant="fs15fw700"> {title} </Typography>
                </Box>
                <Typography variant="fs14fw500" color={statusColor} fontWeight="700"> {status} </Typography>
            </Box>
            
        </Paper>
    </div>
  )
}

export default BuilderRiskItem