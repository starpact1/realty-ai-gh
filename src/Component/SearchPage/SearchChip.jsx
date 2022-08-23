import React, { useState } from 'react'
import { Autocomplete, Box, ButtonBase, Chip, Collapse, Container, Input, InputAdornment, InputBase, styled, TextField, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import top100Films from './Top100Films';
import CloseIcon from '@mui/icons-material/Close';
import RecnetSearchItem from './RecnetSearchItem';
import handleRenderOption from './handelRenderOption';


const SearchInputHolder = styled(Box)(({ theme }) => ({
  background: "#F4F4F4",
  borderRadius: "22.5px",
  paddingLeft: "20px",
  paddingRight: "20px",
  // paddingTop: "6px",
  // paddingBottom: "6px"

}))

const SelectedTags = styled(Box)(({ theme }) => ({
  textAlign: "left",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  paddingBottom: "10px",
  "&:empty": {
    paddingBottom: "0px",
  }

}))

const Chip1 = styled(Chip)(({ theme }) => ({
  background: "#FCFCFD",

  height: "38px",
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "18px",
  border: "1px solid #E0E2EB",
  // marginTop: "10px",
  color: "#000000",
  // zIndex: 9999,

}))




function SearchChip() {

  const [val, setVal] = useState([]);
  const [seeMore, setSeeMore] = useState(false)

  const valHtml = val.map((option, index) => {
    // This is to handle new options added by the user (allowed by freeSolo prop).
    const label = option.title || option;
    return (
      <Chip1
        key={label}
        label={label}
        deleteIcon={<CloseIcon sx={{ color: "#000000" }} />}
        // onClick = {() => { setVal(val.filter(entry => entry !== option)) }}
        onDelete={() => {
          setVal(val.filter(entry => entry !== option));
        }}
      />
    );
  });


  return (
    <div>
      <Container variant="ct13">

        <SearchInputHolder>
          <Autocomplete
            multiple
            id="tags-standard"
            freeSolo
            // autoSelect
            filterSelectedOptions
            disableClearable
            options={top100Films}
            onChange={(e, newValue) => setVal(newValue)}
            getOptionLabel={option => option.title}
            
            renderTags={() => { }}
            value={val}
            
            renderInput={params => {
              const { InputLabelProps, InputProps, ...rest } = params;
              
              return <InputBase {...params.InputProps} {...rest} autoFocus={true}  placeholder="City, Locality, Society" endAdornment={<InputAdornment position="end" sx={{ transform: "scaleX(-1)",   }}> <SearchIcon /> </InputAdornment>} sx={{ height: "48px", width: "100%", zIndex: 999999 }} />
              // return <TextField {...params} />
            }
            }

            // renderOption={ handleRenderOption }
          />

          <SelectedTags>{valHtml}</SelectedTags>
        </SearchInputHolder>

      </Container>

      <Container variant="ct22" sx={{ mt: "20px", textAlign: "left" }}>
        <Typography variant="fs16fw700" fontWeight="500"> Recently Searched </Typography>
        <Box sx={{ pt: "15px", display: "flex", gap: "8px" }}>
          <RecnetSearchItem title="Kandivali" />
          <RecnetSearchItem title="Malad" />
          <RecnetSearchItem title="Andheri" />
        </Box>
      </Container>

      <Container variant="ct22" sx={{ mt: "20px", textAlign: "left" }}>
        <Typography variant="fs16fw700" fontWeight="500"> Popular Properties in Mumbai </Typography>
        <Box sx={{ pt: "15px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <RecnetSearchItem title="Kandivali" image1={false} />
          <RecnetSearchItem title="Malad" image1={false} />
          <RecnetSearchItem title="Andheri" image1={false} />

          <ButtonBase onClick={() => setSeeMore(prev => !prev)} sx={{ textAlign: "left", justifyContent: "start", width: "max-content" }}>
            <Typography variant="seeAll">
              {seeMore ? "See Less" : "See more+"}

            </Typography>
          </ButtonBase>

          <Collapse in={seeMore} >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", pb: "26px" }}>
              <RecnetSearchItem title="Kandivali" image1={false} />
              <RecnetSearchItem title="Malad" image1={false} />
              <RecnetSearchItem title="Andheri" image1={false} />
            </Box>

          </Collapse>

        </Box>
      </Container>



    </div>
  )
}


export default SearchChip