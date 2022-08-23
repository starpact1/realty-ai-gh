import { Box, Typography } from '@mui/material'
import React from 'react'
import FindLocality from '../../Component/LandingPageComponents/FindLocality'
import BestProjects from '../../Component/PropertiesListingComponents/BestProjects'
import SearchAndSort from '../../Component/PropertiesListingComponents/SearchAndSort'
import StaticFooter from '../../Component/StaticFooter'

function PropertiesListing() {
  return (
    <div>
        <SearchAndSort />
        <Box sx={{ my: "17px", ml: "11px", textAlign: "left" }}>
          <Typography variant="fs15fw700" my="17px"> Showing best projects for your needs </Typography>
        </Box>
        
        <BestProjects/>
       
        <BestProjects mt="20px"/>
        
        <Box sx = {{ mt: "-5px" }}>
          <FindLocality />
        </Box>

        <BestProjects mt="20px"/>

        <BestProjects mt="20px"/>

        <BestProjects mt="20px"/>

        <Box sx={{mb: "82px"}}>

        </Box>

        <StaticFooter/>
        
    </div>
  )
}

export default PropertiesListing