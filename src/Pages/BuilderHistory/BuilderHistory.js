import { Box, Button, Collapse, Container, Link, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import BuilderHistoryHeader from '../../Component/BuilderHistory/BuilderHistoryHeader'
import BuilderTable from '../../Component/BuilderHistory/BuilderTable'
import NewsBuilder from '../../Component/BuilderHistory/NewsBuilder'
import NewsImage1 from "../../Images/Image1/NewsImag1.png"
import NewsImage2 from "../../Images/Image1/NewsImage2.png"

const allNews = [
    {
        heading: "Gurugram: Buyers protest against Myra Infratech builder",
        body: "If the builder had forged documents, how did the DTCP issue a license to him......",
        provider: "India Today",
        time: "7 hours ago",
        image1: `${NewsImage1}`
    },
    {
        heading: "Chennai: Builder breaks green laws, fined Rs 5.5 crore",
        body: "But the builder went ahead with the construction and increased the total residential units....",
        provider: "Times of India",
        time: "9 hours ago",
        image1: `${NewsImage2}`
    },
    {
        heading: "Gurugram: Buyers protest against Myra Infratech builder",
        body: "If the builder had forged documents, how did the DTCP issue a license to him......",
        provider: "India Today",
        time: "7 hours ago",
        image1: `${NewsImage1}`
    },
    {
        heading: "Chennai: Builder breaks green laws, fined Rs 5.5 crore",
        body: "But the builder went ahead with the construction and increased the total residential units....",
        provider: "Times of India",
        time: "9 hours ago",
        image1: `${NewsImage2}`
    }

]

const headings = ["Project", "Status", "Performance", "sales"]

const rows = [
    {
        first: "Rashmi Dev, Hyderabad",
        second: "Completed, 2022",
        third: "On-time",
        fourth: "144/280 (40%)"
    },
    {
        first: "Parvati Dev, Hyderabad",
        second: "Completed, 2022",
        third: "On-time",
        fourth: "344/380 (20%)"
    },
    {
        first: "Rashmi Dev, Hyderabad",
        second: "Completed, 2022",
        third: "On-time",
        fourth: "144/280 (40%)"
    },
    {
        first: "Parvati Dev, Hyderabad",
        second: "Completed, 2022",
        third: "On-time",
        fourth: "344/380 (20%)"
    },
    {
        first: "Parvati Dev, Hyderabad",
        second: "Completed, 2022",
        third: "On-time",
        fourth: "344/380 (20%)"
    }
]

function BuilderHistory() {

    const [viewMore, setViewMore] = useState(true)

    const handelViewMore = () => {
        setViewMore((prev) => !prev)
    }

    return (
        <div>
            <Paper variant="BGF9FBFF" sx={{ minHeight: "100vh", height: "auto", boxShadow: "none", mt: "-25px" }}>
                <BuilderHistoryHeader />

                <Box sx={{ mt: "20px" }}>
                    <BuilderTable rows={rows} headings={headings} />
                </Box>

                {/* <Container variant="ct25" sx={{ textAlign: "left", mt: "20px" }}>
                    <Link href="#" onClick={handelViewMore}>
                        <Typography variant="seeAll" fontSize="12px">
                            { viewMore ? <span> View Less </span> : <span> View More </span> }
                            
                        </Typography>
                    </Link>
                </Container> */}

                <Collapse in={viewMore}>
                    <Container variant="ct25" sx={{ textAlign: "left", mt: "15px" }}>
                        <Typography variant="fs16fw700">  News about builder </Typography>
                        <Box sx={{ pt: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>

                            {allNews.map((news, key) => (
                                <NewsBuilder key={key} news={news} />
                            ))}

                        </Box>

                        <Box sx={{ textAlign: "center", mt: "17px" }}>
                            <Button variant="button4" >
                                Show More
                            </Button>
                        </Box>
                    </Container>
                </Collapse>


            </Paper>
        </div>
    )
}

export default BuilderHistory