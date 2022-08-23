import React from 'react'
import NavBar from './NavBar'
import Section from './Section'
import dummyText from "./DummyText"
import "./Tabs.css"
import { Box } from '@mui/material'
import NavBar2 from './NavBar2'
import Section2 from './Section2'

function Tabs2() {
    return (
        <div>

            <NavBar2 />

            <Box sx={{ pt: "20px" }}>
                <Section2 />
            </Box>


        </div>
    )
}

export default Tabs2