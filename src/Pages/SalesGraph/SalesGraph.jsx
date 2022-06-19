import { Box, Button, ButtonBase, Container, Grid, Paper, Table, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React from 'react'
import TableD from '../../Component/SalesGraph/TableD'
import BasicTable from '../../Component/SalesGraph/BasicTable'
import Chart1 from '../../Component/SalesGraph/Chart1'

const headings = ["Similar Project", "Completion %", "Sales/Total"]
const rows = [
    {
        first: "Anindya",
        second: "50%",
        third: "144/280 (50%)"
    },
    {
        first: "Rajpushpa",
        second: "50%",
        third: "208/280 (50%)"
    },
    {
        first: "Anjan",
        second: "50%",
        third: "154/280 (50%)"
    }
]

function SalesGraph() {
    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading">Sales</Typography>
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
                        <Paper variant="saleScore">
                            218
                        </Paper>
                        <Box sx={{ ml: "10px" }}>
                            <Typography variant="fs14fw500" color="#323232">
                                units sold out of total.
                            </Typography>
                        </Box>

                    </Box>

                    <Box sx={{ textAlign: "left", mt: "10px" }}>
                        <Typography variant="fs15fw700" lineHeight="32px" letterSpacing="0.01em">
                            <span style={{ color: "#005DAF" }}> 1140 </span> units available.
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "left", mt: "10px" }}>
                        <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            The project is 50% completed. At the current completion stage, the project is  <Typography component="span" variant="greenBadge"> selling faster </Typography>   than the other projects.
                        </Typography>
                    </Box>
                </Container>

                <Box sx={{ width: "100%", mt: "20px" }}>
                    <BasicTable headings={headings} rows={rows} />
                </Box>

                <Box sx={{ mt: "20px" }}>
                    <Container variant="ct22">
                        <Chart1 />
                    </Container>

                </Box>
            </Paper>
        </div>
    )
}

export default SalesGraph