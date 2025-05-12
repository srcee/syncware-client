import { useMemo } from "react";
import { createTheme, type Theme } from "@mui/material/styles";
import { useThemeContext } from "../../../contexts/ThemeContext";
import {
  responsiveDarkTheme,
  responsiveLightTheme,
} from "../../../styles/baseTheme";

// Function to extend base theme for login-specific styles
const createLoginTheme = (baseTheme: Theme, mode: "light" | "dark") => {
  return createTheme(baseTheme, {
    palette: {
      primary: {
        main: baseTheme.palette.primary.main,
      },
      background: {
        default: baseTheme.palette.background.default,
        paper: mode === "light" ? "#ffffff" : "#424242",
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
    },
  });
};

// The hook to get the login theme based on the current mode (light/dark)
export const useLoginTheme = () => {
  const { mode } = useThemeContext();

  // Use memoization to avoid re-creating the theme on each render
  return useMemo(() => {
    const baseTheme =
      mode === "light" ? responsiveLightTheme : responsiveDarkTheme;
    return createLoginTheme(baseTheme, mode);
  }, [mode]);
};
