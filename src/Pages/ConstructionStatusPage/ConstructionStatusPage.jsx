import React from 'react'
import { Paper, Grid, Container, Typography, Box, Button } from '@mui/material'
import ConstructionTable from '../../Component/ConstructionStatusPage/ConstructionTable'
import ConstructionChart from '../../Component/ConstructionStatusPage/ConstructionChart'

const headings = ["Date", "Actual complete %", "Expected"]
const rows = [
    {
        first: "Jun’20",
        second: "20%",
        secondColor: "#DB3B3B",
        third: "50%",
        
    },

    {
        first: "Aug’20",
        second: "80%",
        secondColor: "#0D7611",
        third: "90%",
        
    },
    {
        first: "Sep’20",
        second: "10%",
        secondColor: "#DB3B3B",
        third: "60%",
        
    },
    {
        first: "Dec’20",
        second: "50%",
        secondColor: "#FF6D00",
        third: "75%",
        
    },
    {
        first: "Feb’21",
        second: "70%",
        secondColor: "#FBC11B",
        third: "80%",
        
    }
]

function ConstructionStatusPage() {
  return (
    <div>
        <Paper variant="BGF9FBFF" sx={{ height: "100vh", boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Construction Status </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "auto", px: "7px", backgroundColor: "#4ABC4F" }}>
                            On-time
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: "19px", display: "flex", }}>
                        <Button variant="OnButton">
                        On-time
                        </Button>

                        <Button variant="OnButton" sx={{ ml: "10px" }}>
                        No risk
                        </Button>

                        
                    </Box>

                    {/* <Box sx={{ textAlign: "left", mt: "10px" }}>
                        <Typography variant="fs15fw700" lineHeight="32px" letterSpacing="0.01em">
                            <span style={{ color: "#005DAF" }}> 1140 </span> units available.
                        </Typography>
                    </Box> */}

                    <Box sx={{ textAlign: "left", mt: "20px" }}>
                        <Typography variant="fs14fw500" fontWeight={700} lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            Construction is <Typography component="span" variant="redBadge"> delayed </Typography> and looks unlikely to be completed by August’22. 
                                  
                        </Typography>
                    </Box>

                </Container>
                <Box sx={{ mt: "26px" }}>
                    <ConstructionTable rows = { rows } headings = { headings }/>
                </Box>

                <Container variant="ct25" sx={{ textAlign: "left", mt: "16px" }}>
                    <Typography variant="seeAll"> See Past quarter reports </Typography>
                    <Box sx={{mt: "22px"}}>
                    <ConstructionChart />
                    </Box>
                </Container>
                </Paper>
                
    </div>
  )
}

export default ConstructionStatusPage