import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled, Typography } from '@mui/material';
import RedDownCarret from "../../Images/Icon/RedDownCarret.png"
import GreenUpCarret from "../../Images/Icon/GreenUpCarret.png"
import { Link } from "react-router-dom"

const THeadCell = styled(TableCell)(({ theme, padding }) => ({
    textAlign: "center",
    // whiteSpace: "nowrap",
    width: "25%",
    padding: `0px`,
    border: "1px solid #D1CFD7",
    whiteSpace: "pre-line",
    // padding: "6px"
}))

const TCell = styled(TableCell)(({ theme, padding }) => ({
    textAlign: "center",
    display: "table-cell",

    // whiteSpace: "nowrap",
    width: "25%",
    padding: `${padding}`,
    paddingTop: "6px",
    paddingBottom: "6px",
    border: "1px solid #D1CFD7",
    whiteSpace: "nowrap"
}))

function BasicTable2({ headings, rows, padding }) {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "100%", }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ background: "#F7F7FA" }}>
                            {headings.map((heading, key) => (
                                <THeadCell align="center" > <Typography variant='salesTableHeading2'> {heading} </Typography> </THeadCell>
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
                                <TCell component="th" scope="row" padding={padding}>
                                    {row.firstLink == "#" ?
                                        <>
                                            <Link to="#">
                                                <Typography variant="salesTableBody2"> {row.first} </Typography>
                                            </Link>
                                        </>
                                        :
                                        <Typography variant="salesTableBody2"> {row.first} </Typography>
                                    }
                                </TCell>
                                <TCell padding={padding} align="center"> <Typography variant="salesTableBody2"> {row.second} </Typography> </TCell>
                                <TCell padding={padding}>
                                    <Typography variant="salesTableBody2" color={row.thirdColor}> {row.third} </Typography>
                                    { row.thirdCarret == "down" && <img src={RedDownCarret} style={{ marginLeft: "7px" }} />

                                    }

                                    { row.thirdCarret == "up" && <img src={GreenUpCarret} style={{ marginLeft: "7px" }} />

                                    }
                                    
                                </TCell>
                                {row.fourth &&
                                    <TCell padding={padding}>
                                        <Typography variant="salesTableBody2" color={row.fourthColor}> {row.fourth} </Typography>
                                        {row.fourthCarret == "down" ?
                                            <img src={RedDownCarret} style={{ marginLeft: "7px" }} /> :
                                            <img src={GreenUpCarret} style={{ marginLeft: "7px" }} />
                                        }
                                    </TCell>
                                }

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BasicTable2