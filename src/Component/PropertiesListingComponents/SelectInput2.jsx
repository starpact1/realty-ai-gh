import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BHKDoor from "../../Images/Icon/BHKDoor.png"

function SelectInput2({ image1, allOptions }) {
    const [options, setOptions] = useState(allOptions)
    // useEffect((dataOptions) => {
    //   setDataOption(dataOptions)
    // }, [])

    
    
    return (
        <>
            <Box sx={{ height: "48px", background: "#FFFFFF", border: "1px solid #D6D6D6", width: "max-content", borderRadius: "12px", py: "13px", px: "16px", display: "flex", flexDirection: "row" }}>
                <img src={image1} style={{ height: "21.17px" }} />
                <select style={{ outline: "none", backgroundColor: "inherit", paddingLeft: "8px", paddingRight: "12px", border: "none", fontFamily: "DM Sans", fontStyle: "normal", fontWeight: 400, fontSize: 14, lineHeight: "183.2%", }}>
                    {allOptions?.map((item, key) => 
                         <option key={key} value={item.value} >{item.text}</option>
                    )}                   
                    
                </select>
                
            </Box>

        </>
    )
}

export default SelectInput2