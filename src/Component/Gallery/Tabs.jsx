import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import useScrollSpy from 'react-use-scrollspy';
import "./Tabs.css"

function Tabs() {


    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const activeSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: -200,
    });

    const handelSpanClick = (i) => {
        
    }

    // const heightRef = useRef()
    // const [rHeight, setRHeight] = useState("92px");

    // useEffect(() => {
    //     setRHeight(heightRef.current.offsetTop+"px")
    //  console.log (heightRef.current.offsetTop)
    // }, [])
    

    return (
        <div>
            <Box  sx={{  border: "1px solid", overflow:"auto"}}>

            
            <nav className="App-navigation" style={{position: "fixed"}}>
                <span className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Section 1</span>
                <span className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Section 2</span>
                <span className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Section 3</span>
                <span className={activeSection === 3 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Section 4</span>
            </nav>

            <section style={{height: "400px"}} className="App-section" ref={sectionRefs[0]}>
                <h1>Section 1</h1>
            </section>
            <section style={{height: "400px"}} className="App-section" ref={sectionRefs[1]}>
                <h1>Section 2</h1>
            </section>
            <section style={{height: "400px"}} className="App-section" ref={sectionRefs[2]}>
                <h1>Section 3</h1>
            </section>
            <section style={{height: "400px"}} className="App-section" ref={sectionRefs[3]}>
                <h1>Section 4</h1>
            </section>
            </Box>
        </div>
    )
}

export default Tabs