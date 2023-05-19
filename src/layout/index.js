import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../components/header";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const MainLayout = ({ children }) => {
  useEffect(() => {
    if (!localStorage.getItem("limbo-userId")) {
      localStorage.setItem("limbo-userId", uuidv4());
    }
  }, []);
  return (
    <>
      <Header />
      <Container maxWidth="lg">{!children && <Outlet />}</Container>
    </>
  );
};

export default MainLayout;
