import React, { useEffect, useRef, useState } from 'react'
import { Box, ButtonBase, Collapse, Container, Grid, Paper, styled, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BuilderRiskItem from './BuilderRiskItem';
import Construction from "../../Images/Icon/construction.png"
import Litigations from "../../Images/Icon/Litigations.png"
import Builder from "../../Images/Icon/builder1.png"
import AgreementClause from "../../Images/Icon/agreement-clauses.png"
import NationalPark from "../../Images/Icon/NationalPark.png"
import Layouts from "../../Images/Icon/Layout.png"
import Location from "../../Images/Icon/Location.png"
import { useNavigate } from 'react-router-dom'



const GreenBox = styled(Paper)(({ theme }) => ({
    background: "#C1FCC3",
    borderRadius: 5,
    paddingTop: "9px",
    paddingBottom: "9px",
    textAlign: "center",
    width: "100%"

}))

const RedBox = styled(Paper)(({ theme }) => ({
    background: "#FFE1E1",
    borderRadius: 5,
    paddingTop: "9px",
    paddingBottom: "9px",
    textAlign: "center",
    width: "100%"

}))

const YellowBox = styled(Paper)(({ theme }) => ({
    background: "#FFF9CA",
    borderRadius: 5,
    paddingTop: "9px",
    paddingBottom: "9px",
    textAlign: "center",
    width: "100%"

}))


function TabsBody() {

    const navigate = useNavigate()

    const [seeMore, setSeeMore] = useState(false)


    return (
        <div>
            {/* Indicators Containers */}
            <Paper variant="square" id="Indicators">
                <Container variant="ct13" sx={{ py: "25px" }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ textAlign: "left" }}>
                            <Typography variant="fs15fw700"> Key performance indicators </Typography>
                        </Grid>
                    </Grid>

                    {/* Indicators */}

                    <Grid container sx={{ mt: "22px" }}>
                        <Grid item xs={6} sx={{ textAlign: "left", px: "8px", }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/sales-graph")}>
                                <GreenBox elevation={4}>


                                    <Typography component="div" variant="fs14fw500"> Total Units Sold </Typography>

                                    <Typography component="div" variant="fs15fw700" color="#0D7611" mt="3px"> 145/280 (50.0%) </Typography>

                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                        <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> 12.2% </Typography>
                                    </Box>


                                </GreenBox>
                            </ButtonBase>

                        </Grid>

                        <Grid item xs={6} sx={{ textAlign: "left", px: "8px", }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/sales-in-last-3-months")}>
                                <RedBox elevation={4}>
                                    <Typography component="div" variant="fs14fw500"> Sales in last 3 months </Typography>

                                    <Typography component="div" variant="fs15fw700" color="#DB3B3B" mt="3px"> 13 </Typography>

                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                        <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> 24 </Typography>
                                    </Box>

                                </RedBox>
                            </ButtonBase>
                        </Grid>


                        <Grid item xs={6} sx={{ textAlign: "left", px: "8px", mt: "12px" }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/appreciation-page")}>
                                <RedBox elevation={4}>
                                    <Typography component="div" variant="fs14fw500"> Appreciation* (in 5 yrs) </Typography>

                                    <Typography component="div" variant="fs15fw700" color="#DB3B3B" mt="3px"> 8.0 % </Typography>

                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                        <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> 12.0% </Typography>
                                    </Box>

                                </RedBox>
                            </ButtonBase>
                        </Grid>


                        <Grid item xs={6} sx={{ textAlign: "left", px: "8px", mt: "12px" }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/rental-yield-page")}>
                                <RedBox elevation={4}>
                                    <Typography component="div" variant="fs14fw500"> Rental Yield </Typography>

                                    <Typography component="div" variant="fs15fw700" color="#DB3B3B" mt="3px"> 2.5 % </Typography>

                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                        <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> 4.0% </Typography>
                                    </Box>

                                </RedBox>
                            </ButtonBase>
                        </Grid>

                    </Grid>

                    {/* Indicators */}

                    <Box sx={{ textAlign: "left", mt: "22px" }}>
                        <Typography variant="fs12fw400" > <i> * indicates RealtyAI predicted values </i> </Typography>
                    </Box>

                    <Box sx={{ mt: "22px", }}>
                        <ButtonBase onClick={() => setSeeMore(prev => !prev)} sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="seeAll" fontWeight="700">
                                {seeMore ? "See less indicators -" : "See More indicators +"}

                            </Typography>

                            {seeMore ?
                                <KeyboardArrowDownIcon />
                                :
                                <KeyboardArrowUpIcon />
                            }
                        </ButtonBase>

                    </Box>

                    {/* Indicator Collapse */}

                    <Collapse in={seeMore}>

                        <Grid container sx={{ mt: "22px" }}>
                            <Grid item xs={6} sx={{ textAlign: "left", px: "8px", }}>
                                <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/price-value")}>
                                    <GreenBox elevation={4}>
                                        <Typography component="div" variant="fs14fw500"> Price Over/Under </Typography>

                                        <Typography component="div" variant="fs15fw700" color="#0D7611" mt="3px"> UNDER </Typography>

                                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> BAD </Typography>
                                        </Box>

                                    </GreenBox>
                                </ButtonBase>

                            </Grid>

                            <Grid item xs={6} sx={{ textAlign: "left", px: "8px", }}>
                                <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/past-appreciation-page")}>
                                    <RedBox elevation={4}>
                                        <Typography component="div" variant="fs14fw500"> Past Appreciation </Typography>

                                        <Typography component="div" variant="fs15fw700" color="#DB3B3B" mt="3px"> 18.0% </Typography>

                                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> 24 </Typography>
                                        </Box>

                                    </RedBox>
                                </ButtonBase>
                            </Grid>


                            <Grid item xs={6} sx={{ textAlign: "left", px: "8px", mt: "12px" }}>
                                <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/ease-of-reselling")}>
                                    <GreenBox elevation={4}>
                                        <Typography component="div" variant="fs14fw500"> Ease of Exit </Typography>

                                        <Typography component="div" variant="fs15fw700" color="#0D7611" mt="3px"> HIGH </Typography>

                                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> HIGH </Typography>
                                        </Box>

                                    </GreenBox>
                                </ButtonBase>
                            </Grid>


                            <Grid item xs={6} sx={{ textAlign: "left", px: "8px", mt: "12px" }}>
                                <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("")}>
                                    <YellowBox elevation={4}>
                                        <Typography component="div" variant="fs14fw500"> Livability Index </Typography>

                                        <Typography component="div" variant="fs15fw700" color="#E49500" mt="3px"> 2.5 % </Typography>

                                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> 7.8 </Typography>
                                        </Box>

                                    </YellowBox>
                                </ButtonBase>
                            </Grid>

                            <Grid item xs={6} sx={{ textAlign: "left", px: "8px", mt: "12px" }}>
                                <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/ease-of-renting")}>
                                    <GreenBox elevation={4}>
                                        <Typography component="div" variant="fs14fw500"> Ease of Renting </Typography>

                                        <Typography component="div" variant="fs15fw700" color="#0D7611" mt="3px"> HIGH </Typography>

                                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> Locality avg </Typography>
                                            <Typography component="span" variant="fs12fw500" color="#1B2641" mt="4px"> HIGH </Typography>
                                        </Box>

                                    </GreenBox>
                                </ButtonBase>
                            </Grid>

                        </Grid>

                    </Collapse>

                    {/* Indicators Collapse */}


                </Container>


            </Paper>

            {/* Indicators Containers */}

            {/* Builder Risk */}

            <Paper id="BuilderRisk" variant="square" sx={{ mt: "16px" }}>
                <Container variant="ct13" sx={{ py: "26px" }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ textAlign: "left" }}>
                            <Typography variant="fs15fw700"> Builder Risks </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: "26px" }}>
                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/construction-status-page")}>
                                <BuilderRiskItem title="Construction Status" image={Construction} status="ON - TIME" statusColor="#02BE62" />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <ButtonBase sx={{ width: "100%", }} onClick={() => navigate("/legal-status")}>
                                <BuilderRiskItem title="Litigations" image={Litigations} status="HIGH" statusColor="#DB3B3B" />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/builder-history")}>
                                <BuilderRiskItem title="Builder History" image={Builder} status="GRADE - A" statusColor="#02BE62" />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/agreement-clause")}>
                                <BuilderRiskItem title="Agreement Clause" image={AgreementClause} status="GOOD" statusColor="#02BE62" />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Container>

            </Paper>

            {/* Builder Risk */}

            {/* Livability Factor */}

            <Paper id="LivabilityFactor" variant="square" sx={{ mt: "16px" }}>
                <Container variant="ct13" sx={{ py: "26px" }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ textAlign: "left" }}>
                            <Typography variant="fs15fw700"> Livability Factors </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: "26px" }}>
                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/amenities-page")}>
                                <BuilderRiskItem title="Amenities" image={NationalPark} status="7.5" statusColor="7.5" />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/layouts-page")}>
                                <BuilderRiskItem title="Layouts" image={Layouts} status="5.0" statusColor="#FF6D00" />
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "left" }}>
                            <ButtonBase sx={{ width: "100%" }} onClick={() => navigate("/location-page")}>
                                <BuilderRiskItem title="Location" image={Location} status="8.5" statusColor="#02BE62" />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Container>

            </Paper>

            {/* Livability Factors */}

        </div>
    )
}

export default TabsBody