import { Box } from '@mui/material'
import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Tabs() {
    return (
        <div>
            <Box  sx={{  position: "sticky",  top: "300px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-around", borderBottom: "1px solid #DBDBDB", px: "1px", pt: "12px" }}>


                    <Box sx={{ whiteSpace: "nowrap", fontSize: "14px", pb: "8px", color: "#263238", textTransform: "capitalize", fontWeight: "400", }}>
                        <Link
                            activeClass="active"
                            to="Indicators"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                            style={{ paddingBottom: "8.1px", paddingLeft: "8px", paddingRight: "8px" }}
                        >
                            Indicators
                        </Link>
                    </Box>

                    <Box sx={{ whiteSpace: "nowrap", fontSize: "14px", pb: "8px", color: "#263238", textTransform: "capitalize", fontWeight: "400", }}>
                        <Link
                            activeClass="active"
                            to="BuilderRisk"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                            style={{ paddingBottom: "8.1px", paddingLeft: "8px", paddingRight: "8px" }}
                        >
                           Builder Risks
                        </Link>
                    </Box>

                    <Box sx={{ whiteSpace: "nowrap", fontSize: "14px", pb: "8px", color: "#263238", textTransform: "capitalize", fontWeight: "400", }}>
                        <Link
                            activeClass="active"
                            to="LivabilityFactor"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                            style={{ paddingBottom: "8.1px", paddingLeft: "8px", paddingRight: "8px" }}
                        >
                            Livability Factors
                        </Link>
                    </Box>



                </Box>
            </Box>
        </div>
    )
}

export default Tabs