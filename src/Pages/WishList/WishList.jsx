import { Box, Typography } from '@mui/material'
import React from 'react'
import BestProjects from '../../Component/PropertiesListingComponents/BestProjects'
import SearchAndSort from '../../Component/PropertiesListingComponents/SearchAndSort'
import StaticFooter from '../../Component/StaticFooter'

function WishList() {
  return (
    <div>
        <SearchAndSort wishlist={true}/>

        <Box sx={{ my: "17px", ml: "11px", textAlign: "left" }}>
          <Typography variant="fs15fw700" my="17px"> Showing your Wishlist </Typography>
        </Box>

        <BestProjects wishlist={true} />

        <BestProjects wishlist={true} mt="20px"/>

        <BestProjects wishlist={true} mt="20px"/>

        <BestProjects wishlist={true} mt="20px"/>

        <BestProjects wishlist={true} mt="20px"/>

        <Box sx={{mb: "82px"}}>

        </Box>

        <StaticFooter/>
       

    </div>
  )
}

export default WishList