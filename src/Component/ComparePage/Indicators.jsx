import React, { useEffect, useRef, useState } from 'react'
import { Box, Collapse, styled, Typography, ButtonBase } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Box116 = styled(Box)(({ theme }) => ({
    width: "142px",
    // paddingTop: "12px",
    // paddingBottom: "12px",
    paddingRight: "11px",
    paddingLeft: "11px",
    height: "42px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "pre-line",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "18px",
    /* identical to box height, or 150% */

    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-0.08px",

    color: "#000000",
}))

const Box112 = styled(Box)(({ theme }) => ({
    width: "112px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingRight: "11px",
    paddingLeft: "11px",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "18px",
    /* identical to box height, or 150% */

    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-0.08px",

    color: "#000000",
}))

function Indicators({ data }) {


    const [viewMore, setViewMore] = useState(true)

    const handelViewChange = () => {
        setViewMore((prev) => !prev)
    }

    const indicatorRef = useRef()
    const [placeTop, setPlaceTop] = useState(0);
    const getTopPosition = () => {

        setPlaceTop( parseInt(indicatorRef.current.offsetTop) + 30 )
        
        console.log(placeTop)
    }

    useEffect(() => {

        getTopPosition();

    }, [])
    


    return (
        <div>

            <Box sx={{ width: "100vw", position: "absolute", top: `${placeTop}`,  background: "#F4F6FC", height: "45px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="fs14fw500"> {data.header} </Typography>
                <Box sx={{ position: "absolute", right: "14px", pt: "4px" }}>
                    <ButtonBase onClick={handelViewChange}>
                        {viewMore == true ?
                            <KeyboardArrowUpIcon fontSize="8px" />
                            :
                            <KeyboardArrowDownIcon fontSize="8px" />
                        }

                    </ButtonBase>

                </Box>

            </Box>
            <Collapse in={viewMore} ref={indicatorRef}>
                <Box sx={{ display: "flex",  }}>
                    <Box sx={{ mt: "46px", borderRight: "1px solid #D1CFD7" }}>
                        {data.content?.map((item, key) => (
                            <Box116 key={key}>
                                {item.title}
                            </Box116>
                        ))}


                    </Box>

                    <Box sx={{ mt: "46px", borderRight: "1px solid #D1CFD7" }}>
                        {data.content?.map((item, key) => (
                            <Box112 key={key} sx={{ background: `${item.firstColor}` }}>
                                {item.first}
                            </Box112>
                        ))}


                    </Box>

                    <Box sx={{ mt: "46px", borderRight: "1px solid #D1CFD7" }}>

                        {data.content?.map((item, key) => (
                            <Box112 key={key}>
                                {item.second}
                            </Box112>
                        ))}


                    </Box>

                    <Box sx={{ mt: "46px", borderRight: "1px solid #D1CFD7" }}>

                        {data.content?.map((item, key) => (
                            <Box112 key={key}>
                                {item.third}
                            </Box112>
                        ))}


                    </Box>
                </Box>
            </Collapse>
        </div>
    )
}

export default Indicators