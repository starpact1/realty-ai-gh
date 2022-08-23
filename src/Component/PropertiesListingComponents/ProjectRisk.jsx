import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function ProjectRisk({ image1, textContent }) {
    return (
        <div>
            <Paper variant='square' sx={{ borderRadius: "5px", minWidth: "130px", width: "max-content", height: "auto", boxShadow: "none", }}>
                <Container variant="ct10" sx={{ py: "12px", px: "9px" }}>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "26px", height: "26px", background: "rgba(172, 195, 255, 0.2)", borderRadius: "5px" }}>
                            <img src={image1} style={{ maxWidth: "20px", maxHeight: "20px" }} />
                        </Box>
                        <Box sx={{ml : "5px"}}>
                            <Typography component="h2" variant="fs10fw500" fontSize="12px"  color="#1B2641"> {textContent.text1} </Typography>
                            <Typography component="h2" variant="fs10fw500" fontSize="12px" lineHeight="1.2" color={textContent.text2Color}> {textContent.text2} </Typography>
                        </Box>
                    </Box>
                    {/* <Box sx = {{ mt: "3px" }}>
                        <Typography component="h2" variant="fs08fw400" lineHeight="12.02px"> {textContent.text3} </Typography>
                        <Typography component="h2" variant="fs08fw400" lineHeight="12.02px"> {textContent.text4} </Typography>
                    </Box> */}


                    {/* <Grid container >
                        <Grid xs={4} sx={{width: "26px"}}>
                            <Box sx={{ display: "block", mr: "12px", pt: "4px", width: "max-content", px: "6px", background: "rgba(172, 195, 255, 0.2)", borderRadius: "5px" }}>
                                <img src={image1} style={{ width: "17.15px", height: "15.88px" }} />
                            </Box>
                        </Grid>
                        <Grid xs={8} sx={{ pl: "6px",  width: "max-content",  whiteSpace: "nowrap" }}>
                            <Box sx = {{  textAlign: "left" }}>
                                <Typography component="h2" variant="fs10fw500" color="#1B2641"> {textContent.text1} </Typography>
                                <Typography component="h2" variant="fs10fw500" lineHeight="18px" color={textContent.text2Color}> {textContent.text2} </Typography>
                            </Box>


                        </Grid>
                        <Grid xs={12}>
                            <Typography variant="fs08fw400"> {textContent.text3} </Typography>
                        </Grid>
                    </Grid> */}
                </Container>
            </Paper>
        </div>
    )
}

export default ProjectRisk