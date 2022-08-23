import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled, Typography, Link } from '@mui/material';



const THeadCell = styled(TableCell)(({ theme, padding, minWidth }) => ({
    textAlign: "center",
    // whiteSpace: "nowrap",
    minWidth: `${minWidth}` || "86px",
    padding: `0px`,
    border: "1px solid #D1CFD7",
    whiteSpace: "pre-line",
    // padding: "6px"
}))

const TCell = styled(TableCell)(({ theme, padding }) => ({
    textAlign: "center",
    display: "table-cell",
    color: "#1B2641",
    padding: `${padding}`,
    paddingTop: "6px",
    paddingBottom: "6px",
    border: "1px solid #D1CFD7",
    
}))



function BuilderTable({ headings, rows, padding }) {


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "100%", }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ background: "#F7F7FA" }}>
                            {headings.map((heading, key) => (
                                <THeadCell align="center" minWidth="76px"> <Typography variant='salesTableHeading3'> {heading} </Typography> </THeadCell>
                            ))}

                            {/* <TCell align="center" > <Typography variant='salesTableHeading'> Completion % </Typography> </TCell>
            <TCell align="center" > <Typography variant='salesTableHeading'> Sales/Total </Typography> </TCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ background: "#FFFFFF", '&:last-child': { borderBottom: 0 } }}>
                        {rows?.map((row, key) => (

                            <TableRow
                                key={row.first}
                                sx={{ border: `${row.first == "Anindya" && "1.2px solid #00286B"} ` }}
                            >
                                <TCell component="th" scope="row" padding={padding} >
                                    <Typography variant="salesTableBody3" color={row.firstColor} >
                                        {row.first}
                                    </Typography>
                                </TCell>

                                <TCell padding={padding} align="center">
                                    <Typography variant="salesTableBody3" color={row.secondColor}>
                                        {row.second}
                                    </Typography>
                                </TCell>

                                <TCell padding={padding} sx={{ whiteSpace: "nowrap" }}>
                                    <Typography variant="salesTableBody3" >
                                        {row.third}
                                    </Typography>
                                </TCell>


                                <TCell padding={padding}>
                                    <Typography variant="salesTableBody3" >
                                        {row.fourth}
                                    </Typography>
                                </TCell>



                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BuilderTable