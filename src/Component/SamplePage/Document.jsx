import React from 'react'
import { Container, Link, Paper, Typography } from '@mui/material'


function Document() {
  return (
    <div>
        <Paper variant="square">
            <Container variant="ct16" sx={{ textAlign: "left", py: "22px", }}>
                <Typography component="div" variant="fs19fw700"> Documents </Typography>
                
                <Link href="#" component="div" sx={{ mt: "6px" }}>
                    <Typography variant="fs16fw700" color="#1D58AF"> RERA report </Typography>
                </Link>

                <Link href="#" component="div" sx={{ mt: "4px" }}>
                    <Typography variant="fs16fw700" color="#1D58AF"> Brochure </Typography>
                </Link>
                
            </Container>
        </Paper>
    </div>
  )
}

export default Document