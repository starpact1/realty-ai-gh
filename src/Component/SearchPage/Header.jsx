import React from 'react'
import { ButtonBase, Container, Grid, Paper, Typography } from '@mui/material'
import BackIcon from "../../Images/Icon/back-icon.png"
import { Link, useNavigate } from 'react-router-dom'



function Header() {

    const navigate = useNavigate();

    return (
        <div>
            <Container variant="ct13" sx={{ position: "fixed", borderBottom: "1px solid #D6D6D6", zIndex: "9999999", top: 0, backgroundColor: "#ffffff" }}>
                <Paper elevation={0} sx={{ backgroundColor: "inherit", p: 0 }}>
                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px" }}>

                        <Grid item xs={1} sx={{ textAlign: "left", }}>
                            <ButtonBase onClick={() => {navigate(-1)}}>
                            <img src={BackIcon} />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={11} sx={{ textAlign: "center" }}>
                            <Typography variant="heading3" fontSize="22px">
                                Search
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Header