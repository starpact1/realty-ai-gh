import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import CircleIcon from '@mui/icons-material/Circle';

function NewsBuilder({ news }) {
    return (
        <div>
            <Card>
                <CardContent sx={{ px: "18px", pt: "12px", mb: "-12px" }}>
                    <Grid container sx={{ }}>
                        <Grid item xs={7} sx={{ pr: "4x",  }}>
                            <Typography component="h2" variant="fs14fw500" color="#072D4B" > {news.heading} </Typography>
                            <Typography component="h2" variant="fs12fw400" mt="6px"> {news.body} </Typography>
                            <Box sx={{ display: "flex", gap: "6px",  }}>
                                <Typography variant="fs10fw400"> {news.provider} </Typography>
                                <CircleIcon sx={{ width: "4px", color: "#2F9FF8", opacity: "0.4" }} />
                                <Typography variant="fs10fw400"> {news.time} </Typography>

                                {/* <Grid container>
                                    <Grid item xs={6}>
                                        <Typography variant="fs10fw400"> India Today </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                    <CircleIcon  sx={{ width: "4px", mb: "-10px", color: "#2F9FF8", opacity: "0.4" }}  />
                                    </Grid>
                                    <Grid item xs={5}>
                                        
                                        <Typography variant="fs10fw400"> 7 hours ago </Typography>
                                    </Grid>
                                </Grid> */}
                            </Box>
                        </Grid>
                        <Grid item xs={5} sx={{ pl: "6px" }}>
                            <CardMedia
                                component="img"
                                sx={{ width: "100%" }}
                                image={news.image1}
                                alt="Live from space album cover"
                            />


                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default NewsBuilder