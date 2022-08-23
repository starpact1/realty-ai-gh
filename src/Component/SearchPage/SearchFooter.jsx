import { Box, Button, Paper, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate()

  return (
    <div style={{ marginTop: "102px" }}>
        <Footer>
            
            <Button variant="button6" onClick={() => navigate("/properties-listing")}> Next </Button>
        </Footer>
    </div>
  )
}

export default SearchFooter