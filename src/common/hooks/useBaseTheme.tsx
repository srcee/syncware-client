import { useThemeContext } from "../../contexts/ThemeContext";
import {
  responsiveLightTheme,
  responsiveDarkTheme,
} from "../../styles/baseTheme";

export const useBaseTheme = () => {
  const { mode } = useThemeContext();

  return mode === "dark" ? responsiveDarkTheme : responsiveLightTheme;
};
