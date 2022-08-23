import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ButtonBase, Grid, Paper, styled } from '@mui/material'
import SlideImage2 from "../../Images/Image1/SlideImage2.png"
import BHKImage from "../../Images/Icon/BHK-White.png"
import WhishList from "../../Images/Icon/whishList.png"

const CardMediaText = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "112px",
    right: "12px",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    textDecorationLine: "underline",

    color: "#A7DFFF",

}))

const CardMediaFavourite = styled(Box)(({ theme }) => ({
    position: "absolute",
    width: "37px",
    height: "37px",
    top: "34px",
    right: "24px",
    border: "1px solid",
    zIndex: 99,
    // right: "38px",
    background: "rgba(255, 255, 255, 0.28)",
    backdropFilter: "blur(3px)",
    /* Note: backdrop-filter has minimal browser support */

    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

const BasicCard = styled(Card)(({ theme }) => ({
    width: "250px",
    padding: "13px",
    marginTop: "15.23px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    /* Drop Shadow */

    boxShadow: "0px 4px 30px #E6E6E6",
    backgroundImage: `url(${SlideImage2})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
    // backgroundColor: "red"
}))

function Card2() {
    return (
        <div>
            <ButtonBase>
                <BasicCard sx={{ }}>
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image={SlideImage2}
                        alt="green iguana"
                        sx={{ borderRadius: "10px" }}
                    /> */}
                    <Box sx={{height: "140px"}}>

                    </Box>
                    <CardMediaText>
                        13 Photos
                    </CardMediaText>

                    <CardMediaFavourite>
                        <img src={WhishList} alt="WhishList" />
                    </CardMediaFavourite>

                    <CardContent sx={{ textAlign: "left", px: "0px", pt: "11px", paddingBottom: "0px !important" }}>
                        <Typography variant="fs23fw700" color = "#FFFFFF" component="div">
                            Om Towers
                        </Typography>
                        <Grid container sx={{ mt: "5px" }}>
                            <Grid item xs={8}  >
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                                <img src={BHKImage} alt="bhk" style={{height: "12.5px"}}/>
                                <Typography variant="fs14fw500"  pl="7px" color = "#FFFFFF">
                                    1 BHK, 2BHK
                                </Typography>
                                </Box>
                                <Box sx={{ mt: "7px" }}>
                                    <Typography variant="fs14fw500" component="span" lineHeight="16.34px" color="#FFFFFF">
                                        ₹ 8L- 12L/sqft.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "start" }}>
                                <Paper variant="score" sx={{ marginTop: "-18px", color: "#FFFFFF" }}>
                                    8.5
                                </Paper>
                            </Grid>
                        </Grid>

                    </CardContent>
                </BasicCard>
            </ButtonBase>
        </div>
    )
}

export default Card2