import React from 'react'
import { Box, styled, Container, ButtonBase, Paper, Typography } from '@mui/material'
import Image1 from "../../Images/Image1/ProjectCell.png"
import CloseIcon from "../../Images/Icon/CloseIcon.png"


const CloseButton = styled(ButtonBase)(({ theme }) => ({
    position: "absolute",
    width: "16px",
    height: "16px",
    top: "5px",
    left: "5px",
    // border: "1px solid",
    background: `url(${CloseIcon})`,
    backgroundSize: "15px 15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
}))

const ProjectBadge = styled(Paper)(({ theme }) => ({
    position: "absolute",
    top: "0px",
    right: "-1px",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "9px",
    paddingRight: "9px",
    background: "#DB3B3B",
    color: "#FFFFFF",
    borderRadius: "0px 10px",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "9px",
    lineHeight: "100%",
}))

function ProjectCell() {
    return (
        <div>
            <Container variant="ct13" sx={{pt: "12px"}}>
                <Box sx={{ position: "relative", borderRadius: "10px", pb: "12px",  }}>
                    <img src={Image1} style={{ width: "86px", height: "83px" }} />
                    <CloseButton />
                    <ProjectBadge > 3.2 </ProjectBadge>  
                    <Typography variant="fs10fw500" color= "#1A1E25"> Om Tower, Malad </Typography>
                    <Typography variant="fs8fw400"> Carpet Area: 673 m2 </Typography>
                    <Typography variant="fs10fw500" color= "#0A8ED9" fontWeight="700"> ₹ 27,077 </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default ProjectCell