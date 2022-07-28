import { Box, ButtonBase, Collapse, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import ImageCard1 from '../LandingPageComponents/ImageCard1'
import Home1 from "../../Images/Image1/Home1.png"
import Home2 from "../../Images/Image1/Home2.png"
import Home3 from "../../Images/Image1/Home3.png"
import Home4 from "../../Images/Image1/Home4.png"

function OtherRecomandedProjects() {

    const [seeMore, setSeeMore] = useState(false)

    return (
        <div>
            <Paper variant="square" sx={{ py: "13px" }}>
                <Container variant="ct13" sx={{ textAlign: "left" }}>
                    <Typography variant="fs19fw700"> Other Recommended projects </Typography>
                </Container>

                <Container variant="ct22" sx={{ mt: "22px" }}>
                    <Grid container spacing={1.6}>
                        <Grid item xs={6}>
                            <ImageCard1 image1={Home1} score="3.2" />
                        </Grid>

                        <Grid item xs={6}>
                            <ImageCard1 image1={Home2} score="8.2" />
                        </Grid>

                        <Grid item xs={6}>
                            <ImageCard1 image1={Home3} score="4.2" />
                        </Grid>

                        <Grid item xs={6}>
                            <ImageCard1 image1={Home4} score="3.2" />
                        </Grid>

                        <Grid item xs={6}>
                            <ImageCard1 image1={Home1} score="3.2" />
                        </Grid>

                        <Grid item xs={6}>
                            <ImageCard1 image1={Home2} score="3.2" />
                        </Grid>

                        <Grid item xs={6}>
                            <ImageCard1 image1={Home3} score="3.2" />
                        </Grid>

                        <Grid item xs={6}>
                            <ImageCard1 image1={Home4} score="3.2" />
                        </Grid>

                    </Grid>


                    <Box sx={{ my: "12px", textAlign: "left" }}>
                        <ButtonBase onClick={() => setSeeMore(prev => !prev)}>
                            <Typography variant="seeAll" fontSize="16px" fontWeight="700">
                                {seeMore ? "See Less" : "See more"}

                            </Typography>
                        </ButtonBase>
                    </Box>

                    <Collapse in={seeMore}>
                        <Grid container spacing={1.6}>
                            <Grid item xs={6}>
                                <ImageCard1 image1={Home1} score="3.2" />
                            </Grid>

                            <Grid item xs={6}>
                                <ImageCard1 image1={Home2} score="8.2" />
                            </Grid>

                            <Grid item xs={6}>
                                <ImageCard1 image1={Home3} score="4.2" />
                            </Grid>

                            <Grid item xs={6}>
                                <ImageCard1 image1={Home4} score="3.2" />
                            </Grid>

                            <Grid item xs={6}>
                                <ImageCard1 image1={Home1} score="3.2" />
                            </Grid>

                            <Grid item xs={6}>
                                <ImageCard1 image1={Home2} score="3.2" />
                            </Grid>

                            <Grid item xs={6}>
                                <ImageCard1 image1={Home3} score="3.2" />
                            </Grid>

                            <Grid item xs={6}>
                                <ImageCard1 image1={Home4} score="3.2" />
                            </Grid>

                        </Grid>
                    </Collapse>

                </Container>
            </Paper>
        </div>
    )
}

export default OtherRecomandedProjects