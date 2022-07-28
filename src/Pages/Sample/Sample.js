import React, { useEffect, useRef, useState } from 'react'
import { Box, Paper } from '@mui/material'
import Header from '../../Component/SamplePage/Header'
import Tabs from '../../Component/SamplePage/Tabs'
import TabsBody from '../../Component/SamplePage/TabsBody'
import Document from '../../Component/SamplePage/Document'
import CompareBody from '../../Component/ComparePage/CompareBody'
import OtherRecomandedProjects from '../../Component/SearchPage/OtherRecomandedProjects'

import StaticFooter from "../../Component/StaticFooter"

function Sample() {

    const TabsBodyTop = useRef()

    // console.log(TabsBodyTop.current.offsetTop)
    const [styles, setStyles] = useState();

    const handleScroll = () => {
        // console.log(TabsBodyTop.current.offsetTop)
        let top = window.scrollY
        top > 400 ? setStyles({ width: "100%", position: "fixed", top: "0px", borderBottom: "1px solid", zIndex: "99", background: "#ffffff" }) : setStyles({ width: "100%" })

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })


    return (
        <div>
            <Box sx={{ mt: "-25px" }}>
                <Header />
                <Box ref={TabsBodyTop}>

                </Box>
                <Box sx={styles}>
                    <Tabs />
                </Box>

                <TabsBody />

                <Box sx={{ mt: "16px" }}>
                <Document />
                </Box>
                

                <Box sx={{ mt: "16px" }}>
                    <CompareBody allowSelect={false} />
                </Box>

                <Box sx={{ mt: "16px" }}>
                    <OtherRecomandedProjects />
                </Box>

                <Box sx={{mt: "98px"}}>
                    <StaticFooter />
                </Box>




            </Box>

        </div>
    )
}

export default Sample