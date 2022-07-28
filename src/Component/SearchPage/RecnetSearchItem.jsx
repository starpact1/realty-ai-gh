import React from 'react'
import { Box, styled } from '@mui/material'
import RecentIcon from "../../Images/Icon/RecentIcon.png"

const Item = styled(Box)(({ theme }) => ({

    background: "#FCFCFD",

    border: "1px solid #E0E2EB",
    boxShadow: "0px 4px 4px rgba(172, 195, 255, 0.2)",
    borderRadius: "50px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "15px",
    padding: "15px",
    width: "max-content",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "18px",


}))

function RecnetSearchItem({ title, image1 = true }) {
    return (
        <div>
            <Item>
                {image1 ?
                    <img src={RecentIcon} style={{ height: " 13px" }} />
                    :
                    undefined
                }

                <Box sx={{ pl: "7px" }}>
                    {title}
                </Box>
            </Item>
        </div>
    )
}

export default RecnetSearchItem