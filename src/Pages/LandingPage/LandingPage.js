import React from 'react'
import "./LandingPage.css"
import { Autocomplete, Box, Button, Container, Grid, Input, InputAdornment, InputBase, Paper, Slider, TextField, Typography } from '@mui/material'
import Logo from "../../Images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import { RMobiledataTwoTone, Rotate90DegreesCcw } from '@mui/icons-material';
import SearchIconPng from "../../Images/Icon/Search.png"
import Carret from "../../Images/Icon/carret.png"
import ValueSlider from '../../Component/ValueSlider';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Search1 from '../../Component/LandingPageComponents/Search1';
import FindLocality from '../../Component/LandingPageComponents/FindLocality';
import WhyChooseRealtyAi from '../../Component/LandingPageComponents/WhyChooseRealtyAi';

function LandingPage() { 

  return (
    <div>
      <Container variant="ct16" sx={{ textAlign: "left" }}>

        <Grid container>

          <Grid item xs={12} sx={{ display: "flex", alignItems: "center", }}>
            <img src={Logo} alt="Realty AI" style={{ width: "42px", height: "42px" }} />
            <Typography variant="LogoTitle" sx={{ ml: "10px" }}>
              Realty AI
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", alignItems: "center", pt: "14px" }}>
            <div className="pageHeading" >
              Compare projects and invest in the best projects for ‘YOU’
            </div>
          </Grid>

        </Grid>

      </Container>

      

      {/* Components */}

      <Search1/>
      <FindLocality/>
      <WhyChooseRealtyAi/>

    </div>
  )
}

export default LandingPage