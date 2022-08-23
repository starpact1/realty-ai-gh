import React from 'react'
import { Box, ButtonBase, Container, Grid, Paper, styled, Typography } from '@mui/material'
import image1 from "../../Images/Image1/Sample1.png"
import BHKImage from "../../Images/Icon/BHK-White.png"
import BackIcon from "../../Images/Icon/Back-Icon-White.png"
import ShareIcon from "../../Images/Icon/Share.png"
import WishListBlank from "../../Images/Icon/Wish-List-White.png"
import Rera from "../../Images/Icon/Rera.png"
import KeyPng from "../../Images/Icon/Key.png"
import { RWebShare } from 'react-web-share'
import { Link, useNavigate } from 'react-router-dom'


const OverShadow = styled(Box)(({ theme }) => ({
    background: "linear-gradient(to bottom, transparent 40%, black 100%)",
    height: "100%",
    width: "100%",
    zIndex: "99999",
}))

const SymbolTray = styled(Box)(({ theme }) => ({

    width: "100%",
    position: "absolute",
    top: "12px"
}))

function Header() {

    const navigate = useNavigate()

    return (
        <div>

            <Box sx={{ height: "226px", position: "relative", borderRadius: "5px", background: `url(${image1})`, backgroundSize: "100%", }}>
                <OverShadow >  </OverShadow>
                <SymbolTray>
                    <ButtonBase onClick={() => navigate(-1)} sx={{ position: "absolute", left: "10px" }}>
                        <img src={BackIcon} />
                    </ButtonBase>

                    <RWebShare
                        data={{
                            text: "Starpact Global Service",
                            url: `${window.location.href}`,
                            title: "Realty AI",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <ButtonBase sx={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(0, 0, 0, 0.4)", height: "34px", borderRadius: "50%", width: "34px", right: "66px" }}>
                            <img src={ShareIcon} style={{ width: "16px", height: "16px" }} />
                        </ButtonBase>
                    </RWebShare>

                    <ButtonBase sx={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(0, 0, 0, 0.4)", height: "34px", borderRadius: "50%", width: "34px", right: "16px" }}>

                        <img src={WishListBlank} style={{ width: "11px", height: "16px" }} />

                    </ButtonBase>
                </SymbolTray>

                <Box sx={{ textAlign: "left", width: "100%", position: "absolute", px: "26px", bottom: "12px" }}>
                    <Typography variant="fs20fw700" color="#FFFFFF" component="div">
                        Om Towers
                    </Typography>
                    <Grid container sx={{ mt: "2px", }}>
                        <Grid item xs={8}  >
                            <Box sx={{ display: "flex", flexDirection: "row", pt: "10px", alignItems: "center" }}>
                                <img src={BHKImage} alt="bhk" style={{ height: "12.5px" }} />
                                <Typography variant="fs14fw500" pl="7px" color="#FFFFFF">
                                    1 BHK, 2BHK
                                </Typography>
                            </Box>

                        </Grid>

                        <Grid item xs={4}  >
                            <Box sx={{ textAlign: "right", padddingTop: "-100px", display: "flex", justifyContent: "end" }}>
                                <Paper variant="scoreBadge" sx={{ width: "61px", backgroundColor: "#4ABC4F" }}>
                                    6.5
                                </Paper>
                            </Box>

                        </Grid>


                        <Grid item xs={8}>
                            <Box sx={{ mt: "12px" }}>
                                <Typography variant="fs14fw500" fontWeight="400" component="span" lineHeight="116.7%" color="#FFFFFF">
                                    ₹ 8L- 12L/sqft.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{ mt: "12px", textAlign: "right" }}>
                            <Link to="/gallery">
                                <Typography variant="fs14fw500" component="span" lineHeight="116.7%" textDecoration="underline" color="#FFFFFF">
                                    <u>13 photos</u>
                                </Typography>
                            </Link>
                        </Grid>

                    </Grid>
                </Box>

            </Box>

            <Paper variant="square">
                <Container variant="ct25">
                    <Grid container sx={{ py: "21px" }}>
                        <Grid item xs={6}>
                            <Box sx={{ height: "26px", display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(75, 79, 156, 0.1)", borderRadius: "5px", }}>
                                <img src={Rera} style={{ height: "17px", width: "17px" }} />
                                <Typography variant="fs14fw500" fontWeight="700" color="#00286B" pl="6px"> RERA Approved </Typography>

                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box sx={{ height: "26px", display: "flex", justifyContent: "end", alignItems: "center", }}>
                                <img src={KeyPng} style={{ height: "17px", width: "17px" }} />
                                <Typography variant="fs14fw500" fontWeight="700" pl="6px"> Possession: Jul’ 25 </Typography>

                            </Box>
                        </Grid>

                        <Grid item xs={6} mt="12px">
                            <Box sx={{ height: "26px", display: "flex", justifyContent: "center", alignItems: "center", }}>

                                <Typography variant="fs14fw500" fontWeight="700" color="#00286B" pl="6px"> Area: 1500 - 2500 sqft. </Typography>

                            </Box>
                        </Grid>

                        <Grid item xs={6} mt="12px">
                            <Box sx={{ height: "26px", display: "flex", justifyContent: "end", alignItems: "center", }}>

                                <Typography variant="fs14fw500" fontWeight="700" color="#00286B" pl="6px"> Price: 1 Cr Onwards </Typography>

                            </Box>
                        </Grid>

                        <Grid item xs={12} mt="12px">
                            <Box sx={{ height: "26px", display: "flex", justifyContent: "start", alignItems: "center", }}>

                                <Typography variant="fs14fw500" pl="6px">
                                    <b> RealtyAI </b> rates this project as <Typography variant="greenBadge"> <u> STRONG BUY </u> </Typography>
                                </Typography>

                            </Box>
                        </Grid>


                    </Grid>
                </Container>
            </Paper>

        </div>
    )
}

export default Header