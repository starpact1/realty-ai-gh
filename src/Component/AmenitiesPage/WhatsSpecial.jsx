import React, { useState } from 'react'
import { Box, Button, ButtonBase, Grid, styled, Typography } from '@mui/material'
import SpecialIcon from "../../Images/Icon/WhatsSpecialIcon.png"
import MissingIcon from "../../Images/Icon/WhatsMissingIcon.png"

const AmenityItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center"
}))

function WhatsSpecial({ amenities }) {

  const amenitiesLength = amenities?.data.length
  const amenitiesToShow = 4;

  const [viewMore, setViewMore] = useState(false)

  const handelViewMore = () => {
    setViewMore((prev) => !prev)
  }

  return (
    <div style={{ textAlign: "left" }}>

      {amenities?.type === "special" ?
        <Typography variant="fs14fw500"> What’s Special  </Typography>
        :
        <Typography variant="fs14fw500"> What’s Missing  </Typography>
      }
      <Grid container sx={{mt: "6px"}}>
        {viewMore ?
          <>
            {amenities?.data.map((amenity, key) => (
              <Grid item key={key} xs={6} sx={{ px: "7px", py: "5px" }}>
                <AmenityItem>
                  {amenities?.type === "special" ?
                    <img src={SpecialIcon} />
                    :
                    <img src={MissingIcon} />
                  }

                  <Typography variant="fs12fw500" ml="17px" color="#8F8F8F"> {amenity} </Typography>

                </AmenityItem>
              </Grid>
            ))}
          </>
          :
          <>
            {amenities?.data.filter((item, index) => index < amenitiesToShow).map((amenity, key) => (
              <Grid item key={key} xs={6} sx={{ px: "7px", py: "5px" }}>
                <AmenityItem>
                  {amenities?.type === "special" ?
                    <img src={SpecialIcon} />
                    :
                    <img src={MissingIcon} />
                  }

                  <Typography variant="fs12fw500" ml="17px" color="#8F8F8F"> {amenity} </Typography>

                </AmenityItem>
              </Grid>
            ))}
          </>
        }

        {amenitiesLength > amenitiesToShow &&
          <Grid item xs={12} sx={{ textAlign: "right", pr: "42px" }}>
            <ButtonBase onClick={handelViewMore}>
              {viewMore === false ?
                <Typography variant="seeAll" fontSize="12px">
                  +{amenitiesLength - amenitiesToShow} More
                </Typography>
                :
                <Typography variant="seeAll" fontSize="12px">
                  View Less
                </Typography>
              }
            </ButtonBase>
          </Grid>
        }



      </Grid>
    </div>
  )
}

export default WhatsSpecial