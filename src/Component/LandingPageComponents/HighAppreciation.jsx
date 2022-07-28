import React from 'react'
import { Box, ButtonBase, Container, Grid, Paper, styled, Typography } from '@mui/material'
import Slider from 'react-slick'
import Card3 from './Card3'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Link, useNavigate } from "react-router-dom"

const Slide = styled(Box)(({ theme }) => ({
    paddingLeft: "-100px",
    paddingRight: "100px",
    paddingBottom: "10px",
    width: "80%",
    marginLeft: "-30px"
  }))

function HighAppreciation() {
  
  const navigate = useNavigate()

    const settings = {
        dots: false,
        infinite: false,
    
        // autoplay: true,
        centerMode: true,
        centerPadding: "12%",
        autoplayspeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        // responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2,
        //         initialSlide: 2
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1.3,
        //         slidesToScroll: 1
        //       }
        //     }
        //   ]
      };

  return (
    <div>
        <Paper variant="Base">
        <Container variant="ct20">
          <Grid container>
            <Grid items xs={8} sx={{ textAlign: "left" }}>
              <Typography variant="fs20fw700"> High Appreciation </Typography>
            </Grid>
            <Grid items xs={4} sx={{ textAlign: "right" }}>
              <Link to="/properties-listing">
              <Typography variant="seeAll"> See all </Typography>
              </Link>
            </Grid>
            <Grid items xs={12} sx={{ textAlign: "left", mt: "9.97px" }}>
              <Typography variant="subHeading3"> Projects that have the highest appreciation potential with low risk </Typography>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ width: "99%", overflow: "hidden" }}>
          <Slider {...settings}>
            <Slide>
            <ButtonBase onClick={() => navigate("/sample")}>
              <Card3 />
              </ButtonBase>
            </Slide>
            <Slide>
              <ButtonBase onClick={() => navigate("/sample")}>
              <Card3 />
              </ButtonBase>
            </Slide>
            <Slide>
              <ButtonBase onClick={() => navigate("/sample")}>
              <Card3 />
              </ButtonBase>
            </Slide>
            <Slide>
              <ButtonBase onClick={() => navigate("/sample")}>
              <Card3 />
              </ButtonBase>
            </Slide>
            <Slide>
              <ButtonBase onClick={() => navigate("/sample")}>
              <Card3 />
              </ButtonBase>
            </Slide>
          </Slider>

        </Box>
      </Paper>
    </div>
  )
}

export default HighAppreciation