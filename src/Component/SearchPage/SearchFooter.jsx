import { Box, Button, Paper, styled } from '@mui/material'
import React from 'react'


const Footer = styled(Paper)(({ theme }) => ({

    position: "fixed",
    paddingTop: "25px",
    paddingBottom: "25px",
    paddingLeft: "10px",
    paddingRight: "10px",
    bottom: "0px",
    width: "100%",
    


}))

function SearchFooter() {
  return (
    <div style={{ marginTop: "102px" }}>
        <Footer>
            
            <Button variant="button6" > Next </Button>
        </Footer>
    </div>
  )
}

export default SearchFooter