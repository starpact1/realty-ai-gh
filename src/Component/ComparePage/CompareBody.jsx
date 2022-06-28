import React, { useState } from 'react'
import { Box, ButtonBase, Collapse, Container, Paper, styled, Typography } from '@mui/material'
import PlusIcon from "../../Images/Icon/PlusIcon.png"
import ProjectCell from '../AmenitiesPage/ProjectCell';
import Indicators from './Indicators';
import BestProjects from '../PropertiesListingComponents/BestProjects';


const AddMoreButton = styled(ButtonBase)(({ theme }) => ({
    background: "#FFFFFF",
    border: "0.5px solid #00286B",
    width: "110px",
    height: "62px",
    paddingRight: "0px",
    boxShadow: "0px 0px 4px rgba(0, 103, 255, 0.35)",
    color: "#00286B",
}))


const indicators = {
    header: "Indicators",

    content: [
        {
            title: "Total Units Sold",
            first: "54",
            firstColor: "#B0FCB4",
            second: "33",
            third: "33",
        },
        {
            title: "Appreciation (in 5 years)",
            first: "6.6%",
            firstColor: "#FFF7AD",
            second: "7.5%",
            third: "7.5%",
        },
        {
            title: "Rental Yield",
            first: "5.9%",
            firstColor: "#FFC0C0",
            second: "8.5%",
            third: "8.5%",
        },
        {
            title: "Sales in last 3 months",
            first: "22",
            firstColor: "#B0FCB4",
            second: "34",
            third: "34",
        },
    ]
}

const MoreIndicators = {
    header: "More Indicators",

    content: [
        {
            title: "Price Over/Under",
            first: "Low",
            firstColor: "#B1FCB5",
            second: "High",
            third: "High",
        },
        {
            title: "Past Appreciation",
            first: "7.2%",
            firstColor: "#B1FCB5",
            second: "8.9%",
            third: "8.9%",
        },
        {
            title: "Ease of Exit",
            first: "High",
            firstColor: "#B1FCB5",
            second: "Low",
            third: "Low",
        },
        {
            title: "Livability Index",
            first: "6.3",
            firstColor: "#FFF7AD",
            second: "8.9",
            third: "8.9",
        },
        {
            title: "Ease of Renting",
            first: "High",
            firstColor: "#B1FCB5",
            second: "Low",
            third: "Low",
        },
    ]
}

const BuildreRisk = {
    header: "Builder Risks",

    content: [
        {
            title: "Construction Status",
            first: "On-time",
            firstColor: "#FFF7AD",
            second: "Delayed",
            third: "Delayed",
        },
        {
            title: "Litigations",
            first: "Low",
            firstColor: "#B1FCB5",
            second: "High",
            third: "High",
        },
        {
            title: "Builder History",
            first: "Grade-A",
            firstColor: "#FFF7AD",
            second: "Grade-B",
            third: "Grade-B",
        },
        {
            title: "Agreement Clause",
            first: "Good",
            firstColor: "#B1FCB5",
            second: "Bad",
            third: "Bad",
        },

    ]
}

const LivabilityFactors = {
    header: "Livability Factors",

    content: [
        {
            title: "Amenities",
            first: "2.7",
            firstColor: "#FFC0C0",
            second: "7.7",
            third: "7.7",
        },
        {
            title: "Layouts",
            first: "5.0",
            firstColor: "#FFF7AD",
            second: "7.7",
            third: "7.7",
        },
        {
            title: "Location",
            first: "8.5",
            firstColor: "#B1FCB5",
            second: "7.7",
            third: "7.7",
        },
        {
            title: "Location",
            first: "8.5",
            firstColor: "#B1FCB5",
            second: "7.7",
            third: "7.7",
        },


    ]
}


function CompareBody() {

    return (
        <div>
            <Paper sx={{ background: "#FFFFFF", position: "relative", boxShadow: "none", }}>
                <Container variant="ct25" sx={{ pt: "16px", textAlign: "left" }}>
                    <Typography component="h2" variant="salesPageHeading"> Number of projects selected: (3/5) </Typography>
                    <Typography component="h2" variant="fs14fw500" color="#DB3B3B" mt="2px"> Sorry, we are unable to add any more projects. </Typography>
                </Container>



                <Box className="overflowHidden" sx={{ overflow: "auto", }}>
                    <Box sx={{ display: "flex", mt: "15px", ml: "26px" }}>

                        <Box sx={{ display: "flex", alignItems: 'center', width: "116px", borderRight: "1px solid #E3E3E7", pr: "8px", }}>
                            <AddMoreButton>
                                <img src={PlusIcon} style={{ marginLeft: "4.94px", marginRight: "7.94px" }} />
                                <Box sx={{ textAlign: "left" }}>
                                    <Typography variant="fs10fw500" color="#00286B" lineHeight="1"> Add/Remove more Properties to Compare </Typography>
                                </Box>

                            </AddMoreButton>
                        </Box>

                        <Box sx={{ width: "112px", borderRight: "1px solid #E3E3E7" }}>
                            <ProjectCell />

                        </Box>
                        <Box sx={{ width: "112px", borderRight: "1px solid #E3E3E7" }}>
                            <ProjectCell />

                        </Box>
                        <Box sx={{ width: "112px", borderRight: "1px solid #E3E3E7" }}>
                            <ProjectCell />

                        </Box>

                    </Box>

                    <Indicators data={indicators} />

                    <Indicators data={MoreIndicators} />

                    <Indicators data={BuildreRisk} />

                    <Indicators data={LivabilityFactors} />


                </Box>

                <Paper variant="BGF9FBFF" sx={{ mt: "0px", py: "0px" }}>
                    <Container variant="ct25" sx={{ py: "16px", textAlign: "left" }}>
                        <Typography variant="salesPageHeading"> Compare with other similar properties  </Typography>
                    </Container>

                    <BestProjects compare={true} />

                    <BestProjects compare={true} mt="20px" />

                    <BestProjects compare={true} mt="20px" />

                </Paper>

            </Paper>
        </div>
    )
}

export default CompareBody