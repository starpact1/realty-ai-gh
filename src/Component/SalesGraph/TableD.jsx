import { styled } from '@mui/material'
import React from 'react'

const TableMain = styled("table")(({ theme }) => ({

  width: "100%",
  // border: "1px solid #D1CFD7",
  borderCollapse: "collapse"

}))

const TableHead = styled("thead")(({ theme }) => ({
  background: "#F7F7FA",
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "13px",
  lineHeight: "18px",
  width: "100%",
  /* identical to box height, or 138% */

  display: "flex",
  alignItems: "center",
  textAlign: "center",
  letterSpacing: -0.08,

  color: "#707070",
  borderCollapse: "collapse"
}))

const Th = styled("th")(({ theme }) => ({
  border: "1px solid #D1CFD7",
  paddingTop: "14px",
  paddingLeft: "13px",
  paddingRight: "13px",
  paddingBottom: "14px",
  width: "33.33%"
}))


const Tr = styled("tr")(({ theme }) => ({
  border: "1px solid #D1CFD7",
  // paddingTop: "14px",
  // paddingLeft: "13px",
  // paddingRight: "13px",
  // paddingBottom: "14px",
  width: "100%"
}))

const Td = styled("td")(({ theme }) => ({
  border: "1px solid #D1CFD7",
  // paddingTop: "14px",
  // paddingLeft: "13px",
  // paddingRight: "13px",
  // paddingBottom: "14px",
  width: "33.33%"
}))

const TBody = styled("tbody")(({ theme }) => ({
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 20,
  textAlign: "center",
  letterSpacing: -0.24,
  fontFeatureSettings: "tnum on, lnum on",

  color: "#1B2641",
}))



function TableD() {
  return (
    <div>
      <TableMain>
        <TableHead>
          <Th> Similar Project </Th>
          <Th> Completion % </Th>
          <Th> Sales/Total </Th>
        </TableHead>
        <TBody>
          <Tr>
            <Td>Anindya</Td>
            <Td>50%</Td>
            <Td>144/280 (50%)</Td>
          </Tr>

          {/* <tr>
            <td>Rajpushpa</td>
            <td>50%</td>
            <td>208/280 (50%)</td>
          </tr>

          <tr>
            <td>Anjan</td>
            <td>50%</td>
            <td>154/280 (50%)</td>
          </tr> */}
          
        </TBody>
      </TableMain>
    </div>
  )
}

export default TableD