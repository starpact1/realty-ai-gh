import React from 'react'
import { Box, Grid, Paper, styled, Typography } from '@mui/material'
import { Container } from '@mui/system'
import HomeUnits from "../../Images/Icon/HomeUnits.png"


const Box1 = styled(Box)(({ theme, color, backgroundColor }) => ({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    width: "max-content",
    paddingTop: "2px",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingBottom: "2px",
    fontWeight: 700,
    fontSize: "8px",
    lineHeight: "116.7%",
    /* or 9px */
    color: {color},
    background: {backgroundColor},
    borderRadius: 2,
}))

function FinancialIndicator({ image1, textContent }) {
    return (
        <div>
            <Paper variant='square' sx={{ borderRadius: "5px", boxShadow: "none", width: "max-content", pt: "7px", pb: "7px" }}>
                <Container variant="ct10" sx={{py: "4px", pr:"16px", }}>
                    <Grid container >
                    {/* TODO: xs is not defined */}
                        <Grid > 
                            <Box sx={{ pt: "4px", width: "max-content",  px: "6px", background: "rgba(172, 195, 255, 0.2)", borderRadius: "5px" }}>
                                <img src={ image1 } style={{ width: "17.15px", height: "15.88px" }} />
                            </Box>
                        </Grid>
                        {/* TODO: xs is not defined */}
                        <Grid  sx={{ pl: "12px", pr: "8px", width: "max-content", whiteSpace: "nowrap" }}>
                            <Typography component="h2" variant="fs10fw500" fontSize="12px" color="#1B2641"> { textContent.text1 } </Typography>
                            <Typography component="h2" variant="fs10fw500" fontSize="12px" lineHeight="18px" color = { textContent.text2Color }> {textContent.text2} </Typography>
                            {/* <Box1 color={ textContent.textBadgeColor } backgroundColor={ textContent.textBadgeBackgroundColor }>
                                { textContent.textBadgeText }
                            </Box1> */}
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </div>
    )
}

export default FinancialIndicator