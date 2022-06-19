import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import ValueSlider from '../ValueSlider'

const marks = [
    {
      value: 0,
      scaledValue: 0,
      label: "0%"
    },
    {
      value: 1,
      scaledValue: 1,
      label: "1%"
    },
    {
      value: 2,
      scaledValue: 2,
      label: "2%"
    },
    {
        value: 3,
        scaledValue: 3,
        label: "3%"
      },
      {
        value: 8,
        scaledValue: 8,
        label: "8%"
      },
   
  ];

function RentalYield() {
  return (
    <div>
        <Paper variant="square" sx={{mt: "15px", py: "20px"}}>
            <Container variant="ct" sx={{ textAlign: "left"}}>
                <Typography variant="heading2" lineHeight="26px"> Rental Yield </Typography>
            </Container>
            <Box sx={{px: "43px", mt: "23px" }}>
              <ValueSlider min={0} max={8} valueDisplay="auto" defaultValue={[0, 6]} marks={marks}/>
            </Box>
        </Paper>
    </div>
  )
}

export default RentalYield