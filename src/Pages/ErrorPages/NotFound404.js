import { Box, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound404() {
    return (
        <div>
            <h1>Page List</h1>
            <Container variant="ct">
                <Paper sx={{ py: 4, px: 3, textAlign: "left", }}>
                    <Box sx={{ mt: 2 }}>
                        <Link to="/" style={{ mt: 2 }}>
                            Login Page
                        </Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Link to="/landing-page" style={{ paddingTop: "20px" }}>
                            Landing Page
                        </Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Link to="/otp-verification">
                            OTP Verification Page
                        </Link>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Link to="/profile">
                            Profile Page
                        </Link>
                    </Box>

                    {/* 2nd Week Links */}

                    <Box sx={{ mt: 2 }}>
                        <Link to="/filter-screen">
                        /filter-screen
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/properties-listing">
                        /properties-listing
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/wishlist">
                        /wishlist
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/sales-graph">
                        /sales-graph
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/sales-in-last-3-months">
                        /sales-in-last-3-months
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/agreement-clause">
                        /agreement-clause
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/appreciation-page">
                        /appreciation-page 
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/past-appreciation-page">
                        /past-appreciation-page 
                        </Link>
                    </Box>

                    

                    <Box sx={{ mt: 2 }}>
                        <Link to="/rental-yield-page">
                        /rental-yield-page
                        </Link>
                    </Box>

                    {/* 3rd week Design */}
                    <Box sx={{ mt: 2 }}>
                        <Link to="/ease-of-reselling">
                        /ease-of-reselling
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/ease-of-renting">
                        /ease-of-renting
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/layouts-page">
                        /layouts-page
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/location-page">
                        /location-page
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/construction-status-page">
                        /construction-status-page
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/legal-status">
                        /legal-status
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/builder-history">
                        /builder-history
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/amenities-page">
                        /amenities-page
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/price-value">
                        /price-value
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/compare-page">
                        /compare-page
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/heat-map">
                        /heat-map
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/gallery">
                        /gallery
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/search">
                        /search
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/sample">
                        /sample
                        </Link>
                    </Box>


                </Paper>
            </Container>


        </div>
    )
}

export default NotFound404