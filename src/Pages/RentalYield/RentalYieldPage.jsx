import React from 'react'
import { Box, Button, ButtonBase, Container, Grid, InputBase, Paper, Table, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import BasicTable from '../../Component/SalesGraph/BasicTable'
import Chart2 from '../../Component/SalesInLast3Months/Chart2'
import BasicTable2 from '../../Component/AppreciationPage/BasicTable2'
import AppreciationChart from '../../Component/AppreciationPage/AppreciationChart'
import StaticDisplaySlider from '../../Component/AppreciationPage/StaticDisplaySlider'

const headings = ["Project", "Locality", "Rental Yield"]

const rows = [
    {
        first: "Om Towers",
        firstLink: "#",
        second: "Kandivali, Mumbai",
        third: "2%",
        thirdColor: "#E49500",


    },
    {
        first: "Raj Heights",
        firstLink: "#",
        second: "Malad, Mumbai",
        third: "1%",
        thirdColor: "#DB3B3B",


    },
    {
        first: "Kalindi Heights",
        firstLink: "#",
        second: "Vile Parle, Mumbai",
        third: "8%",
        thirdColor: "#4ABC4F",


    },
    {
        first: "Nikunj Bhavan",
        firstLink: "#",
        second: "Andheri, Mumbai",
        third: "5%",
        thirdColor: "#0D7611",

    },

]



function RentalYieldPage() {
    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ height: "100vh", boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Rental Yield </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "61px", backgroundColor: "#FBC11B" }}>
                                3%
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ textAlign: "left", mt: "22px" }}>
                        <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                        Rental yield for this project is  <Typography component="span" variant="greenBadge"> higher </Typography>  than the locality average. See rental yields of similar projects below.
                        </Typography>
                    </Box>

                </Container>


                <Box sx={{ width: "100%", mt: "20px" }}>
                    <BasicTable2 headings={headings} rows={rows} padding="6px" />
                </Box>


                <Box sx={{ mt: "20px", textAlign: "left" }}>
                    <Container variant="ct25">

                        <Typography variant="fs14fw500"> Calculate returns in the next 5 years </Typography>

                    </Container>

                    <Container variant="ct25" sx={{ mt: "6px" }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={6} sx={{ pt: "14px" }}>
                                <Typography variant="fs14fw500" fontWeight={400} > Rental Yield </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <StaticDisplaySlider min={1} max={10} defaultValue={5} valueDisplay="off" symbol="%" />
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

export default RentalYieldPage