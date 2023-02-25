import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   "&:nth-of-type(odd)": {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    background: "rgba(0, 0, 0, 0.28)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10.7px)",
    WebkitBackdropFilter: "blur(10.7px)",
    border: "1px solid rgba(99, 93, 93, 1)",
  },

  background: "#000000",
}));

function createData(song: string, likes: number, date: string) {
  return { song, likes, date };
}

const styles = {
  color: "white",
};

const rows = [
  createData("Frozen yoghurt", 159, "2023"),
  createData("Ice cream sandwich", 237, "2022"),
  createData("Eclair", 262, "2021"),
  createData("Cupcake", 305, "2020"),
  createData("Gingerbread", 356, "2021"),
  createData("Frozen yoghurt", 159, "2023"),
  createData("Ice cream sandwich", 237, "2022"),
  createData("Eclair", 262, "2021"),
  createData("Cupcake", 305, "2020"),
  createData("Gingerbread", 356, "2021"),
  createData("Frozen yoghurt", 159, "2023"),
  createData("Ice cream sandwich", 237, "2022"),
  createData("Eclair", 262, "2021"),
];

export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      style={{
        margin: "10px 0px",
        padding: "10px 20px",
        background: "#000000",
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <colgroup>
          <col style={{ width: "40%" }} />
          <col style={{ width: "5%" }} />
          <col style={{ width: "5%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        {/* <TableHead>
          <TableRow>
            <StyledTableCell>Song</StyledTableCell>
            <StyledTableCell align="right">Likes</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.song}>
              <StyledTableCell component="th" scope="row">
                {row.song}
              </StyledTableCell>
              <StyledTableCell>
                <IconButton
                  aria-label="wishList"
                  style={styles}
                  color="inherit"
                >
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>
                <IconButton aria-label="like" style={styles} color="inherit">
                  <ThumbUpOutlinedIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">{row.likes}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
