import React from 'react'
import { Autocomplete, Box, Button, Container, Grid, Input, InputAdornment, InputBase, Paper, Slider, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { RMobiledataTwoTone, Rotate90DegreesCcw } from '@mui/icons-material';
import SearchIconPng from "../../Images/Icon/Search.png"
import Carret from "../../Images/Icon/carret.png"
import ValueSlider from '../../Component/ValueSlider';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Search1() {
  const cities = ["Mumbai", "Delhi", "Kolkata"]
  return (
    <div>

      <Paper sx={{ borderRadius: "17px", background: "#FFFFFF", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", mt: "20px" }}>
        <Grid container>
          <Grid item xs={12}>
            <Container variant="ct13" sx={{ pt: "28px", }}>
              <InputBase type="seacrh" className="roundedInput"
                sx={{ border: "none", outline: "none" }} placeholder=" City, Locality, Society " endAdornment={<InputAdornment position="end"><img src={SearchIconPng} /></InputAdornment>} fullWidth />

            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container variant="ct13" sx={{ pt: "18px" }}>
              {/* TODO: This input is going to be an auto complete */}
              <InputBase className="roundedInput"
                placeholder=" Reason for investing? " autocomplete={cities} endAdornment={<InputAdornment position="end"><img src={Carret} /></InputAdornment>} fullWidth />
              {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}

                renderInput={(params) => <InputBase className="roundedInput"
                  placeholder=" City, Locality, Society " endAdornment={<InputAdornment position="end"><img src={SearchIconPng} /></InputAdornment>} fullWidth />}
              /> */}

            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container variant="ct31" sx={{ pt: "15px", textAlign: "left" }}>

              <Typography variant="subHeading3">
                Select a Price Range:
              </Typography>

            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container variant="ct31" sx={{ textAlign: "left" }}>

              <ValueSlider />

            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container variant="ct31" sx={{ pt: "15px", textAlign: "left" }}>
              <Box >
                <Typography variant="heading2" component="span"> 563 </Typography>
                <Typography variant="subHeading4" color="#7A7A7A" component="span"> Projects Reviewed </Typography>
              </Box>
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container variant="ct31" sx={{ pt: "13px", pb: "20px", px: "26px", textAlign: "right" }}>
              <Button variant="button2">
                Check Project Ratings <ArrowRightAltIcon />
              </Button>
            </Container>
          </Grid>

        </Grid>
      </Paper>
    </div>
  )
}

export default Search1