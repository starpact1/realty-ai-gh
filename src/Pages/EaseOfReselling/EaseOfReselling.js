import React from 'react'
import { Box, Button, ButtonBase, Container, Grid, InputBase, Paper, Table, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import BasicTable2 from '../../Component/AppreciationPage/BasicTable2'
import StaticDisplaySlider from '../../Component/AppreciationPage/StaticDisplaySlider'
import "./EaseOFReselling.css"
import BasicTable3 from '../../Component/EaseOfReselling/BasicTable3'

const headings = ["Project", "Primary Sales", "Resale", "Total Units", "Ratio 1 = Resale / total units", "Ratio 2 = Primary Sales / total units"]

const rows = [
    {
        first: "Om Towers, Andheri",
        firstLink: "",
        second: "2400",
        third: "800",

        fourth: "1100",
        fifth: "0.84",
        fifthBackground: "rgba(172, 195, 255, 0.29)",
        sixth: "0.84"


    },
    {
        first: "Raj Heights, Malad",
        firstLink: "",
        second: "3200",
        third: "1000",

        fourth: "1200",
        fifth: "0.67",
        fifthBackground: "rgba(172, 195, 255, 0.29);",
        sixth: "0.84"


    },
    {
        first: "Kokapet, Powai",
        firstLink: "",
        second: "2600",
        third: "900",

        fourth: "1600",
        fifth: "0.99",
        fifthBackground: "rgba(172, 195, 255, 0.29);",
        sixth: "0.84"


    },
    {
        first: "Naman, Malad",
        firstLink: "",
        second: "3300",
        third: "670",

        fourth: "1300",
        fifth: "0.56",
        fifthBackground: "rgba(172, 195, 255, 0.29);",
        sixth: ""

    },

]

const headings1 = ["Locality", "Demand", "Supply", "Ratio 3 = Demand/Supply"]

const rows1 = [
    {
        first: "Andheri",
        second: "2400",
        third: "1100",
        fourth: "0.84"


    },

    {
        first: "Malad",
        second: "3200",
        third: "1200",
        fourth: "0.67"
    },
    {
        first: "Powai",
        second: "2600",
        third: "1600",
        fourth: "0.99"

    },
    {
        first: "Kandivali",
        second: "3300",
        third: "1300",
        fourth: "0.56"

    },

]


function EaseOfReselling() {
    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ height: "100vh", boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Ease of Reselling </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "61px", backgroundColor: "#DB3B3B" }}>
                                LOW
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ textAlign: "left", mt: "22px" }}>
                        <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            Resale is not easy in this project as
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "left", pl: "25px" }}>
                        {/* <Container variant="ct25"> */}
                        <ul className="addSpace">
                            <li>
                                <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                                    Only a few units are on resale within the project (Ratio 1)
                                </Typography>
                            </li>

                            <li sx={{ mt: "15px" }}>
                                <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                                    The project has high project sales (Ratio 2)
                                </Typography>
                            </li>
                        </ul>
                        {/* </Container> */}

                    </Box>



                </Container>


                <Box sx={{ width: "100%", mt: "20px" }}>
                    <BasicTable3 headings={headings} rows={rows} padding="6px" />
                </Box>

                <Container variant="ct25">
                    <Box sx={{ textAlign: "left", pl: "25px", mt: "21px", mb: "21px" }}>
                        {/* <Container variant="ct25"> */}
                        <ul className="addSpace">
                            <li>
                                <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                                    There is   <Typography component="span" variant="greenBadge"> more demand </Typography>  compared to supply in locality (Ratio 3). This means that the unit will sell easily unless a lot of new projects are launched in the area.
                                </Typography>
                            </li>


                        </ul>
                        {/* </Container> */}

                    </Box>
                </Container>

                <Box sx={{ width: "100%", mt: "20px" }}>
                    <BasicTable3 headings={headings1} rows={rows1} padding="6px" />
                </Box>

            </Paper>
        </div>
    )
}

export default EaseOfReselling