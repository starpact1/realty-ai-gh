import { Paper, Grid, Container, Button, Typography, Box, } from '@mui/material'
import React from 'react'

function BuilderHistoryHeader() {
    return (
        <div>
            
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Builder History </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "auto", px: "7px", backgroundColor: "#4ABC4F" }}>
                                Grade A
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: "19px", display: "flex", }}>
                        <Button variant="OnButton">
                            Experienced
                        </Button>

                        <Button variant="OnButton" sx={{ ml: "10px" }}>
                            On-time performance
                        </Button>


                    </Box>

                    <Grid container sx={{ mt: "20px", }}>
                        
                    <Grid item xs={6} sx={{  display: "flex", justifyContent: "center", alignItems: "center", px: "12px" }}>
                            <Paper variant="saleScore" sx={{ width: "58px", textDecoration: "none" }}>
                            18  
                            </Paper>
                            <Box sx={{  textAlign: "left", ml: "5px" }}>
                                <Typography variant="fs14fw500" color="#00286B"> years of experience </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: "12px" }}>
                            <Paper variant="saleScore" sx={{ width: "58px", textDecoration: "none" }}>
                            21
                            </Paper>
                            <Box sx={{  textAlign: "left", ml: "5px" }}>
                                <Typography variant="fs14fw500" color="#00286B"> past projects </Typography>
                            </Box>
                        </Grid>
                    </Grid>


                    <Box sx={{ textAlign: "left", mt: "20px" }}>
                        <Typography variant="fs14fw500" fontWeight={700} lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            The builder has completed <Typography component="span" variant="greenBadge"> 80% </Typography> projects in time in the last 4 years. Here is the summary of all projects               
                        </Typography>
                    </Box>

                </Container>
            
        </div>
    )
}

export default BuilderHistoryHeader