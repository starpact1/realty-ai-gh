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
                        <Link to="/">
                        /appreciation-page (Not available)
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/">
                        /past-appreciation-page (Not available)
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/">
                        /appreciation-page (Not available)
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Link to="/">
                        /rental-yield (Not available)
                        </Link>
                    </Box>
                </Paper>
            </Container>


        </div>
    )
}

export default NotFound404