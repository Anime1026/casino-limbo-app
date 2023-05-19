import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useContext } from "react";
import FundContext from "../context/FundContext";

export default function ButtonAppBar() {
  const { fund } = useContext(FundContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ flexGrow: "1" }}></Box>
            <Box className="userInfo">
              <Typography>User Id:7665894</Typography>
              <Typography>Fun: {fund}</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
