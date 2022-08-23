import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'

const Image1 = styled("img")(({ theme }) => ({
    maxWidth: "106px",
    height: "60px",
    // marginTop: "13px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
}))

function Section2({ title }) {
    const folder = process.env.PUBLIC_URL + "/"

    return (
        <div>
            <Box sx={{ textAlign: "left" }}>
                <Container variant="ct15">
                    <Typography variant="fs15fw700"> {title} </Typography>
                    <Box sx={{ display : "flex", mt: "13px", flexWrap: "wrap", justifyContent: "start", gap: "10px"}}>
                        <Image1 src={folder + "HomeImages/1.jpg"} style={{}} />
                        <Image1 src={folder + "HomeImages/2.jpg"} style={{}} />
                        <Image1 src={folder + "HomeImages/3.jpg"} style={{}} />
                        <Image1 src={folder + "HomeImages/3.jpg"} style={{}} />
                    </Box>
                </Container>

            </Box>
        </div>
    )
}

export default Section2