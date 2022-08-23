import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    console.log(newAlignment)
    setAlignment(newAlignment);
  };

  const ToggleButton1 = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: 'red'
    }
  });

  return (
    <ToggleButtonGroup
      value={alignment}
      
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      
    >  
      <ToggleButton1 value="left" sx={{mr: "26px", color: "red"}}  aria-label="left aligned">
      3 BHK (731 sqft.)
      </ToggleButton1>
      <ToggleButton1 value="center"  aria-label="centered">
      2 BHK (503 sqft.)
      </ToggleButton1>
      <ToggleButton1 value="right"  aria-label="right aligned">
      1 BHK (912 sqft.)
      </ToggleButton1>
      
     </ToggleButtonGroup>

  );
}
