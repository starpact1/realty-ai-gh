import { Box, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import AmenitiesDetails from '../../Component/AmenitiesPage/AmenitiesDetails'
import AmenitiesHeader from '../../Component/AmenitiesPage/AmenitiesHeader'
import Rating from '../../Component/AmenitiesPage/Rating'
import WhatsSpecial from '../../Component/AmenitiesPage/WhatsSpecial'

const amenities = {
  type: "special",
  data: ["Kids’ Pool", "Yoga Areas", "Gymnasium", "Amphiteatre", "Kids’ Pool 1", "Yoga Areas 1", "Gymnasium 1", "Amphiteatre 1"]
}

const amenities1 = {
  type: "missing",
  data: ["Basketball", "CCTV Cameras", "Kids’ Area", "Parking", "Basketball 1", "CCTV Cameras 1", "Kids’ Area 1", "Parking 1"]
}

const amenitiesList = [
  {
    title: "Sports",
    badge: "Bad",
    badgeColor: "#DB3B3B",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
  },
  {
    title: "Convenience",
    badge: "Good",
    badgeColor: "#0D7611",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
  },
  {
    title: "Safety",
    badge: "Average",
    badgeColor: "#E49500",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
  },
  {
    title: "Environment",
    badge: "Good",
    badgeColor: "#0D7611",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
  },
  {
    title: "Leisure",
    badge: "Bad",
    badgeColor: "#DB3B3B",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
  }
]

function AmenitiesPage() {
  return (
    <div >
      <Paper variant="BGF9FBFF" sx={{mt: "-25px"}}>
        <AmenitiesHeader />

        <Container variant="ct25">
          <Box sx={{ mt: "20px" }}> <WhatsSpecial amenities={amenities} /> </Box>
          <Box sx={{ mt: "10px" }}> <WhatsSpecial amenities={amenities1} /> </Box>
        </Container>

        <Box sx={{ mt: "20px" }} >
          {amenitiesList.map((item, i, key) => <>

            <AmenitiesDetails key={key} dataList={item} bottomBorderWidth={amenitiesList.length == i + 1 ? "0px" : "0.5px"} /> </>
          )}

        </Box>
        <Box sx={{ mt: "20px" }}>
          <Rating />
        </Box>
      </Paper>

    </div>
  )
}

export default AmenitiesPage