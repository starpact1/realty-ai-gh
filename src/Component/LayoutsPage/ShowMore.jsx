import { Box, ButtonBase, Container, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BasicTable3 from '../EaseOfReselling/BasicTable3';

const headings = ["Room", "Room Area (sqft.)", "Ratio with largest room", "Locality Average"]
const rows = [
    {
        first: "Kitchen",
        second: "67",
        third: "1.23",
        fourth: "1.33",
        thirdRed: true,
        fourthRed: true,
    },
    {
        first: "Bedroom 1",
        second: "55",
        third: "0.85",
        fourth: "0.78",
        thirdRed: true,
        fourthRed: true,
    },
    {
        first: "Bedroom 2",
        second: "70",
        third: "1.45",
        fourth: "1.85",
        thirdRed: true,
        fourthRed: true,
    },
    {
        first: "Bathroom",
        second: "44",
        third: "0.88",
        fourth: "0.96",
        thirdRed: true,
        fourthRed: true,
    },
]

function ShowMore() {

    const [showType, setShowType] = useState("Show More")

    const handleClick = () => {
        if (showType === "Show More")
            setShowType("Show Less")
        if (showType == "Show Less")
            setShowType("Show More")
    }

    return (
        <div>
            <>
                {showType === "Show Less" &&

                    <BasicTable3 rows={rows} headings={headings} />
                }
                <Container variant="ct25">
                <ButtonBase onClick={handleClick}>
                    <Typography variant="seeAll" fontSize="12px">
                        {showType}
                        {showType === "Show More" ?
                            <KeyboardArrowDownIcon fontSize="small" sx={{ mb: "-7px" }} />
                            :
                            <KeyboardArrowUpIcon fontSize="small" sx={{ mb: "-7px" }} />
                        }

                    </Typography>

                </ButtonBase>
                </Container>
            </>
        </div>
    )
}

export default ShowMore