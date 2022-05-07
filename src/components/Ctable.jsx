import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Ctable = ({columns, rows, align, height, size}) => {
   

  if (!rows || rows.length === 0) {
      return (
        <div style={{minHeigh: "100%", display: "flex", justifyContent: "center", alignItems: "center", widht: "100%"}}>
            <h1>No documents</h1>
        </div>
      )
  }
  return (
    <div className="ctable-wrapper">
      <TableContainer component={Paper} style={{maxHeight: "56vh"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size={size} stickyHeader>
          <TableHead >
            <TableRow>
              <TableCell align="left">#INDEX</TableCell>
              {columns.map((c, ind) => {
                return (
                    <TableCell key={ind} align="left">{c}</TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                {columns.map((c, ind) => {
                    return (
                        <TableCell key={ind} align="left">{row[c]}</TableCell>
                    )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};


export default Ctable;