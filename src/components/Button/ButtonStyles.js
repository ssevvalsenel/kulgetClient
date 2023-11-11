import { useTheme } from "@emotion/react";
// import { tokens } from "../../theme";

const ButtonStyles = () => {
  // tema rengi kullanmak için
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

  return {
    container: {
      paddingTop: "1vh",
      paddingBottom: "1vh",
      margin: "1vh"
    },
    button: {
    //   width: "55vh",
    //   backgroundColor: colors.indigo[500],
    //   "&:hover": {
    //     backgroundColor: colors.indigo[700],
    //   },
    //   color: colors.primary[400],
    //   fontWeight: "bold",
    //   fontSize: "1.6vh",
    },
  };
};

export default ButtonStyles;