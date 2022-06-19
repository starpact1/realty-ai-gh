import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import sliderValue from "../Images/Icon/slider-value.png"
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
  
      fontFamily: 'DM Sans',
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "10px",
      lineHeight: "183.2%",
  
      // padding: "12px",
      paddingTop: "10px",
    //   left: "0px",
      right: "-34px",
      pb: "6px",
      px: "7px",
      top: "56px",
      color: "#FFFFFF",
      backgroundColor: 'unset',
      backgroundImage: `url(${sliderValue})`,
      backgroundSize: "100% 100%",
      // border: "1px solid red",
      // color: theme.palette.text.primary,
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

  

function ValueSlider({min, max, defaultValue, valueDisplay, marks, showCurrency = false}) {
  return (
    <div>
        <IOSSlider
        aria-label="ios slider"
        defaultValue={defaultValue}
        marks={marks}
        min={min}
        max={max}
        valueLabelDisplay={valueDisplay}
        disableSwap
        valueLabelFormat={(value)=> { return (showCurrency ?   (new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumSignificantDigits: 3}).format(value)): value )}}
      />
    </div>
  )
}

export default ValueSlider