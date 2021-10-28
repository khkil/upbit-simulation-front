import React from "react";
import Routes from "./routes/Router";
import { ThemeProvider, unstable_createMuiStrictModeTheme } from "@material-ui/core/styles";
const theme = unstable_createMuiStrictModeTheme();

function App() {
  return (

    <ThemeProvider theme = {theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
