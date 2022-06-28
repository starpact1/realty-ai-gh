import { Box, Paper } from '@mui/material'
import React from 'react'
import CompareBody from '../../Component/ComparePage/CompareBody'
import Header from '../../Component/ComparePage/Header'
import StaticFooter from '../../Component/StaticFooter'

function ComparePage() {
  return (
    <div>
        <Header />
        <CompareBody />
        <StaticFooter />
        <Box sx={{mt: "100px"}}>

        </Box>
    </div>
  )
}

export default ComparePage