import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";

const SidebarStyles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return {
    toolbar: {
      display: "flex",
      alingItems: "center",
      justifyContent: "flex-end",
      px: [1],
    },
    menuIcon: {
      margin: "5px",
      color: colors.primary[100],
    },
    listItem: {
      alingItems: "center",
      justifyContent: "flex-end",
      px: [1],
    },
    chidrenBox: {
      flexGrow: 1,
      padding: 3,
    },
  };
};

export default SidebarStyles;