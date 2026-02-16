// Color palette for the app
export type ColorPalette = {
  background: string;
  surface: string;
  primary: string;
  accent: string;
  text: string;
  textSecondary: string;
  border: string;
};

export const lightColors: ColorPalette = {
  background: "rgba(0,0,0,0.85)", // glassy black
  surface: "rgba(0,0,0,0.55)", // glassmorphic black
  primary: "#FF8800", // orange
  accent: "#FF8800", // orange
  text: "#FFFFFF", // white
  textSecondary: "#FF8800", // orange for highlight
  border: "rgba(255,255,255,0.12)",
};

export const darkColors: ColorPalette = {
  background: "rgba(0,0,0,0.85)", // glassy black
  surface: "rgba(0,0,0,0.55)", // glassmorphic black
  primary: "#FF8800", // orange
  accent: "#FF8800", // orange
  text: "#FFFFFF", // white
  textSecondary: "#FF8800", // orange for highlight
  border: "rgba(255,255,255,0.12)",
};
