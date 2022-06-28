import React, { useState } from 'react'
import { Paper, Container, Grid, Box, Typography, Button, ButtonBase, styled, Collapse, Fade } from '@mui/material'
import BasicTable3 from '../../Component/EaseOfReselling/BasicTable3'
import MapImage from "../../Images/Image1/MapImage.png"
import MapImage2 from "../../Images/Image1/MapImage2.png"
import BasicTable4 from "../../Component/LocationPage/BasicTable4"
import CircleIcon from '@mui/icons-material/Circle';

const headings = ["Locality", "Sales in 3 months", "Available Units", "Growth"]
const rows = [
    {
        first: "Chembur",
        firstLink: "#",
        second: "500",
        third: "1133",
        fourth: "15%"
    },
    {
        first: "Andheri",
        firstLink: "#",
        second: "400",
        third: "1231",
        fourth: "25%"
    },
    {
        first: "Malad",
        firstLink: "#",
        second: "300",
        third: "1620",
        fourth: "10%"
    },
    {
        first: "Vasai",
        firstLink: "#",
        second: "200",
        third: "1324",
        fourth: "15%"
    },
]

const headings1 = ["Road Name", "Distance From Project", "Width", "Lanes"]

const rows1 = [
    {
        first: "Hill Road",
        firstColor: "#F44336",
        second: "1.5 km",
        third: "100ft",
        fourth: "2 "
    },
    {
        first: "Graham Road",
        firstColor: "#F44336",
        second: "0.5 km",
        third: "200ft",
        fourth: "5"
    },
    {
        first: "Khar Road",
        firstColor: "#00286B",
        second: "1.0 km",
        third: "120ft",
        fourth: "6"
    },
    {
        first: "Lajpat Road",
        firstColor: "#00286B",
        second: "1.5 km",
        third: "150ft",
        fourth: "3"
    }
]

const MyButtonBase = styled(ButtonBase)(({ theme }) => ({
    background: "unset",
    borderRadius: 4,
    padding: "4px 7px",
    width: "100%"
}))

const Circle = styled(Box)(({ theme }) => ({
    width: "8px",
    height: "8px",
    backgroundColor: "#E7E9EB",
    borderRadius: "50%"
}))

