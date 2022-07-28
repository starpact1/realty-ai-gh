import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import BigButtonsToggle from './BigButtonsToggle'


function ReasonForInvesting() {
    return (
        <div style={{ textAlign: "left" }}>
            <Paper variant="square">
                <Container variant="ct25" sx={{paddingTop: "12px", paddingBottom: "20px"}}>
                    <Typography variant="fs16fw700" fontWeight={500} > Reason For Investing </Typography>
                    <Box sx={{mt: "10px"}}>
                        <BigButtonsToggle />
                    </Box>
                    
                </Container>
            </Paper>


        </div>
    )
}

export default ReasonForInvesting