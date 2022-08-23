import { Box, Grid, Link, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import BasicTable3 from '../../Component/EaseOfReselling/BasicTable3'
import BHKToggleButton from '../../Component/LayoutsPage/BHKToggleButton'
import LayoutImage from '../../Component/LayoutsPage/LayoutImage'
import ShowMore from '../../Component/LayoutsPage/ShowMore'


const headings = ["Project", "Rating", "Carpet Area (sqft.)", "Kitchen (sqft.)", "Bedroom 1 (sqft.)"]

const rows = [
  {
    first: "Godhrej",
    firstLink: "#",
    second: 3.2,
    secondBadge: true,
    third: "1133",
    fourth: "33",
    fifth: "52"
  },
  {
    first: "Prime",
    firstLink: "#",
    second: 8.0,
    third: "1231",
    fourth: "31",
    fifth: "41",
    secondBadge: true,
  },
  {
    first: "Malady",
    firstLink: "#",
    second: 7.2,
    third: "1620",
    fourth: "36",
    fifth: "26",
    secondBadge: true,
  },
  {
    first: "Kailash",
    firstLink: "#",
    second: 8.2,
    third: "1324",
    fourth: "37",
    fifth: "30",
    secondBadge: true,
  },
  {
    first: "Rajni",
    firstLink: "#",
    second: 2.3,
    third: "1525",
    fourth: "33",
    fifth: "23",
    secondBadge: true,
  },

]

function LayoutsPage() {
  return (
    <div>
      <Paper variant="BGF9FBFF" sx={{ height: "auto", boxShadow: "none", mt: "-25px" }}>
        <Container variant="ct25" >
          <Grid container sx={{}}>
            <Grid item xs={8} sx={{ display: "flex", textAlign: "left", justifyContent: "start", alignItems: "center" }}>
              <Typography variant="salesPageHeading"> Layouts </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
              <Paper variant="scoreBadge" sx={{ width: "61px", backgroundColor: "#FBC11B" }}>
                6.5
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ mt: "15px", overflowX: "auto" }} className="overflowHidden">
          <BHKToggleButton />
        </Box>

        <Container variant="ct25" sx={{ mt: "12px" }}>
          <LayoutImage />

          <Box sx={{ textAlign: "left", pl: "25px" }}>
            {/* <Container variant="ct25"> */}
            <ul className="addSpace">
              <li>
                <Typography variant="fs14fw500">
                  Given project’s carpet area is  <Typography variant="redBadge"> smaller</Typography>  than the average carpet area in locality(1500 sqm.).
                </Typography>
              </li>

              <li sx={{ mt: "15px" }}>
                <Typography variant="fs14fw500">
                  Kitchen is   <Typography variant="redBadge"> very small </Typography>   compared to other kitchens in the locality.
                </Typography>
              </li>
            </ul>
            {/* </Container> */}

          </Box>
        </Container>

        <Box>
          <BasicTable3 rows={rows} headings={headings} />
        </Box>

        <Container variant="ct25">
          <Box sx={{ textAlign: "left", pl: "25px", pt: "6px" }}>
            {/* <Container variant="ct25"> */}
            <ul className="addSpace">
              <li>
                <Typography variant="fs14fw500" fontWeight={700}>
                  The rooms of the property are <Link href="#"> disproportionate </Link>. The ratio of largest room to smallest room is 3.2 which is  <Typography variant="redBadge"> bad</Typography>  compared to locality average of 8.8.
                </Typography>
              </li>

            </ul>
            {/* </Container> */}

          </Box>

          
        </Container>
        <Box sx={{ textAlign: "left" }}>
        <ShowMore />
        </Box>



      </Paper>
    </div>
  )
}

export default LayoutsPage