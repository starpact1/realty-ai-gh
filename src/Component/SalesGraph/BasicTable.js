import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled, Typography } from '@mui/material';

function createData(name, completion, sale_total) {
  return { name, completion, sale_total };
}

// const rows = [
//   createData('Anindya', "50%", "144/280 (50%)"),
//   createData('Rajpushpa', "50%", "208/280 (50%)"),
//   createData('Anjan', "50%", "154/280 (50%)"),
  
// ];

const TCell = styled(TableCell)(({theme, padding})=>({
    textAlign: "center",
    // whiteSpace: "nowrap",
    padding: `${padding}`,
    border: "1px solid #D1CFD7" 
}))

export default function BasicTable({headings, rows, padding}) {
  console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%", borderCollapse: "collapse"  }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ background: "#F7F7FA" }}>
            {headings.map((heading, key) => (
              <TCell align="center" > <Typography variant='salesTableHeading'> {heading} </Typography> </TCell>
            ))}
            
            {/* <TCell align="center" > <Typography variant='salesTableHeading'> Completion % </Typography> </TCell>
            <TCell align="center" > <Typography variant='salesTableHeading'> Sales/Total </Typography> </TCell> */}
          </TableRow>
        </TableHead>
        <TableBody sx={{background: "#FFFFFF", '&:last-child': { borderBottom: 0 } }}>
          {rows?.map((row, index, key) => (
            
            <TableRow
              key={row.key}
              sx={ index == 0 ? { border: "2px solid #00286B !important" } : "" }
            >
              <TCell component="th" scope="row" padding={padding}>
                <Typography variant="saleTableBody"> {row.first } </Typography>
              </TCell>
              <TCell padding= {padding}> <Typography variant="saleTableBody"> {row.second} </Typography> </TCell>
              <TCell padding={padding}> <Typography variant="saleTableBody"> {row.third} </Typography> </TCell>
              {row.fourth && 
              <TCell padding= {padding}> <Typography variant="saleTableBody"> {row.fourth} </Typography> </TCell>
              }
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}