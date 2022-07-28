import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled, Typography } from '@mui/material';

function BigButtonsToggle() {

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        console.log(newAlignment)
        setAlignment(newAlignment);
    };

    const ToggleButton1 = styled(ToggleButton)({
        // height: "104px",
        width: "100%",
        background: "#FFFFFF",
        paddingTop: "10px",
        paddingLeft: "14px",
        paddingBottom: "10px",
        paddingRight: "14px",
       
        textTransform: "lowercase",
        border: "1px solid #F2F7FF;",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        marginBottom: "12px",
        borderRadius: "5px !important",
        "&.Mui-selected, &.Mui-selected:hover": {
            background: "#EFF8FF",
            border: "1px solid #1D58AF !important",
            boxShadow: "0px 2px 6px rgba(237, 237, 237, 0.5)",
            borderRadius: "5px",

        },
        
    });


    return (
        <div>
            <ToggleButtonGroup
                value={alignment}
                orientation="vertical"
                sx={{ borderRadius: "5px", width: "100%" }}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"

            >
                <ToggleButton1 value="1st" sx={{ justifyContent: "start", alignItems: "start", flexDirection: "column" }} aria-label="left aligned">
                    <Typography variant="fs14fw700" component="div" color="#1D58AF" sx={{ "&:first-letter": { textTransform: "uppercase" }}}> Long term investment </Typography>
                    <Typography variant="fs12fw400" component="div"> [Promising outskirts; </Typography>
                    <Typography variant="fs12fw400" component="div"> Time horizon > 10+ years; </Typography>
                    <Typography variant="fs12fw400" component="div"> Appreciation: >20% YOY] </Typography>
                </ToggleButton1>

                <ToggleButton1 value="2nd" sx={{ justifyContent: "start", alignItems: "start", flexDirection: "column" }} aria-label="left aligned">
                    <Typography variant="fs14fw700" component="div" color="#1D58AF" sx={{ "&:first-letter": { textTransform: "uppercase" }}}> Mid term investment </Typography>
                    <Typography variant="fs12fw400" component="div"> [Under construction in developing </Typography>
                    <Typography variant="fs12fw400" component="div"> Time horizon: 4 - 7 years; </Typography>
                    <Typography variant="fs12fw400" component="div"> Appreciation: >10% YOY] </Typography>
                </ToggleButton1>

                <ToggleButton1 value="3rd" sx={{ justifyContent: "start", alignItems: "start", flexDirection: "column" }} aria-label="left aligned">
                    <Typography variant="fs14fw700" component="div" color="#1D58AF" sx={{ "&:first-letter": { textTransform: "uppercase" }}}> High Rent </Typography>
                    <Typography variant="fs12fw400" component="div"> [City centres with proximity to commercial hubs; </Typography>
                    <Typography variant="fs12fw400" component="div"> Rental Yield: > 2.5%] </Typography>
                    
                </ToggleButton1>

                <ToggleButton1 value="4th" sx={{ justifyContent: "start", alignItems: "start", flexDirection: "column" }} aria-label="left aligned">
                    <Typography variant="fs14fw700" component="div" color="#1D58AF" sx={{ "&:first-letter": { textTransform: "uppercase" }}}> Self use </Typography>
                    <Typography variant="fs12fw400" component="div"> [City centres with proximity to Commercial hubs;  </Typography>
                    <Typography variant="fs12fw400" component="div"> Great Amenities & Layouts; </Typography>
                    <Typography variant="fs12fw400" component="div"> Great Connectivity] </Typography>
                </ToggleButton1>

                

            </ToggleButtonGroup>
        </div>
    )
}

export default BigButtonsToggle