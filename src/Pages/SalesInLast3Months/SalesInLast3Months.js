import React, { useState } from 'react'
import { Box, Button, ButtonBase, Collapse, Container, Grid, Paper, Table, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import BasicTable from '../../Component/SalesGraph/BasicTable'
import Chart2 from '../../Component/SalesInLast3Months/Chart2'


const headings = ["Similar Projects", "Sales in last quarter", "Sales/Total"]
const rows = [
    {
        first: "Anindya",
        second: "13",
        third: "144/280 (50%)"
    },
    {
        first: "Rajpushpa",
        second: "24",
        third: "208/280 (50%)"
    },
    {
        first: "Anjan",
        second: "15",
        third: "154/280 (50%)"
    }
]

function SalesInLast3Months() {

    const [seeMore, setSeeMore] = useState(false)

    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ boxShadow: "none", mt: "-25px", minHeight: "100vh" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Sales in last 3 months </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "61px" }}>
                                GOOD
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: "19px", display: "flex", }}>
                        <Button variant="OnButton">
                            High Demand
                        </Button>

                        <Button variant="OnButton" sx={{ ml: "10px" }}>
                            Selling Fast
                        </Button>
                    </Box>

                    <Box sx={{ mt: "20px", display: "flex", alignItems: "center" }}>

                        <Box sx={{ mr: "10px" }}>
                            <Typography variant="fs14fw500" color="#323232">
                                Sales in last quarter is
                            </Typography>
                        </Box>
                        <Paper variant="saleScore" sx={{ textDecoration: "none" }} >
                            34
                        </Paper>


                    </Box>

                    {/* <Box sx={{ textAlign: "left", mt: "10px" }}>
                        <Typography variant="fs15fw700" lineHeight="32px" letterSpacing="0.01em">
                            <span style={{ color: "#005DAF" }}> 1140 </span> units available.
                        </Typography>
                    </Box> */}

                    <Box sx={{ textAlign: "left", mt: "10px" }}>
                        <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            The project has  <Typography component="span" variant="greenBadge"> sold more units </Typography>  than the  average for other projects in the locality.
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "left", mt: "10px" }}>
                        <ButtonBase onClick={ () => setSeeMore( prev => !prev) } sx={{ width: "100%", textAlign: "left", justifyContent: "start" }}>
                            <Typography variant="seeAll" lineHeight="18px" letterSpacing="0.01em"  >
                                {seeMore ? "See Less" : "See sales of units over time "}
                                
                            </Typography>
                        </ButtonBase>

                    </Box>
                </Container>



                <Box sx={{ mt: "20px" }}>
                    <Container variant="ct22">
                        <Chart2 />
                    </Container>

                </Box>

                <Box sx={{ width: "100%", mt: "20px" }}>
                    <Collapse in={seeMore}>
                        <BasicTable headings={headings} rows={rows} />
                    </Collapse>

                </Box>
            </Paper>
        </div>
    )
}

export default SalesInLast3Months