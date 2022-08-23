import { Paper, Container, Grid, Typography, Box, Link, } from '@mui/material'
import React from 'react'

function LegalStatus() {
    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ height: "100vh", boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Legal Status </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "61px" }}>
                                8.5
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: "26px", textAlign: "left" }}>
                        <Typography variant="fs14fw500" lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            There are <Typography component="span" variant="redBadge"> a few </Typography> legal hurdles in this project.
                        </Typography>
                    </Box>

                    <Box sx={{ mt: "20px", display: "flex", alignItems: "center" }}>

                        <Box sx={{ mr: "10px" }}>
                            <Typography variant="fs14fw500" color="#323232">
                                Litigation on this Project:
                            </Typography>
                        </Box>
                        <Paper variant="saleScore" sx={{ width: "58px" }}>
                            7
                        </Paper>
                    </Box>

                    <Box sx={{ ml: "25px", textAlign: "left" }}>
                        <ul className="addSpace">
                            <li>
                                <Typography variant="fs14fw500">
                                    Overall there are <Typography variant="greenBadge"> no serious legal risks </Typography> in this project.

                                </Typography>
                            </li>

                            <li sx={{ mt: "15px" }}>
                                <Typography variant="fs14fw500">
                                    There are  <Typography variant="redBadge"> a few complaints </Typography>  on this project. But none of them looks serious.

                                </Typography>
                            </li>

                            <li sx={{ mt: "15px" }}>
                                <Typography variant="fs14fw500">
                                    The builder has completed  <Typography variant="redBadge"> 9/10 </Typography>  RERA complainces, which means that the project health is
                                    <Typography variant="greenBadge"> outstanding. </Typography>

                                </Typography>
                            </li>
                        </ul>
                    </Box>

                    <Box sx={{ textAlign: "left" }}>
                        <Link to="#">
                            <Typography variant="fs12fw500" color="#1D58AF"> Download RERA report </Typography>

                        </Link>
                    </Box>

                </Container>
            </Paper>
        </div>
    )
}

export default LegalStatus