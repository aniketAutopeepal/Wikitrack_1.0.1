import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import CallMissedOutgoingOutlinedIcon from "@mui/icons-material/CallMissedOutgoingOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StatBox = ({ icon, count }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%">
      <Box width={"100%"} mr='5px'>
        <TableContainer component={Paper} style={{ backgroundColor: colors.primary[400] }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="right">
                  {" "}
                  <span>{icon}</span>
                </TableCell>
                <TableCell align="left"> Online Vehicle</TableCell>
                <TableCell align="left">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                  {" "}
                  <span>{icon}</span>
                </TableCell>
                <TableCell align="left"> Offline Vehicle</TableCell>
                <TableCell align="left">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                  {" "}
                  <span>{icon}</span>
                </TableCell>
                <TableCell align="left"> Running Vehicle</TableCell>
                <TableCell align="left">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                  {" "}
                  <span>{icon}</span>
                </TableCell>
                <TableCell align="left"> Stop Vehicle</TableCell>
                <TableCell align="left">0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default StatBox;
