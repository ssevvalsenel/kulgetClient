//Tema kullanımı için
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

//Router yapısı için
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

// import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <ParallaxProvider> */}
          <RouterProvider router={router} />
        {/* </ParallaxProvider> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;