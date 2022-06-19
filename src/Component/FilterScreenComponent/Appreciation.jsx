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
      value: 10,
      scaledValue: 10,
      label: "10%"
    },
    {
      value: 15,
      scaledValue: 15,
      label: "15%"
    },
    {
        value: 20,
        scaledValue: 20,
        label: "20%"
      },
      {
        value: 30,
        scaledValue: 30,
        label: "30%"
      },
   
  ];

function Appreciation() {
  return (
    <div>
        <Paper variant="square" sx={{mt: "15px", py: "20px"}}>
            <Container variant="ct" sx={{ textAlign: "left"}}>
                <Typography variant="heading2" lineHeight="26px"> Appreciation </Typography>
            </Container>
            <Box sx={{px: "43px", mt: "23px" }}>
              <ValueSlider min={0} max={30} valueDisplay="auto" defaultValue={[0, 22]} marks={marks}/>
            </Box>
        </Paper>
    </div>
  )
}

export default Appreciation