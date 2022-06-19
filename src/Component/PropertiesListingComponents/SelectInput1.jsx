import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import bhkDoor from "../../Images/Icon/BHKDoor.png"
import { InputAdornment } from '@mui/material';
import "./SearchAndSort.css";


  
function SelectInput1({image1, dataset}) {
  const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };

      const style = {
        control: base => ({
          ...base,
          border: 0,
          // This line disable the blue border
          boxShadow: "none"
        })
      };
    
  return (
    <div>
        kjhjh
        
        <Select
          
          className='selectInput1'
          
          value={age}
          
          onChange={handleChange}
          
          startAdornment={<InputAdornment position="start"><img src={bhkDoor} /></InputAdornment>}
        >
          <MenuItem value={10}><img src={bhkDoor}/>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      
    </div>
  )
}

export default SelectInput1