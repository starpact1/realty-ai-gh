import { Box } from '@mui/material'
import React from 'react'
import Header from '../../Component/SearchPage/Header'
import ReasonForInvesting from '../../Component/SearchPage/ReasonForInvesting'
import SearchChip from '../../Component/SearchPage/SearchChip'
import SearchFooter from '../../Component/SearchPage/SearchFooter'

function SearchPage() {
  return (
    <div>
        <Header />
        <Box sx = {{ mt: "70px" }}>
            <SearchChip />
        </Box>

        <ReasonForInvesting />
        <SearchFooter />
        
    </div>
  )
}

export default SearchPage