function LocationPage() {

    const [mapSee, setMapSee] = useState(false)
    const handleMapSee = () => {
        setMapSee((prev) => !prev)
    }

    const [pBackground, setPBackground] = useState("rgba(0, 103, 255, 0.35)")

    const [school, setSchool] = useState(false)
    const [office, setOffice] = useState(false)
    const [hospital, setHospital] = useState(false)
    const [restaurant, setRestaurant] = useState(false)

    const handleBackgroundChange = (type) => {
        console.log(type)
        if (type === "SchoolBack") {
            setSchool(!school)
        }


        else if (type === "OfficeBack") {
            setOffice(!office)
        }

        else if (type === "HospitalBack") {
            setHospital(!hospital)
        }

        else if (type === "RestaurantBack") {
            setRestaurant(!restaurant)
        }


    }

    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ boxShadow: "none", mt: "-25px" }}>
                <Container variant="ct25" >
                    <Grid container sx={{}}>
                        <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
                            <Typography variant="salesPageHeading"> Locations </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                            <Paper variant="scoreBadge" sx={{ width: "61px", backgroundColor: "#0D7611" }}>
                                10.0
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: "19px", display: "flex", }}>
                        <Button variant="OnButton">
                            City-centre
                        </Button>

                        <Button variant="OnButton" sx={{ ml: "10px" }}>
                            High Income
                        </Button>

                        <Button variant="OnButton" sx={{ ml: "10px" }}>
                            High-demand
                        </Button>
                    </Box>

                    {/* <Box sx={{ textAlign: "left", mt: "10px" }}>
                        <Typography variant="fs15fw700" lineHeight="32px" letterSpacing="0.01em">
                            <span style={{ color: "#005DAF" }}> 1140 </span> units available.
                        </Typography>
                    </Box> */}

                    <Box sx={{ textAlign: "left", mt: "20px" }}>
                        <Typography variant="fs14fw500" fontWeight={700} lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            Location has <Typography component="span" variant="greenBadge"> High-demand </Typography>  compared to other locality in the city.

                        </Typography>
                    </Box>

                </Container>

                <Box sx={{ mt: "20px" }}>
                    <BasicTable3 headings={headings} rows={rows} />
                </Box>

                <Container variant="ct25">
                    <Box sx={{ textAlign: "left", mt: "20px" }}>
                        <Typography variant="fs14fw500" fontWeight={700} lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            The location has <Typography component="span" variant="greenBadge"> proximity </Typography> to commercial spaces,restaurants,schools and hospitals.

                        </Typography>
                    </Box>

                    <Grid container direction="row" sx={{ mt: "18px" }}>
                        <Grid item container xs={6} >
                            <Grid item xs={6}>
                                <MyButtonBase onClick={() => handleBackgroundChange("SchoolBack")} sx={{ background: `${school && pBackground}` }}>
                                    <Typography variant="fs14fw500"> Schools </Typography>
                                </MyButtonBase>
                            </Grid>
                            <Grid item xs={6} sx={{ py: "4px" }}>
                                <Typography variant="fs14fw500" color="#4ABC4F"> Good </Typography>
                            </Grid>

                        </Grid>

                        <Grid item container xs={6} >
                            <Grid item xs={6}>
                                <MyButtonBase onClick={() => handleBackgroundChange("OfficeBack")} sx={{ background: `${office && pBackground}` }}>
                                    <Typography variant="fs14fw500" whiteSpace="nowrap"> Office Hubs </Typography>
                                </MyButtonBase>
                            </Grid>
                            <Grid item xs={6} sx={{ py: "4px" }}>
                                <Typography variant="fs14fw500" color="#DB3B3B"> Bad </Typography>
                            </Grid>

                        </Grid>


                        <Grid item container xs={6} >
                            <Grid item xs={6}>
                                <MyButtonBase onClick={() => handleBackgroundChange("HospitalBack")} sx={{ background: `${hospital && pBackground}` }}>
                                    <Typography variant="fs14fw500"> Hospitals </Typography>
                                </MyButtonBase>
                            </Grid>
                            <Grid item xs={6} sx={{ py: "4px" }}>
                                <Typography variant="fs14fw500" color="#0D7611"> Great </Typography>
                            </Grid>

                        </Grid>

                        <Grid item container xs={6} >
                            <Grid item xs={6}>
                                <MyButtonBase onClick={() => handleBackgroundChange("RestaurantBack")} sx={{ background: `${restaurant && pBackground}` }}>
                                    <Typography variant="fs14fw500" whiteSpace="nowrap"> Restaurants </Typography>
                                </MyButtonBase>
                            </Grid>
                            <Grid item xs={6} sx={{ py: "4px" }}>
                                <Typography variant="fs14fw500" color="#4ABC4F"> Good </Typography>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Box sx={{ mt: "20px" }}>
                        <img src={MapImage} style={{ width: "100%" }} />
                    </Box>

                    <Box sx={{ textAlign: "left", mt: "20px" }}>
                        <Typography variant="fs14fw500" fontWeight={700} lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                            Locality is <Typography component="span" variant="greenBadge"> well-connected </Typography>  to important places through highways (only for upcoming projects).

                        </Typography>
                    </Box>
                </Container>

                <Box sx={{ mt: "16px", textAlign: "left", px: "25px" }}>
                    <ButtonBase onClick={handleMapSee}>
                        <Typography variant="seeAll" > See Map </Typography>
                    </ButtonBase>
                </Box>

                {/* This Box will collapse */}
                <Collapse in={mapSee}>
                    <Box >
                        <Container variant="ct25">
                            <Box sx={{ mt: "16px", border: "1px solid #D1CFD7" }}>
                                <img src={MapImage2} style={{ width: "100%", height: "100%" }} />
                                <Grid container sx={{ mt: "-8px" }}>
                                    <Grid item xs={4} sx={{ py: "18px", borderRight: "1px solid #D1CFD7" }}>
                                        <Typography variant="fs14fw500" color="#00286B"> Highway </Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ py: "18px", borderRight: "1px solid #D1CFD7" }}>
                                        <Typography variant="fs14fw500" color="#00286B"> 120 ft. </Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={{ py: "18px" }}>
                                        <Typography variant="fs14fw500" color="#00286B"> 100 ft. </Typography>
                                    </Grid>
                                </Grid>
                            </Box>


                            <Box sx={{ textAlign: "left", mt: "20px" }}>
                                <Typography variant="fs14fw500" fontSize="15px" fontWeight={700} lineHeight="18px" letterSpacing="0.01em" color="#323232" >
                                    Roads near the Project
                                </Typography>
                            </Box>

                        </Container>

                        <Box sx={{ mt: "20px" }}>
                            <BasicTable4 rows={rows1} headings={headings1} />
                        </Box>
                        <Box>
                            <Grid container sx={{ pt: "16px", justifyContent: "space-between" }}  >
                                <Grid item xs={6} direction="row" >
                                    <CircleIcon sx={{ width: "8px", mb: "-8px", color: "#F44336" }} />
                                    <Typography variant="fs12fw500" component="span">  Existing </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <CircleIcon sx={{ width: "8px", mb: "-8px", color: "#00286B" }} />
                                    <Typography variant="fs12fw500"> Future </Typography>
                                </Grid>

                            </Grid>
                        </Box>

                    </Box>
                </Collapse>

            </Paper>
        </div>
    )
}

export default LocationPage