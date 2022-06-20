import React from 'react'
import { Box, Button, ButtonBase, Container, Grid, InputBase, Paper, Table, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import BasicTable from '../../Component/SalesGraph/BasicTable'
import Chart2 from '../../Component/SalesInLast3Months/Chart2'
import BasicTable2 from '../../Component/AppreciationPage/BasicTable2'
import AppreciationChart from '../../Component/AppreciationPage/AppreciationChart'
import StaticDisplaySlider from '../../Component/AppreciationPage/StaticDisplaySlider'

const headings = ["Date", "Rate (Rs/sqft)", "Appreciation (YoY)"]

const rows = [
    {
        first: "Jun’20",
        firstLink: "",
        second: "4650",
        third: "10%",
        thirdColor: "#FF3E3E",
        thirdCarret: "down",
        

    },
    {
        first: "Aug’20",
        firstLink: "",
        second: "3346",
        third: "15%",
        thirdColor: "#FF3E3E",
        thirdCarret: "down",
        
    },
    {
        first: "Sep’20",
        firstLink: "",
        second: "1129",
        third: "30%",
        thirdColor: "#4ABC4F",
        thirdCarret: "up",
       
    },
    {
        first: "Dec’20",
        firstLink: "",
        second: "2234",
        third: "15%",
        thirdColor: "#FF3E3E",
        thirdCarret: "down",
        
    },
    {
        first: "Feb’21",
        firstLink: "",
        second: "5643",
        third: "30%",
        thirdColor: "#FF3E3E",
        thirdCarret: "down",
        
    }
]

function PastAppreciationPage() {
    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ height: "100vh", boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Past Appreciation </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "61px", backgroundColor: "#FF3E3E" }}>
                                18%
                            </Paper>
                        </Grid>
                    </Grid>




                    {/* <Box sx={{ textAlign: "left", mt: "10px" }}>
            <Typography variant="fs15fw700" lineHeight="32px" letterSpacing="0.01em">
                <span style={{ color: "#005DAF" }}> 1140 </span> units available.
            </Typography>
        </Box> */}

                    <Box sx={{ textAlign: "left", mt: "22px" }}>
                        <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                        The project or locality has appreciation 10% year on year for the past 5 years.
                        </Typography>
                    </Box>

                </Container>


                <Box sx={{ width: "100%", mt: "20px" }}>
                    <BasicTable2 headings={headings} rows={rows} padding="6px" />
                </Box>

                <Box sx={{ width: "100%", mt: "25px" }}>
                    <Container variant="ct25">
                        <AppreciationChart />
                    </Container>

                </Box>

                
            </Paper>
        </div>
    )
}

export default PastAppreciationPage