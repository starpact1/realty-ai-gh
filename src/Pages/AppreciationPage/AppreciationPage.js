import React from 'react'
import { Box, Button, ButtonBase, Container, Grid, InputBase, Paper, Table, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import BasicTable from '../../Component/SalesGraph/BasicTable'
import Chart2 from '../../Component/SalesInLast3Months/Chart2'
import BasicTable2 from '../../Component/AppreciationPage/BasicTable2'
import AppreciationChart from '../../Component/AppreciationPage/AppreciationChart'
import StaticDisplaySlider from '../../Component/AppreciationPage/StaticDisplaySlider'

const headings = ["Project", "Locality", `Appreciation \n (in next 5 years)`, "Appreciation \n (current rate)"]

const rows = [
    {
        first: "Om Towers",
        firstLink: "#",
        second: "Kandivali, Mumbai",
        third: "30%",
        thirdColor: "#FF3E3E",
        thirdCarret: "down",
        fourth: "30%",
        fourthColor: "#FF3E3E",
        fourthCarret: "down",

    },
    {
        first: "Raj Heights",
        firstLink: "#",
        second: "Malad, Mumbai",
        third: "20%",
        thirdColor: "#FF3E3E",
        thirdCarret: "down",
        fourth: "20%",
        fourthColor: "#FF3E3E",
        fourthCarret: "down",
    },
    {
        first: "Kalindi Heights",
        firstLink: "#",
        second: "Vile Parle, Mumbai",
        third: "80%",
        thirdColor: "#4ABC4F",
        thirdCarret: "up",
        fourth: "80%",
        fourthColor: "#4ABC4F",
        fourthCarret: "up",
    },
    {
        first: "Nikunj Bhavan",
        firstLink: "#",
        second: "Andheri, Mumbai",
        third: "10%",
        thirdColor: "#FF3E3E",
        thirdCarret: "down",
        fourth: "10%",
        fourthColor: "#FF3E3E",
        fourthCarret: "down",
    }
]

function AppreciationPage() {
    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Appreciation </Typography>
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
                            This is approximate returns based on historic appreciation in the locality & predicted livability index in the future. This project has an average expected return on investment.
                        </Typography>
                    </Box>

                </Container>



                {/* <Box sx={{ mt: "20px" }}>
                    <Container variant="ct22">
                        <Chart2 />
                    </Container>

                </Box> */}

                <Box sx={{ width: "100%", mt: "20px" }}>
                    <BasicTable2 highlight={true} headings={headings} rows={rows} padding="6px" />
                </Box>

                <Box sx={{ width: "100%", mt: "25px" }}>
                    <Container variant="ct25">
                        <AppreciationChart />
                    </Container>

                </Box>

                <Box sx={{ mt: "20px" }}>
                    <Typography variant="fs14fw500"> Appreciation </Typography>
                </Box>

                <Box sx={{ mt: "20px", textAlign: "left" }}>
                    <Container variant="ct25">

                        <Typography variant="fs14fw500"> Calculate returns in the next 5 years </Typography>

                    </Container>

                    <Container variant="ct25" sx={{ mt: "6px" }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={6} sx={{ pt: "14px" }}>
                                <Typography variant="fs14fw500" fontWeight={400} > Appreciation </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <StaticDisplaySlider min={0} max={100} defaultValue={50} valueDisplay="off" symbol="%" />
                            </Grid>

                        </Grid>
                    </Container>

                    <Container variant="ct25" sx={{ mt: "-12px" }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={6} sx={{ pt: "14px" }}>
                                <Typography variant="fs14fw500" fontWeight="400" > Time Period </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <StaticDisplaySlider min={1} max={10} defaultValue={5} valueDisplay="off" symbol=" years" />
                            </Grid>

                        </Grid>
                    </Container>

                    <Container variant="ct25" sx={{ mt: "12px" }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="fs14fw500" fontWeight="400" > Amount Invested </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <InputBase type="seacrh" sx={{ height: "48px", fontSize: "11px", fontWeight: "400", lineHeight: "18px", height: "30px", borderRadius: "5px" }} className="roundedInput1"
                                    placeholder=" Amount Invested " fullWidth />
                            </Grid>

                        </Grid>
                    </Container>

                    <Container variant="ct25" sx={{ mt: "28px" }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="fs14fw500" fontWeight="400" > Return </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <InputBase type="seacrh" sx={{ height: "48px", fontSize: "11px", fontWeight: "400", lineHeight: "18px", height: "30px", borderRadius: "5px" }} className="roundedInput1"
                                    placeholder=" Return " fullWidth />
                            </Grid>

                        </Grid>
                    </Container>

                </Box>
            </Paper>
        </div>
    )
}

export default AppreciationPage