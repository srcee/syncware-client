export enum ColorsPalette {
  PrimaryBlue = "#1976d2",
  BrightWhite = "#ffffff",
  DarkBlue = "#1565c0",
  LightGray = "#f4f6f8",
  DarkGray = "#303030",
  Black = "#000000",
  GreyText = "#666666",
  LighterGreyText = "#bbbbbb",
}

export interface Color {
  light: ColorsPalette;
  dark: ColorsPalette;
}

export interface Colors {
  [cssClass: string]: Color;
}

export const colors: Colors = {
  "primary-button": {
    light: ColorsPalette.PrimaryBlue,
    dark: ColorsPalette.DarkBlue,
  },
  background: {
    light: ColorsPalette.LightGray,
    dark: ColorsPalette.DarkGray,
  },
  "text-primary": {
    light: ColorsPalette.Black,
    dark: ColorsPalette.BrightWhite,
  },
  "text-secondary": {
    light: ColorsPalette.GreyText,
    dark: ColorsPalette.LighterGreyText,
  },
  header: {
    light: ColorsPalette.BrightWhite,
    dark: ColorsPalette.DarkGray,
  },
  footer: {
    light: ColorsPalette.LightGray,
    dark: ColorsPalette.DarkGray,
  },
};
