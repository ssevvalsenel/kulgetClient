import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Divider, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

import Sidebar from "../../../components/Layout/Sidebar";
import Topbar from "../../../components/Layout/Topbar";

import { ASidebarListItems } from "./ASidebarListItems";

const ALayout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = useState(false);
  const [adrawer, setADrawer] = useState({});
  const isMobile = window.innerWidth <= 1024;

  useEffect(() => {
    open
      ? setADrawer({
          width: "160px",
          transition: "0.27s",
        })
      : setADrawer({
          width: "65px",
          transition: "0.27s",
          overflowX: "hidden",
        });
  }, [open]);

  return (
    <>
      {/* <Box sx={{ backgroundImage: { lightmode } }}> */}
      <Topbar
        adrawer={adrawer}
        open={open}
        setOpen={setOpen}
        title={"KÜLGET | Süper Admin Paneli"}
      />
      {/* <Divider
        sx={{
          marginLeft: "1vh",
          marginTop: "1.8vh",
          //backgroundColor: colors.orangeAccent[400],
          boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.2)",
        }}
      /> */}
      <Sidebar
        adrawer={adrawer}
        open={open}
        setOpen={setOpen}
        sidebarListItems={ASidebarListItems}
      >
        <Box
          //  m="1.8vh"
          sx={{
            marginTop: "1vh",
            marginLeft: "1.8vh",
          }}
        >
          <Outlet />
        </Box>
      </Sidebar>
      {/* </Box> */}
    </>
  );
};

export default ALayout;
