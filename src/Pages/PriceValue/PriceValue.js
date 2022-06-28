import React from 'react'
import { Container, Paper, Grid, Typography, Box, Button } from '@mui/material'
import PriceValueTable from '../../Component/PriceValue/PriceValueTable'
import PriceValueImage from "../../Images/Image1/PriceValueImage.png"

const headings = [ "Project Name", "Locality", "Price" ]

const rows = [
  {
    first: "Om Towers",
    second: "Malad",
    third: "₹8L- 12L/sqft.",
    thirdp1: "(Over)",
    thirdColor: "#DB3B3B"

  },
  {
    first: "Leela Heights",
    second: "Kandivali",
    third: "₹1L- 2L/sqft.",
    thirdp1: "(Under)",
    thirdColor: "#E49500"

  },
  {
    first: "Raj Villa",
    second: "Ville Parle",
    third: "₹5L- 10L/sqft.",
    thirdp1: "(Perfect)",
    thirdColor: "#4ABC4F"

  },
  {
    first: "Kailash Parvat",
    second: "Andheri",
    third: "₹8L- 12L/sqft.",
    thirdp1: "(Over)",
    thirdColor: "#DB3B3B"

  }
]

function PriceValue() {
  return (
    <div>
      <Paper variant="BGF9FBFF" sx={{ height: "100vh", boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Price Value </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "auto", px: "7px", backgroundColor: "#FF3E3E" }}>
                            Overpriced
                            </Paper>
                        </Grid>
                    </Grid>


                    <Box sx={{ textAlign: "left", mt: "20px" }}>
                        <Typography variant="fs14fw500" fontWeight={700} lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            This project is priced at a <Typography component="span" variant="redBadge"> higher </Typography> value than other projects in the locality
                                  
                        </Typography>
                    </Box>

                </Container>

                <Box sx={{mt: "25px"}}>
                  <PriceValueTable rows={rows} headings={headings} />
                </Box>
                
                <Container variant="ct25">
                  <Box sx={{ py: "20px", textAlign: "left" }}>
                    <Typography variant="salesPageHeading" > Project prices in locality </Typography>
                  </Box>

                  <img src={PriceValueImage} style={{width: "100%"}} />
                
                </Container>
                

                
                </Paper>
    </div>
  )
}

export default PriceValue