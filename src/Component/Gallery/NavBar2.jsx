import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar2({keys}) {
    return (
        <div>
            <Box className="overflowHidden" sx={{   overflow: "hidden", }}>
                <Box sx={{ display: "flex",position: "sticky", position: "-webkit-sticky", top: "10px",  justifyContent: "start", gap: "25px", px: "15px" }}>
                    {keys?.map((item, k) => 
                    
                    <Box key={k} sx={{ whiteSpace: "nowrap" }}>
                    <Link
                        activeClass="active"
                        to="item"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        <Typography variant="fs15fw700" fontSize="14px" textTransform="capitalize"> {item} </Typography>
                    </Link>
                </Box>

                    )}
                    
                    
                </Box>
            </Box>
        </div>
    )
}

export default NavBar2