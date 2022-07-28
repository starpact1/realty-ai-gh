import React from 'react'
import { Button, Container, Grid, Paper, Typography, styled, ButtonBase, Box } from '@mui/material'
import BackIcon from "../../Images/Icon/back-icon.png"
import FilterIcon1 from "../../Images/Icon/filter1.png"
import NavBar2 from './NavBar2'
import { Link, animateScroll as scroll } from "react-scroll";
import "./Tabs.css"
import { useNavigate } from 'react-router-dom'


function Header({ keys }) {

    const navigate = useNavigate()

    return (
        <div>
            <Container variant="ct13" sx={{ position: "fixed", top: 0, backgroundColor: "#ffffff" }}>
                <Paper elevation={0} sx={{ backgroundColor: "inherit", p: 0 }}>
                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px" }}>

                        <Grid item xs={1} sx={{ textAlign: "left", }}>
                            <ButtonBase onClick={() => navigate(-1)}>
                                <img src={BackIcon} />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={11} sx={{ textAlign: "center" }}>
                            <Typography variant="heading3" fontSize="22px">
                                Gallery
                            </Typography>
                        </Grid>
                    </Grid>

                    <Box className="overflowHidden" sx={{ overflow: "auto", }}>
                        <Box sx={{ display: "flex", justifyContent: "start", gap: "2px", borderBottom: "1px solid #DBDBDB", px: "1px" }}>
                            {keys?.map((item, k) =>

                                <Box key={k} sx={{ whiteSpace: "nowrap", fontSize: "14px", pb: "8px", color: "#263238", textTransform: "capitalize", fontWeight: "400", }}>
                                    <Link
                                        activeClass="active"
                                        to={item}
                                        spy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}
                                        style={{ paddingBottom: "8.1px", paddingLeft: "8px", paddingRight: "8px" }}
                                    >
                                        {item}
                                    </Link>
                                </Box>

                            )}


                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}

export default Header