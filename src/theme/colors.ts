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
  background: "#FFFFFF",
  surface: "#F7F7F7",
  primary: "#2563eb",
  accent: "#f59e42",
  text: "#18181b",
  textSecondary: "#6B7280", // gray-500
  border: "#E5E7EB",
};

export const darkColors: ColorPalette = {
  background: "#18181b",
  surface: "#23232a",
  primary: "#60a5fa",
  accent: "#fbbf24",
  text: "#F7F7F7",
  textSecondary: "#9CA3AF", // gray-400
  border: "#27272a",
};
