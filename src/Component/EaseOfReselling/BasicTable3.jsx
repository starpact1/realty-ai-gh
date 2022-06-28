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

    // whiteSpace: "nowrap",
    // width: "",
    padding: `${padding}`,
    paddingTop: "6px",
    paddingBottom: "6px",
    border: "1px solid #D1CFD7",
    whiteSpace: "nowrap"
}))



function BasicTable3({ headings, rows, padding }) {

    const [textBadge, setTextBadge] = useState("greenBadge")

    function getBadgeType(score) {
        let badgeType = "tableRedBadge";
        

        if (score < 4) {
            badgeType = "tableRedBadge"
           
        }
        else if (score > 4 && score < 8) {
            badgeType = "tableYellowBadge"
            
        }
        else if (score => 8) {
            badgeType = "tableGreenBadge"
           
        }
        console.log(score, badgeType)
        return badgeType;
    }

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
                                <TCell component="th" scope="row" padding={padding} sx={{ whiteSpace: "pre-line" }}>
                                    {row.firstLink == "#" ?
                                        <>
                                            <Link to="#" >
                                                <Typography variant="salesTableBody3" color="#1D58AF"> {row.first} </Typography>
                                            </Link>
                                        </>
                                        :
                                        <Typography variant="salesTableBody3"> {row.first} </Typography>
                                    }
                                </TCell>

                                <TCell padding={padding} align="center">

                                    {row.secondBadge ? 
                                        
                                        <Paper variant= { getBadgeType(row.second)}>                                         
                                                
                                                {row.second}                                            
                                        </Paper>
                                        

                                        :
                                        <Typography variant="salesTableBody3">
                                            {/* {row.secondBadge ?
                                            <Typography variant= { getBadgeType(row.second)} > {row.second.toFixed(1)} </Typography> :
                                            <> {row.second} </>} */}
                                            {row.second}

                                        </Typography>
                                    }
                                </TCell>

                                <TCell padding={padding}>
                                    <Typography variant="salesTableBody3" color={ row.thirdRed == true ? parseFloat(row.third) < 1 && "#DB3B3B" : "" } > 
                                       {row.third}
                                    </Typography>
                                </TCell>

                                <TCell padding={padding} sx={{ backgroundColor: `${row.fourthBackground}` }}>
                                    <Typography variant="salesTableBody3" color={ row.fourthRed == true ? parseFloat(row.fourth) < 1 && "#DB3B3B" : "" }> {row.fourth} </Typography>
                                </TCell>

                                {row.fifth &&
                                    <TCell padding={padding} sx={{ backgroundColor: `${row.fifthBackground}` }}>
                                        <Typography variant="salesTableBody3" > {row.fifth} </Typography>
                                    </TCell>
                                }

                                {row.sixth &&
                                    <TCell padding={padding}>
                                        <Typography variant="salesTableBody3" > {row.sixth} </Typography>
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

export default BasicTable3