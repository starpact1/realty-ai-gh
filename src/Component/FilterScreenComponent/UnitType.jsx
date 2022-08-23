import React from 'react'
import { Box, Checkbox, Container, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material'
import "./UnitType.css"

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

function UnitType() {
  return (
    <div>
        <Paper variant="square" sx={{ mt: "16px" }}>
                <Container variant="ct" sx={{ py: "20px", textAlign: "left" }}>
                    <Typography variant="heading2" lineHeight="26px"> Unit type </Typography>
                    <Box sx={{pt: "23.12px" }}>
                        <FormGroup row className="form-group">
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked />} label="1 BHK" />
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked={false} />} label="2 BHK" />
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked />} label="3 BHK" />
                            <FormControlLabel sx={ LabelStyle } control={<Checkbox style={CheckBoxStyle} defaultChecked />} label="4 BHK" />
                        </FormGroup>
                    </Box>
                </Container>
            </Paper>
    </div>
  )
}

export default UnitType