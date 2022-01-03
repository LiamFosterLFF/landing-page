import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    typography: Palette["primary"];
  }
  interface PaletteOptions {
    typography: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      light: "#141414",
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    typography: {
      main: "red",
    },
  },
});
