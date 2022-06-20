import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
    height: 2,
    padding: '32px 0',
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      border: "5px solid #0957CB",
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      '&:focus, &:hover, &.Mui-active': {
        boxShadow:
          '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    '& .MuiSlider-valueLabel': {
  
      
      '&:before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#FFFFFF',
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
      height: "5px",
      backgroundColor: "#0957CB",
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      height: "5px",
      backgroundColor: '#bfbfbf',
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    },
  }));

function StaticDisplaySlider({ defaultValue, marks, min, max, valueDisplay, symbol }) {

    const [score, setScore] = useState( defaultValue + symbol )

    const handelChange = (value) => {
        setScore( value + symbol )
    }

  return (
    <div>
        <Box sx={{textAlign : "center", mb: "-6px"}}>
            <Typography variant="fs12fw500" padding={0}> {score } </Typography>
        </Box>
        <IOSSlider
        aria-label="ios slider"
        defaultValue={defaultValue}
        marks={marks}
        min={min}
        max={max}
        valueLabelDisplay={valueDisplay}
        onChange={ (e) => handelChange(e.target.value) }
        // valueLabelFormat={(value)=> value+" %" }
      />
    </div>
  )
}

export default StaticDisplaySlider