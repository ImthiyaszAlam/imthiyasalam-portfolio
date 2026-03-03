// Color palette for the app

export type ColorPalette = {
  primary: ColorValue | undefined;
  textPrimary: string;
  textSecondary: string;
  background: string;
};

export const darkColors: ColorPalette = {
  textPrimary: "#FFFFFF", // white
  textSecondary: "#FFD600", // yellow
  background: "#181818", // dark background
};
