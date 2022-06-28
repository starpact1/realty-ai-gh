import React from 'react'
import { Container, Grid, Typography, Paper, Box, Button } from '@mui/material'


function AmenitiesHeader() {
  return (
    <div>
      <Container variant="ct25" >
        <Grid container sx={{}}>
          <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
            <Typography variant="salesPageHeading"> Amenities </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
            <Paper variant="scoreBadge" sx={{ width: "42px", backgroundColor: "#FF6D00" }}>
              5.5
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: "19px", display: "flex", }}>
          <Button variant="OnButton">
          Great Security
          </Button>

          <Button variant="OnButton" sx={{ ml: "10px" }}>
          Kid’s Friendly
          </Button>

        </Box>

      </Container>
    </div>
  )
}

export default AmenitiesHeader