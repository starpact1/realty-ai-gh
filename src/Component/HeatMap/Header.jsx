import React from 'react'
import { Button, Container, Grid, Paper, Typography, styled, ButtonBase } from '@mui/material'
import BackIcon from "../../Images/Icon/back-icon.png"
import FilterIcon1 from "../../Images/Icon/filter1.png"

const MapButton = styled(ButtonBase)(({ theme }) => ({

    height: "48px",
    paddingTop: "14px",
    paddingLeft: "14px",
    paddingBottom: "16px",
    paddingRight: "14px",
    background: "#FFFFFF",
    border: "0.8px solid #D6D6D6",
    borderRadius: "12px",
  
  }))

function Header() {
  return (
    <div>
        <Container variant="ct13" >
                <Paper elevation={0} sx={{ backgroundColor : "inherit", p : 0 }}>
                    <Grid container sx = {{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px" }}>

                        <Grid item xs={4} sx={{ textAlign: "left",  }}>
                            <img src={BackIcon} />
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "center" }}>
                            <Typography variant="heading3"  fontSize="22px">
                            Heatmap
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "right" }}>
                        <MapButton sx={{ flexDirection: "column", height: "48px", pt: "9px", pb: "4px", px: "9px" }}>
                <img src={FilterIcon1} />

                <Typography variant="fs10fw500" lineHeight="183.2%" color="inherit"> Filters </Typography>
              </MapButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
    </div>
  )
}

export default Header