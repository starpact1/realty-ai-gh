import { Box, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function DesktopView() {
    return (
        <div>
            <Container>
                <Box sx={{display: "flex", width: "100%", height: "100vh", alignItems: "center", justifyContent:"center"}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper sx={{px:12, py: 12, background: "linear-gradient(98.35deg, #00286B -3.15%, #1D58AF 34.38%, #1433FF 76.96%)"
}}>
                                <Typography variant='h4' color="white">
                                    Desktop View is not available
                                </Typography>
                                <Typography variant='h6' color="white" mt={2}>
                                    Please Open the website in a mobile device.
                                </Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default DesktopView