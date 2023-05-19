import * as React from "react";
import Content from "../components/content";
import Sidebar from "../components/sidebar";
import BetHistory from "../components/history";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function CSSGrid() {
  const [socket, setSocket] = useState();
  const [myBets, setMyBets] = useState([]);
  const load = async () => {
    let socketConnection = io(process.env.REACT_APP_SERVER_URL);
    setSocket(socketConnection);
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item md={6} sm={12}>
        <Content setMyBets={setMyBets} myBets={myBets} />
      </Grid>
      <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar socket={socket} />
      </Grid>
      <Grid item md={12}>
        <BetHistory socket={socket} myBets={myBets} />
      </Grid>
    </Grid>
  );
}
