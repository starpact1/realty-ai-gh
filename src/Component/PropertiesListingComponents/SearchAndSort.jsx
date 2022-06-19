import React from 'react'
import { Box, Button, ButtonBase, Grid, InputAdornment, InputBase, Paper, styled, Typography } from '@mui/material'
import SearchIconPng from "../../Images/Icon/Search-Black.png"
import { Container } from '@mui/system'
import MapIcon from "../../Images/Icon/MapIcon.png"
import FilterIcon1 from "../../Images/Icon/filter1.png"
import BHKIcon from "../../Images/Icon/BHKDoor.png"
import WalletIcon from "../../Images/Icon/wallet.png"
import SortIcon from "../../Images/Icon/SortIcon.png"
import "./SearchAndSort.css"
import SelectInput2 from './SelectInput2'

const MapButton = styled(ButtonBase)(({ theme }) => ({

  height: "48px",
  paddingTop: "14px",
  paddingLeft: "14px",
  paddingBottom: "16px",
  paddingRight: "14px",
  background: "#FFFFFF",
  border: "0.8px solid #D6D6D6",
  borderRadius: "12px",

}))

const ItemContainerBox = styled(Box)(({ theme }) => ({
  marginLeft: "8px"
}))



function SearchAndSort({ wishlist = false }) {

  const BHKDataOptions = [
    {
      value: "1 BHK",
      text: "1 BHK"
    },
    {
      value: "2 BHK",
      text: "2 BHK"
    },
    {
      value: "3 BHK",
      text: "3 BHK"
    }

  ]

  const PriceOptions = [
    {
      value: "5000000",
      text: "50 L +"
    },
    {
      value: "10000000",
      text: "1 Cr +"
    },
    {
      value: "20000000",
      text: "2 Cr +"
    }

  ]

  return (
    <div>

      <Paper variant="BGF9FBFF" sx={{ mt: "-22px" }}>
        <Container variant="ct16">
          <Grid container spacing={1}>
            <Grid item xs={wishlist ? 8 : 10}>
              <InputBase type="seacrh" sx={{ height: "48px" }} className="roundedInput1"
                placeholder=" Gurgaon, Long term " endAdornment={<InputAdornment position="end"><img src={SearchIconPng} /></InputAdornment>} fullWidth />
            </Grid>
            {wishlist &&
              <>
                <Grid item xs={2}>
                  <MapButton>
                    <img src={SortIcon} />
                  </MapButton>
                </Grid>
              </>

            }

            <Grid item xs={2}>
              <MapButton>
                <img src={MapIcon} />
              </MapButton>
            </Grid>

          </Grid>

          <Grid container sx={{ overflowX: "hidden" }}>
            <Grid item xs={12} className="overflowHidden" sx={{ overflow: "auto", scrollbarWidth: "none", display: "flex", flexDirection: "row", pt: "14px", color: "#1A1E25", textAlign: "left" }} >
              {/* Content 1 */}

              <MapButton sx={{ flexDirection: "column", height: "48px", pt: "9px", pb: "4px", px: "9px" }}>
                <img src={FilterIcon1} />

                <Typography variant="fs10fw500" lineHeight="183.2%" color="inherit"> Filters </Typography>
              </MapButton>
              {/* Content 1 */}
              {/* Content 2 */}
              <ItemContainerBox>
                <SelectInput2 image1={BHKIcon} allOptions={BHKDataOptions} />
              </ItemContainerBox>
              {/* Content 2 */}

              {/* Content 3 */}
              <ItemContainerBox>
                <SelectInput2 image1={WalletIcon} allOptions={PriceOptions} />
              </ItemContainerBox>
              {/* Content 3 */}

              {/* Content 4 */}
              <ItemContainerBox>
                <SelectInput2 image1={WalletIcon} allOptions={PriceOptions} />
              </ItemContainerBox>
              {/* Content 4 */}



            </Grid>
          </Grid>

        </Container>
      </Paper>

    </div>
  )
}

export default SearchAndSort