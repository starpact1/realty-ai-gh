import React from 'react'

import { Box, Button, ButtonBase, Container, Grid, InputBase, Paper, Table, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import BasicTable2 from '../../Component/AppreciationPage/BasicTable2'
import StaticDisplaySlider from '../../Component/AppreciationPage/StaticDisplaySlider'

import BasicTable3 from '../../Component/EaseOfReselling/BasicTable3'

const headings = ["Project", "Rental Units available", "Total Units", "Ratio 1=Rental units available/total units",]

const rows = [
    {
        first: "Om Towers, Andheri",
        firstLink: "",
        second: "2400",
        third: "1100",

        fourth: "0.84",
        fourthBackground: "rgba(172, 195, 255, 0.29);"



    },
    {
        first: "Raj Heights, Malad",
        firstLink: "",
        second: "3200",
        third: "1200",

        fourth: "0.67",
        fourthBackground: "rgba(172, 195, 255, 0.29);"


    },
    {
        first: "Kokapet, Powai",
        firstLink: "",
        second: "2600",
        third: "1600",

        fourth: "0.99",
        fourthBackground: "rgba(172, 195, 255, 0.29);"


    },
    {
        first: "Naman, Malad",
        firstLink: "",
        second: "3300",
        third: "1300",

        fourth: "0.56",
        fourthBackground: "rgba(172, 195, 255, 0.29);"


    },

]


function EaseOfRenting() {
    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ height: "100vh", boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Ease of Renting </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "61px", backgroundColor: "#DB3B3B" }}>
                                LOW
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ textAlign: "left", mt: "22px" }}>
                        <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            Renting out units in this project is not easy as
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "left", pl: "25px" }}>
                        {/* <Container variant="ct25"> */}
                        <ul className="addSpace">
                            <li>
                                <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                                    There are many rental units available within the society (see Ratio 1)
                                </Typography>
                            </li>


                        </ul>
                        {/* </Container> */}

                    </Box>



                </Container>


                <Box sx={{ width: "100%", mt: "20px" }}>
                    <BasicTable3 highlight={true} headings={headings} rows={rows} padding="6px" />
                </Box>

            </Paper>
        </div>
    )
}

export default EaseOfRenting