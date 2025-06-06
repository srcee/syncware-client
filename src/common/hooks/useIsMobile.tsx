import { useTheme, useMediaQuery } from "@mui/material";

export const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile;
};
