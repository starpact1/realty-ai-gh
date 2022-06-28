import React from 'react'
import { Container, InputAdornment, InputBase, Paper, Typography } from '@mui/material'
import SearchIconPng from "../../Images/Icon/Search.png"

function Search() {
  return (
    <div>
      <Paper sx={{ background: "#FFFFFF", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.25)", }}>
        <Container variant="ct13" sx={{ py: "15px", textAlign: "left" }}>
          <Typography variant="fs15fw700" > Search Preferred Area </Typography>
          <InputBase type="seacrh" sx={{ height: "48px", mt: "15px" }} className="roundedInput1"
            placeholder=" Search City, Locality, Society " endAdornment={<InputAdornment position="end"><img src={SearchIconPng} /></InputAdornment>} fullWidth />
        </Container>
      </Paper>
    </div>
  )
}

export default Search