import React from 'react'
import BackIcon from "../../Images/Icon/back-icon.png"
import { Button, Container, Grid, Paper, Typography } from '@mui/material'

function Header() {
  return (
    <div>
        <Container variant="ct13" sx={{borderBottom: "1px solid #D6D6D6", mt: "-25px"}}>
                <Paper elevation={0} sx={{ backgroundColor : "inherit", p : 0, }}>
                    <Grid container sx = {{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px" }}>

                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <img src={BackIcon} />
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "center" }}>
                            <Typography variant="heading3"  fontSize="22px">
                            Compare
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "right" }}>
                            
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
    </div>
  )
}

export default Header