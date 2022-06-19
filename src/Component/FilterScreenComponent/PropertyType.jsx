import React from 'react'
import { Box, Checkbox, Container, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material'

const LabelStyle={
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "23px",
    
    color: "#4D515B",
}
const CheckBoxStyle = {
    color: "#1D58AF",
}

function PropertyType() {
    return (
        <div>
            <Paper variant="square" sx={{ mt: "16px" }}>
                <Container variant="ct" sx={{ py: "20px", textAlign: "left" }}>
                    <Typography variant="heading2" lineHeight="26px"> Property Type </Typography>
                    <Box sx={{pt: "23.12px" }}>
                        <FormGroup>
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked />} label="Apartments" />
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked={false} />} label="Villas" />
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked />} label="Plots" />
                        </FormGroup>
                    </Box>
                </Container>
            </Paper>
        </div>
    )
}

export default PropertyType