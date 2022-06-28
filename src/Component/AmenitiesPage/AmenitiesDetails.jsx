import React, { useState } from 'react'
import { ButtonBase, Collapse, Grid, Paper, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function AmenitiesDetails({ dataList, bottomBorderWidth = "0.5px" }) {
    const [details, setDetails] = useState(false)

    const handelDetails = () => {
        setDetails((prev) => !prev)
    }
    return (
        <div>

            <Paper sx={{ backgroundColor: "#F9FBFF", border: "none", boxShadow: "none", borderBottom: `${bottomBorderWidth}  solid #D6D6D6` }}>
                <ButtonBase onClick={handelDetails}>
                    <Grid container sx={{ px: "17px", py: "12px", }} >
                        <Grid item xs={6} sx={{ textAlign: "left" }}>
                            <Typography variant="fs12fw700" color="#4D515B"> {dataList?.title} </Typography>
                        </Grid>
                        <Grid item xs={5} sx={{ textAlign: "right" }}>
                            <Typography variant="fs12fw500" color={dataList?.badgeColor}> {dataList?.badge} </Typography>
                        </Grid>

                        <Grid item xs={1} sx={{ textAlign: "right", pt: "4px", display: "flex", justifyContent: "end", alignItems: "center", }}>
                            {details === false  ?
                                <KeyboardArrowDownIcon color="#000000" fontSize="12px" />
                                :
                                <KeyboardArrowUpIcon color="#000000" fontSize="12px" />
                            }
                        </Grid>

                        <Collapse  in={details}>
                            <Grid xs={12}>
                                {dataList?.data}
                            </Grid>
                        </Collapse>

                    </Grid>
                </ButtonBase>
            </Paper>


        </div>
    )
}

export default AmenitiesDetails