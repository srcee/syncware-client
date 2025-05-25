import {
  createTheme,
  responsiveFontSizes,
  type PaletteMode,
  type Theme,
} from "@mui/material/styles";
import { colors } from "./colors";

const createCustomTheme = (mode: PaletteMode): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors["primary-button"][mode],
      },
      background: {
        default: colors["background"][mode],
        paper: mode === "light" ? "#ffffff" : "#424242",
      },
      text: {
        primary: colors["text-primary"][mode],
        secondary: colors["text-secondary"][mode],
      },
    },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      h1: { fontSize: "3rem", fontWeight: 500 },
      h2: { fontSize: "2.25rem", fontWeight: 500 },
      h3: { fontSize: "1.75rem", fontWeight: 500 },
      h4: { fontSize: "1.5rem", fontWeight: 500 },
      h5: { fontSize: "1.25rem", fontWeight: 500 },
      h6: { fontSize: "1rem", fontWeight: 500 },
      button: { textTransform: "none", fontWeight: 500 },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          fullWidth: true,
          margin: "normal",
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 12,
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg",
        },
      },
    },
  });
};

const lightTheme = createCustomTheme("light");
const darkTheme = createCustomTheme("dark");

const responsiveLightTheme = responsiveFontSizes(lightTheme);
const responsiveDarkTheme = responsiveFontSizes(darkTheme);

export { responsiveLightTheme, responsiveDarkTheme };
