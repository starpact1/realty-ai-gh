import React, { useState } from 'react'
import { Box, ButtonBase, Collapse, Container, Paper, styled, Typography } from '@mui/material'
import PlusIcon from "../../Images/Icon/PlusIcon.png"
import ProjectCell from './ProjectCell'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const AddMoreButton = styled(ButtonBase)(({ theme }) => ({
    background: "#FFFFFF",
    border: "0.5px solid #00286B",
    width: "100px",
    height: "48px",
    boxShadow: "0px 0px 4px rgba(0, 103, 255, 0.35)",
    color: "#00286B",
}))

const Box116 = styled(Box)(({ theme }) => ({
    width: "132px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingRight: "11px",
    paddingLeft: "11px",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    /* identical to box height, or 150% */

    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-0.08px",

    color: "#000000",
}))

const Box112 = styled(Box)(({ theme }) => ({
    width: "112px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingRight: "11px",
    paddingLeft: "11px",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    /* identical to box height, or 150% */

    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-0.08px",

    color: "#000000",
}))

function Rating() {

    const [viewMore, setViewMore] = useState(true)

    const handelViewChange = () => {
        setViewMore( (prev) => !prev)
    }

    return (
        <div>
            <Paper sx={{ background: "#FFFFFF", position: "relative", boxShadow: "none" }}>
                <Container variant="ct25" sx={{ pt: "16px", textAlign: "left" }}>
                    <Typography variant="salesPageHeading"> Amenities Rating in other societies </Typography>
                </Container>

                <Box sx={{ width: "100vw", position: "absolute", float: "left", top: "242px", background: "#F4F6FC", height: "42px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="fs14fw500"> Amenities Rating </Typography>
                    <Box sx={{ position: "absolute", right: "16px", pt: "4px" }}>
                        <ButtonBase onClick={handelViewChange}>
                            {viewMore == true ? 
                            <KeyboardArrowUpIcon fontSize="8px" />
                            :                            
                            <KeyboardArrowDownIcon fontSize="8px" />
                        }
                            
                        </ButtonBase>
                        
                    </Box>

                </Box>

                <Box className="overflowHidden" sx={{ overflow: "auto", }}>
                    <Box sx={{ display: "flex", mt: "15px", ml: "26px" }}>

                        <Box sx={{ display: "flex", alignItems: 'center', width: "116px", borderRight: "1px solid #E3E3E7", pr: "8px", }}>
                            <AddMoreButton>
                                <img src={PlusIcon} style={{ marginLeft: "4.94px", marginRight: "7.94px" }} />
                                <Box sx={{ textAlign: "left" }}>
                                    <Typography variant="fs10fw500" color="#00286B"> Add more Properties to Compare </Typography>
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

                    <Collapse in={viewMore}>
                    <Box sx={{ display: "flex", }}>
                        <Box sx={{ mt: "46px" }}>
                            <Box116>
                                Sports
                            </Box116>
                            <Box116>
                                Convenience
                            </Box116>
                            <Box116>
                                Safety
                            </Box116>
                            <Box116>
                                Environment
                            </Box116>
                            <Box116>
                                Leisure
                            </Box116>
                        </Box>

                        <Box sx={{ mt: "46px", borderRight: "1px solid #D1CFD7" }}>
                            <Box112 sx={{background: "#FFF7AD"}}>
                            6.2
                            </Box112>
                            
                            <Box112 sx={{background: "#FFF7AD"}}>
                            5.5
                            </Box112>

                            <Box112 sx={{background: "#FFC0C0"}}>
                            5.9
                            </Box112>

                            <Box112 sx={{background: "#B0FCB4"}}>
                            9.0
                            </Box112>

                            <Box112 sx={{background: "#B0FCB4"}}>
                            8.5
                            </Box112>
                           
                        </Box>

                        <Box sx={{ mt: "46px", borderRight: "1px solid #D1CFD7" }}>
                            <Box112 >
                            7.5
                            </Box112>
                            
                            <Box112 >
                            2.3
                            </Box112>

                            <Box112 >
                            8.5
                            </Box112>

                            <Box112 >
                            4.3
                            </Box112>

                            <Box112 >
                            3.3
                            </Box112>
                           
                        </Box>

                        <Box sx={{ mt: "46px", borderRight: "1px solid #D1CFD7" }}>
                            <Box112 >
                            7.5
                            </Box112>
                            
                            <Box112 >
                            2.3
                            </Box112>

                            <Box112 >
                            8.5
                            </Box112>

                            <Box112 >
                            4.3
                            </Box112>

                            <Box112 >
                            3.3
                            </Box112>
                           
                        </Box>
                    </Box>
                    </Collapse>


                </Box>

            </Paper>
        </div>
    )
}

export default Rating