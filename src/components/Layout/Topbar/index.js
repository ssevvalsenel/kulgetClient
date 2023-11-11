import React, { useContext } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  PersonOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { ColorModeContext } from "../../../theme";
import TopbarStyles from "./TopbarStyles";

export default function Topbar({ open, adrawer, title }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const styles = TopbarStyles();

  return (
    <Box sx={styles.containerBox}>
      <CssBaseline />
      <AppBar position="absolute" open={open} sx={styles.appbar}>
        <Toolbar
          sx={{
            pr: "24px",
            marginLeft: adrawer.width,
            transition: adrawer.transition,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h2" noWrap sx={styles.logoTypography}>
              {/* KÜLTÜREL GELİŞİM TOPLULUĞU | Admin Paneli */}
              {title}
            </Typography>
          </Box>
          <Box sx={styles.iconsContainerBox}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </IconButton>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <IconButton>
              <PersonOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, p: 3 }} />
    </Box>
  );
}
