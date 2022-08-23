import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import BHKToggleButton from '../LayoutsPage/BHKToggleButton'
import ToggleButton1 from './ToggleButton1'

function PreferredIndicator() {
  return (
    <div>
        <Paper sx={{ background: "#FFFFFF", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)", mt: "15px" }}>
            <Container variant="ct13" sx={{ py: "15px", textAlign: "left" }}>
            <Typography variant="fs15fw700" > Choose Preferred Indicator  </Typography>
            <Box>
                <ToggleButton1 />
            </Box>
            </Container>
        </Paper>
    </div>
  )
}

export default PreferredIndicator