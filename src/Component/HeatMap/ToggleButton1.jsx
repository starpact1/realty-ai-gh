import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material';

function ToggleButton1() {

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        console.log(newAlignment)
        setAlignment(newAlignment);
    };

    const ToggleButton2 = styled(ToggleButton)({
        whiteSpace: "nowrap",
        // width: "136px",
        // height: "23px",
        marginTop: "15px",
        paddingTop: "6px",
        paddingBottom: "6px",
        paddingLeft: "8px",
        paddingRight: "8px",
        textTransform: "none",

        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "100%",
        border: "none",
        /* identical to box height, or 13px */
        letterSpacing: "0.02em",
        color: "#253334",
        borderRadius: "5px !important",
        // borderTopRightRadius: "5px !important",
        // borderBottomRightRadius: "5px !important",
        // marginLeft: "20px",
        background: "#E0F2FF",

        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            backgroundColor: '#1554B4',

        }
    });

  return (
    <div>
        <ToggleButtonGroup
            value={alignment}
            sx={{borderRadius: "5px", display: "block", maxWidth: "100vh"}}
            exclusive
            onChange={handleAlignment}           
            aria-label="text alignment"

        >
            <ToggleButton2 value="left" sx={{mr: "7px"}}  aria-label="left aligned">
            Sales
            </ToggleButton2>
            <ToggleButton2 value="center" sx={{mr: "7px"}} aria-label="centered">
            Appreciation
            </ToggleButton2>
            <ToggleButton2 value="right" sx={{mr: "7px"}} aria-label="centered aligned">
            Rental Yield
            </ToggleButton2>
            
            <ToggleButton2 value="renting" sx={{mr: "7px", }} aria-label="centered">
            Ease of Renting
            </ToggleButton2>

            <ToggleButton2 value="selling"  aria-label="left aligned">
            Ease of Selling
            </ToggleButton2>
        </ToggleButtonGroup>
    </div>
  )
}

export default ToggleButton1