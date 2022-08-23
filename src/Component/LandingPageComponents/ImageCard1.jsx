import React, { useEffect, useState } from 'react'
import { Box, ButtonBase, Container, Grid, Paper, styled, Typography } from '@mui/material'
import BHKImage from "../../Images/Icon/BHK-White.png"

function ImageCard1({ image1, score }) {

    const [color1, setColor1] = useState("#DB3B3B")
    const score1 = parseFloat(score)
    useEffect(() => {
        if (score1 < 4)
            setColor1("#DB3B3B")
        else if (score1 >= 4 && score1 < 8)
            setColor1("#FBC11B")
        else
            setColor1("#4ABC4F")
    }, [])

    return (
        <Box sx={{ height: "105px", position: "relative", borderRadius: "5px", background: `url(${image1})`, backgroundSize: "100%" }}>
            <Box sx={{
                position: "absolute",
                paddingTop: "2px",
                top: "0px",
                right: "0px",
                width: "34px",
                height: "14px",
                background: `${color1}`,
                borderRadius: "0px 5px",
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "10px",
                lineHeight: "100%",
                /* identical to box height, or 10px */


                color: "#FFFFFF"
            }}>

                {score}
            </Box>

            <Box sx={{ textAlign: "left", position: "absolute", paddingLeft: "8px", top: "42px" }}>
                <Typography variant="fs12fw700" color="#FFFFFF" component="div">
                    Om Towers
                </Typography>
                <Grid container sx={{ mt: "2px" }}>
                    <Grid item xs={12}  >
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <img src={BHKImage} alt="bhk" style={{ height: "12.5px" }} />
                            <Typography variant="fs10fw500" pl="7px" color="#FFFFFF">
                                1 BHK, 2BHK
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={8}>
                        <Box >
                            <Typography variant="fs10fw500" component="span" lineHeight="116.7%" fontWeight="400" color="#FFFFFF">
                                ₹ 8L- 12L/sqft.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Typography variant="fs10fw500" component="span" lineHeight="116.7%" textDecoration="underline" color="#FFFFFF">
                            13 photos
                        </Typography>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    )
}

export default ImageCard1