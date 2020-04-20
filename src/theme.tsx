import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fafafa",
      light: "#ffffff",
      dark: "#c7c7c7",
    },
    secondary: {
      main: "#ee24c4",
      light: "#ff67f7",
      dark: "#b70093",
    },
  },
  typography: {
    fontFamily: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"].join(
      ","
    ),
  },
});

export default theme;
