import { useContext } from "react";
import { Box, useTheme, IconButton } from "@mui/material";
import { ColorModeContext } from "../../../theme";
import { tokens } from '../../../theme';
import {
    DarkModeOutlined,
    LightModeOutlined,
  } from "@mui/icons-material";

const Index = () => {
      //tema icin
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      ahomepage
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
    </div>
  )
}

export default Index