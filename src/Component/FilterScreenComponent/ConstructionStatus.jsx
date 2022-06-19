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

function ConstructionStatus() {
  return (
    <div>
        <Paper variant="square" sx={{ mt: "16px" }}>
                <Container variant="ct" sx={{ py: "20px", textAlign: "left" }}>
                    <Typography variant="heading2" lineHeight="26px"> Constuction Status </Typography>
                    <Box sx={{pt: "23.12px" }}>
                        <FormGroup>
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked />} label="Ready to Move" />
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked={false} />} label="Ready to Move" />
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked />} label="New Launch" />
                        </FormGroup>
                    </Box>
                </Container>
            </Paper>
    </div>
  )
}

export default ConstructionStatus