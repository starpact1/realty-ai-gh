import React from 'react'
import styled from '@emotion/styled';
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import MapBoxImage1 from "../../Images/Image1/MapBox1.png"
import MapBackground from "../../Images/Image1/MapBackground.png"

const MapBox = styled(Paper)(({ theme }) => ({
    height: "185px",
    left: "14px",
    top: "554px",

    background: "linear-gradient(98.81deg, #7BACFC 25.3%, #FFBF75 101.53%)",
    backgroundImage: `url(${MapBackground})`,
    mixBlendMode: "normal",
    borderRadius: "16px",
    display: "flex",
}));

const MapBox1 = styled(Box)(({ theme }) => ({
    width: "58.78%",
    borderRadius: "16px 0px 0px 16px",
    // background: {url(${MapBoxImage1})},
    backgroundSize: "cover"
    // background: "yellow"
}));

const MapBox2 = styled(Box)(({ theme }) => ({
    // pt: "28px",
    // paddingTop: "28px",
    // paddingLeft: "19px",
    // paddingRight: "19px",
    // px: "19px"
    position: "relative",
    width: "41.22%"
}));

function FindLocality() {
    return (
        <div>
            <Container variant="ct14" sx={{ mt: "25px" }}>
                <MapBox sx = {{  }}>
                <MapBox1 sx={{ backgroundImage: `url(${MapBoxImage1})` }}>
                    {/* <img src={MapBoxImage1} style={{width: "100%"}} /> */}
                </MapBox1>
                <MapBox2>
                    <Box sx = {{ position: "absolute", width: "105px", height: "85.25px", textAlign: "left", top: "28px", left: "19px" }}>
                    <Typography sx={{ fontFamily: 'DM Sans', fontStyle: "normal", fontWeight: "700", fontSize: "20px", lineHeight: "131.02%"/* or 26px */ , color: "#FFFFFF" }}>
                        Find the best locality
                    </Typography>
                    </Box>
                    <Button variant="button3" sx = {{ mt: "124.50px" }}>
                        See Heatmap
                    </Button>
                </MapBox2>
                </MapBox>
            </Container>
        </div>
    )
}

export default FindLocality