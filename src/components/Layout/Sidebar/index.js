import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";
import { ChevronLeft, Menu } from "@mui/icons-material";
import { tokens } from "../../../theme";
import SidebarStyles from "./SidebarStyles";
//import { ASidebarListItems } from "./ASidebarListItems";

function SidebarListItemCom({ item }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const selected = location.pathname.split("/")[2];

  return (
    <ListItemButton
      // selected={selected === item.link ? true : false}
      key={item.key}
      component={NavLink}
      to={item.link}
      sx={{
        color: colors.primary[100],
        "&:hover": {
          backgroundColor: "transparent", // İmleç üzerine gelindiğinde arka plan rengini değiştirmemek için
        },
      }}
    >
      <ListItemIcon
        sx={{
          color:
            selected === item.link
              ? colors.primary[100]
              : colors.primary[300],
        }}
      >
        {item.icon}
      </ListItemIcon>
      <ListItemText
        primary={item.text}
        sx={{
          color:
            selected === item.link
              ? colors.primary[100]
              : colors.primary[300],
          // fontWeight: selected === item.link ? "bold" : "medium",
          fontWeight: "bold",
        }}
      />
    </ListItemButton>
  );
}

export default function Sidebar({
  children,
  open,
  setOpen,
  adrawer,
  sidebarListItems,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const styles = SidebarStyles();
  const drawerOpenHandle = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Drawer
          PaperProps={{
            sx: {
              background: colors.sidebarAccent[500],
              paddingRight: "0.5%",
              //paddingTop:"1vh",
              borderRadius: "0 3% 5% 0",
              // ml: "0.5vh",
              // mt: "0.5vh",
              //mb: "0.5vh",
              width: "auto",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
              borderColor: colors.sidebarAccent[500],
              // color: colors.background[400],
            },
          }}
          variant="permanent"
          open={open}
          style={adrawer}
        >
          <Toolbar sx={styles.toolbar}>
            <IconButton
              edge="start"
              sx={styles.menuIcon}
              onClick={drawerOpenHandle}
            >
              {!open ? <Menu /> : <ChevronLeft />}
            </IconButton>
          </Toolbar>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Divider sx={{ width: "70%" }} />
          </Box>
          <List style={adrawer} sx={styles.listItem}>
            {sidebarListItems.map((item) =>
              item.type === "listItem" ? (
                <SidebarListItemCom key={item.key} item={item} />
              ) : (
                <Divider key={Math.random()} />
              )
            )}
          </List>
        </Drawer>
      </Box>
      <Box sx={styles.chidrenBox}>{children}</Box>
    </Box>
  );
}