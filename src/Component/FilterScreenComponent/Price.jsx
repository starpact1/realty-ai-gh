import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import ValueSlider from '../ValueSlider'

function Price() {

  const marks = [
    {
      value: 5000000,
      scaledValue: 5000000,
      label: "₹ 50L"
    },
    {
      value: 7500000,
      scaledValue: 750000,
      label: "₹ 75L"
    },
    {
      value: 10000000,
      scaledValue: 1000000,
      label: "₹ 1Cr"
    },
   
  ];

  return (
    <div>
        <Paper variant="square" sx={{mt: "15px", py: "20px"}}>
            <Container variant="ct" sx={{ textAlign: "left"}}>
                <Typography variant="heading2" lineHeight="26px"> Price </Typography>
            </Container>
            <Box sx={{px: "43px", mt: "23px" }}>
              <ValueSlider min={5000000} max={10000000} valueDisplay="auto" defaultValue={[5000000, 7500000]} marks={marks}/>
            </Box>
        </Paper>
    </div>
  )
}

export default Price