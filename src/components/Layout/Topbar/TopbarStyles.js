import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";

const TopbarStyles = () => {
  // tema rengi kullanmak için
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return {
    containerBox: {
      display: "flex",
      justifyContent: "space-between",
      padding: "2px",
    },
    appbar: {
      background: "transparent",
      // boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
      boxShadow: "none"
    },
    logoTypography: {
      padding: "2vh",
      color: colors.orangeAccent[500],
      fontWeight: "600"
    },
    iconsContainerBox: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };
};

export default TopbarStyles;