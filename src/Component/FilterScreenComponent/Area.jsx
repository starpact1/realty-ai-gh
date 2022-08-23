import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import ValueSlider from '../ValueSlider'

const marks = [
    {
      value: 1000,
      scaledValue: 1000,
      label: "1000"
    },
    {
      value: 7500,
      scaledValue: 7500,
      label: "7500"
    },
    {
      value: 10000,
      scaledValue: 10000,
      label: "10000"
    },
   
  ];

function Area() {
  return (
    <div>
        <Paper variant="square" sx={{mt: "15px", py: "20px"}}>
            <Container variant="ct" sx={{ textAlign: "left"}}>
                <Typography variant="heading2" lineHeight="26px"> Area (sqft) </Typography>
            </Container>
            <Box sx={{px: "43px", mt: "23px" }}>
              <ValueSlider min={1000} max={10000} valueDisplay="auto" defaultValue={[1000, 7500]} marks={marks}/>
            </Box>
        </Paper>
    </div>
  )
}

export default Area