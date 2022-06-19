import { Button, Container } from '@mui/material'
import React from 'react'
import Appreciation from '../../Component/FilterScreenComponent/Appreciation'
import Area from '../../Component/FilterScreenComponent/Area'
import ConstructionStatus from '../../Component/FilterScreenComponent/ConstructionStatus'


import Header from '../../Component/FilterScreenComponent/Header'
import Price from '../../Component/FilterScreenComponent/Price'
import Progress from '../../Component/FilterScreenComponent/Progress'
import PropertyType from '../../Component/FilterScreenComponent/PropertyType'
import RentalYield from '../../Component/FilterScreenComponent/RentalYield'
import Risk from '../../Component/FilterScreenComponent/Risk'
import Sorting from '../../Component/FilterScreenComponent/Sorting'
import UnitType from '../../Component/FilterScreenComponent/UnitType'

function FilterScreen() {
    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <Header />
            <Sorting />
            <PropertyType />
            <Price />
            <Area />
            <ConstructionStatus />
            <UnitType />
            <Appreciation />
            <RentalYield />
            <Risk />
            <Progress />
            <Container sx={{px: "20px", mt: "22px"}}>
            <Button variant="button2" sx={{width: "100%", py: "16px", fontSize: "20px", lineHeight: "26px", fontFamily: "DM Sans", fontStyle: "normal", fontWeight:700}}>
                Apply
            </Button>
            </Container>
            
        </div>
    )
}

export default FilterScreen