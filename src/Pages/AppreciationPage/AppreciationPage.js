import React from 'react'
import { Box, Button, ButtonBase, Container, Grid, Paper, Table, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import BasicTable from '../../Component/SalesGraph/BasicTable'
import Chart2 from '../../Component/SalesInLast3Months/Chart2'

const headings = ["Project", "Cancellation", "Refund Policy", "Maintainance Charges"]

const rows = [
    {
        first: "Om Towers",
        second: "100% refund within 3 months 50% refund within 1 year",
        third: "100% refund within 1 year",
        fourth: "Rs. 2/square feet for 3 years"
    },
    {
        first: "Raj Heights",
        second: "50% refund within 6 months 20% refund within 1 year",
        third: "50% refund within 1 year",
        fourth: "Rs. 5/square feet for 5 years"
    },
    {
        first: "Kalindi Heights",
        second: "45% refund within 6 months 80% refund within 1 year",
        third: "50% refund within 3 year",
        fourth: "Rs. 3/square feet for 2 years"
    },
    {
        first: "Nikunj Bhavan",
        second: "45% refund within 6 months 80% refund within 1 year",
        third: "75% refund within 3 year",
        fourth: "Rs. 3/square feet for 2 years"
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
                    <BasicTable headings={headings} rows={rows} padding="1px" />
                </Box>
            </Paper>
        </div>
    )
}

export default AppreciationPage