import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import ValueSlider from '../ValueSlider'

const marks = [
    {
      value: 0,
      scaledValue: 0,
      label: "Low"
    },
    {
      value: 50,
      scaledValue: 50,
      label: "Medium"
    },
    {
      value: 100,
      scaledValue: 100,
      label: "High"
    },
    
    ]

function Risk() {
  return (
    <div>
        <Paper variant="square" sx={{mt: "15px", py: "20px"}}>
            <Container variant="ct" sx={{ textAlign: "left"}}>
                <Typography variant="heading2" lineHeight="26px"> Risk </Typography>
            </Container>
            <Box sx={{px: "43px", mt: "23px" }}>
              <ValueSlider min={0} max={100} valueDisplay="auto" defaultValue={[0, 22]} marks={marks}/>
            </Box>
        </Paper>
    </div>
  )
}

export default Risk