import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import Header from '../../Component/HeatMap/Header'
import Search from '../../Component/HeatMap/Search'
import PreferredIndicator from '../../Component/HeatMap/PreferredIndicator'
import HeatMapImage from "../../Images/Image1/HeatMap.png"
import ValueSlider from '../../Component/ValueSlider'
import StaticFooter from "../../Component/StaticFooter"

const marks = [
  {
    value: 1,
    scaledValue: 1,
    label: "1 month"
  },
  {
    value: 62,
    scaledValue: 62,
    label: "5 Years"
  },
  {
    value: 120,
    scaledValue: 120,
    label: "10 years"
  },

];

function HeatMap() {
  return (
    <div>
      <Paper sx={{ mt: "-25px" }}>
        <Header />
        <Search />
        <PreferredIndicator />
        <Box sx={{ mt: "15px" }}>
          <img src={HeatMapImage} style={{ width: "100%" }} />
        </Box>

        <Paper sx={{ border: "none", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)" }}>
          <Container variant="ct13" sx={{ py: "15px", textAlign: "left", }}>
            <Typography variant="fs15fw700" > Choose Time Period </Typography>
            <Box sx={{ px: "25px" }}>
              <ValueSlider min={1} max={120} defaultValue={62} valueDisplay="off" marks={marks} showCurrency={false} />
            </Box>

          </Container>

        </Paper>

      </Paper>
      <Box sx={{mt: "100px"}}></Box>
      <StaticFooter />
    </div>
  )
}

export default HeatMap