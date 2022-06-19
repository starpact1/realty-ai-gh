import React from 'react'
import BackIcon from "../../Images/Icon/back-icon.png"
import { Button, Container, Grid, Paper, Typography } from '@mui/material'

function Header() {
  return (
    <div>
        <Container variant="ct13" >
                <Paper elevation={0} sx={{ backgroundColor : "inherit", p : 0 }}>
                    <Grid container sx = {{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px" }}>

                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <img src={BackIcon} />
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "center" }}>
                            <Typography variant="heading3"  fontSize="22px">
                                Filters
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "right" }}>
                            <Button variant="text" sx={{
                                color: "#1D58AF", textTransform: "none", fontFamily: "DM Sans",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "17px",
                                lineHeight: "183.2%",
                            }}>
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
    </div>
  )
}

export default Header