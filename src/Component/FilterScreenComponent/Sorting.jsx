import React from 'react'
import { Box, Grid, Paper, styled, Typography } from '@mui/material'
import Graph1 from "../../Images/Icon/graph1.png"
import "./Sorting.css"
import HomeRupees from "../../Images/Icon/home-rupees.png"
import HomeUser from "../../Images/Icon/home-user.png"
import Like from "../../Images/Icon/like.png"

const Paper1 = styled(Paper)(({ theme }) => ({
    background: "#FBFBFB",
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)",
    padding: "12px 16px",

}))

const SortingOption = styled(Paper)(({ theme }) => ({
    // paddingTop: "25px",
    // paddingBottom: "19px",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    flexDirection: "column",
    textAlign: "center",
    height: "104px",
    maxHeight: "104px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
}))

const SortingHeading = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "11px",
    lineHeight: "13px",
    marginTop: "8px",
    /* identical to box height */


    color: "#707070"
}))

const SortingSubHeading = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    width: "75px",
    fontWeight: 400,
    fontSize: "9px",
    lineHeight: "12px",
    marginTop: "3px",
    /* identical to box height */


    color: "#707070",
}))

const Grid1 = styled(Grid)(({ theme }) => ({
    paddingLeft: "5px",
    PaddingRight: "5px"
}))

function Sorting() {
    return (
        <div>
            <Paper1 >
                <Box sx={{ textAlign: "left", mb: "10px" }}>
                    <Typography variant="subHeading1" fontWeight={500} lineHeight="21px"> Sorting </Typography>
                </Box>
                <Grid container >
                    <Grid1 item xs={3} >
                        <SortingOption className="active-sorting">
                            <img src={Graph1} style={{ width: "23px", height: "23px" }}/>
                            <SortingHeading className="active-sorting-heading"> Appreciation </SortingHeading>
                            <SortingSubHeading>
                                Highest First
                            </SortingSubHeading>
                        </SortingOption>
                    </Grid1>

                    <Grid1 item xs={3}>
                        <SortingOption >
                            <img src={ HomeRupees } />
                            <SortingHeading className="active-sorting-heading"> Rental Yield </SortingHeading>
                            <SortingSubHeading>
                            Low to High
                            </SortingSubHeading>
                        </SortingOption>
                    </Grid1>

                    <Grid1 item xs={3}>
                        <SortingOption >
                            <img src={HomeUser} />
                            <SortingHeading className="active-sorting-heading"> Livability Index </SortingHeading>
                            <SortingSubHeading>
                            High to Low
                            </SortingSubHeading>
                        </SortingOption>
                    </Grid1>

                    <Grid1 item xs={3}>
                        <SortingOption >
                            <img src={Like} />
                            <SortingHeading className="active-sorting-heading"> Rating </SortingHeading>
                            <SortingSubHeading>
                                Highest
                            </SortingSubHeading>
                        </SortingOption>
                    </Grid1>
                </Grid>

            </Paper1>
        </div>
    )
}

export default Sorting