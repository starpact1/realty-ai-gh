import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material';

function BHKToggleButton() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        console.log(newAlignment)
        setAlignment(newAlignment);
    };

    const ToggleButton1 = styled(ToggleButton)({
        whiteSpace: "nowrap",
        width: "136px",
        height: "23px",

        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 13,
        lineHeight: "100%",
        border: "none",
        /* identical to box height, or 13px */
        letterSpacing: "0.02em",
        color: "#253334",
        borderRadius: "5px !important",
        // borderTopRightRadius: "5px !important",
        // borderBottomRightRadius: "5px !important",
        marginLeft: "20px",
        background: "#E0F2FF",

        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            backgroundColor: '#1554B4',

        }
    });

    return (
        <ToggleButtonGroup
            value={alignment}
            sx={{borderRadius: "5px"}}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"

        >
            <ToggleButton1 value="left" sx={{mr: "7px"}}  aria-label="left aligned">
                3 BHK (731 sqft.)
            </ToggleButton1>
            <ToggleButton1 value="center" sx={{mr: "7px"}} aria-label="centered">
                2 BHK (503 sqft.)
            </ToggleButton1>
            <ToggleButton1 value="right"  aria-label="right aligned">
                1 BHK (912 sqft.)
            </ToggleButton1>

        </ToggleButtonGroup>
    )
}

export default BHKToggleButton