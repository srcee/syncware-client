import { useMemo } from "react";
import { createTheme, type Theme } from "@mui/material/styles";
import { useBaseTheme } from "../../../common/hooks/useBaseTheme";

// Function to extend base theme for login-specific styles
const createLoginTheme = (baseTheme: Theme) => {
  return createTheme(baseTheme, {
    palette: {
      primary: {
        main: baseTheme.palette.primary.main,
      },
      background: {
        default: baseTheme.palette.background.default,
        paper: baseTheme.palette.mode === "light" ? "#ffffff" : "#424242",
      },
      text: {
        primary: baseTheme.palette.text.primary,
        secondary: baseTheme.palette.text.secondary,
      },
    },
    typography: {
      ...baseTheme.typography,
      h1: {
        fontSize: "2rem",
        fontWeight: 600,
        color: baseTheme.palette.text.primary,
      },
      body1: {
        fontSize: "1rem",
        color: baseTheme.palette.text.secondary,
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "10px 20px",
            color: baseTheme.palette.text.primary,
            backgroundColor: baseTheme.palette.primary.main,
            "&:hover": {
              backgroundColor: baseTheme.palette.primary.main,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            marginBottom: "16px",
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            padding: 32,
            maxWidth: 400,
            margin: "auto",
            width: "100%",
            [`@media (min-width:600px)`]: {
              width: "33%",
            },
          },
        },
      },
    },
  });
};

export const useLoginTheme = () => {
  const baseTheme = useBaseTheme();

  const loginTheme = useMemo(() => createLoginTheme(baseTheme), [baseTheme]);

  return loginTheme;
};
