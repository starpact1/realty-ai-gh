import React from 'react'
import { Box, Button, ButtonBase, Container, Grid, Paper, styled, Typography } from '@mui/material'
import WhishListBlank from "../../Images/Icon/WhisListBlank.png"
import WhishListFilled from "../../Images/Icon/whishList.png"
import BestPropertyImage from "../../Images/Image1/BestPropertyImage.png"
import FinancialIndicator from './FinancialIndicator'
import HomeUnits from "../../Images/Icon/HomeUnits.png"
import Graph1 from "../../Images/Icon/graph1.png"
import HomeRupees from "../../Images/Icon/home-rupees.png"
import Builder from "../../Images/Icon/Builder.png"
import Location from "../../Images/Icon/Location.png"
import Layout from "../../Images/Icon/Layout.png"
import "./SearchAndSort.css"
import ProjectRisk from './ProjectRisk'

const Box2 = styled(Box)(({ theme }) => ({
    marginRight: "8px"
}))

const text1 = {

    text1: "Total units sold",
    text2: "145/280 (52%)",
    text2Color: "#02BE62",
    textBadgeText: "Good",
    textBadgeBackgroundColor: "rgba(166, 252, 169, 0.5)",
    textBadgeColor: "#0D7611"
}

const text2 = {

    text1: "Appreciation",
    text2: "8.0%",
    text2Color: "#E49500",
    textBadgeText: "AVERAGE",
    textBadgeBackgroundColor: "rgba(255, 248, 189, 0.804);",
    textBadgeColor: "#E49500"
}

const text3 = {

    text1: "Rental Yield",
    text2: "2.5%",
    text2Color: "#DB3B3B",
    textBadgeText: "BAD",
    textBadgeBackgroundColor: "rgba(255, 135, 135, 0.25)",
    textBadgeColor: "#DB3B3B"
}

const Ptext1 = {

    text1: "Builder",
    text2: "GRADE-A",
    text2Color: "#02BE62",
    text3: "Raheja Builders ",
    text4: "Construction going on time"
}

const Ptext2 = {

    text1: "Location",
    text2: "8.7",
    text2Color: "#E49500",
    text3: "Surrounded by business hubs",
    text4: ""
}

const Ptext3 = {

    text1: "Layout",
    text2: "4.5",
    text2Color: "#DB3B3B",
    text3: "Society has appropriate layout with great aesthetics"
}

function BestProjects({ mt = 0, wishlist = false }) {
    return (
        <div>
            <Paper variant="E9F2FF" sx={{ mt: `${mt}`, pb: "23px" }}>
                <Paper variant="square" sx={{ border: "0.5px solid #47AFFF", borderRadius: "10px", py: "0px" }}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Box sx={{ width: "100%", height: "100%", backgroundImage: `url(${BestPropertyImage})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>

                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Container variant="ct10" sx={{ py: "10px" }}>
                                <Grid container>
                                    <Grid item xs={2}>
                                        <Paper variant="score" sx={{ px: "6px", py: "8px", fontSize: "14px", lineHeight: "100%" }}>
                                            8.2
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={8} sx={{ textAlign: "left", pl: "8px" }}>
                                        <Typography component="h2" variant="fs12fw700" color="#323643" >
                                            Strong Buy
                                        </Typography>

                                        <Typography component="h2" variant="fs12fw700" color="#323643" >
                                            for <span style={{ textDecoration: "underline" }}> long term investment </span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ButtonBase sx={{ px: "11px", py: "12px", }}>
                                            {wishlist ?
                                                <img src={WhishListFilled} />
                                                :
                                                <img src={WhishListBlank} />
                                            }
                                        </ButtonBase>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs={12} sx={{ textAlign: "left" }}>
                                        <Typography variant="fs11fw500" component="h2"> 1 BHK, 2BHK in Wadhwani Pristine </Typography>
                                        <Typography variant="fs10fw500lh130" component="h2"> Lower Parel, Mumbai </Typography>
                                        <ul style={{ margin: 0, padding: "0px", paddingTop: "4px", paddingLeft: "18px", }}>
                                            <li>
                                                <Typography variant="fs10fw500lh130">
                                                    Possession: Jul’ 25
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="fs10fw500lh130">
                                                    Build-up Area: 3000-4500 sqft
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="fs10fw500lh130">
                                                    Price: Rs/ 8L - 12L  (Rs. 6500/sqft)
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Paper>

                <Box sx={{ textAlign: "left", pt: "10px" }}>
                    <Container variant="ct10" sx={{ pr: "0px" }}>
                        <Typography variant="fs15fw700lh130" mt="10px">
                            Financial indicators:
                        </Typography>
                        <Box className="overflowHidden" sx={{ mt: "10px", py: "4px", px: "4px", display: "flex", overflow: "auto" }}>

                            <Box2>
                                <FinancialIndicator image1={HomeUnits} textContent={text1} />
                            </Box2>
                            <Box2>
                                <FinancialIndicator image1={Graph1} textContent={text2} />
                            </Box2>
                            <Box2>
                                <FinancialIndicator image1={HomeRupees} textContent={text3} />
                            </Box2>


                        </Box>

                    </Container>

                </Box>

                <Box sx={{ textAlign: "left", pt: "10px" }}>
                    <Container variant="ct10" sx={{ pr: "0px" }}>
                        <Typography variant="fs15fw700lh130" mt="10px">
                            Project risks & Livability factors:
                        </Typography>
                        <Box className="overflowHidden" sx={{ mt: "10px", py: "4px", display: "flex", overflow: "auto" }}>

                            <Box2>
                                <ProjectRisk image1={Builder} textContent={Ptext1} />
                            </Box2>
                            <Box2>
                                <ProjectRisk image1={Location} textContent={Ptext2} />
                            </Box2>
                            <Box2>
                                <ProjectRisk image1={Layout} textContent={Ptext3} />
                            </Box2>


                        </Box>

                    </Container>

                </Box>
            </Paper>
        </div>
    )
}

export default BestProjects