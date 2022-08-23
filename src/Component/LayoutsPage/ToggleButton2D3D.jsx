import React, { useEffect } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, styled } from '@mui/material';

function ToggleButton2D3D({gdt}) {

  const [alignment, setAlignment] = React.useState('2D');

  useEffect(() => {
    gdt(alignment)
  }, [alignment])
  

  const handleAlignment = (event, newAlignment) => {
    
    setAlignment(newAlignment);
  };



  const ToggleButton1 = styled(ToggleButton)({
    whiteSpace: "nowrap",
    width: "40px",
    height: "22px",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "150%",
    // border: "1px solid #00286B",
    
    
    /* identical to box height, or 13px */
    letterSpacing: "0.02em",
    color: "#253334",
    
    // borderTopRightRadius: "5px !important",
    // borderBottomRightRadius: "5px !important",
    
    background: "#FFFFFF",
    margin: "-0.6px",

    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: '#1554B4',
      borderRadius: "5px !important",
      // marginTop: "-1px",
      // marginRight: "-1px",
      // height: "23px"

    }
  });



  return (
    <Box sx={{  height: "22px" }}>
    <ToggleButtonGroup
      value={alignment}
      sx={{ borderRadius: "5px", border: "1px solid #00286B",   }}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"

    >
      <ToggleButton1 value="2D" sx={{ mr: "1px", borderRight: "none" }} aria-label="left aligned">
        2D
      </ToggleButton1>
      <ToggleButton1 value="3D"   aria-label="right aligned">
        3D
      </ToggleButton1>


    </ToggleButtonGroup>
    </Box>
  )
}

export default ToggleButton2D3D