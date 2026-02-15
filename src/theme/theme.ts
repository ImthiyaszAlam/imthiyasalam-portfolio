// Modern neutral premium palette
export const lightColors = {
  primary: "#3B82F6", // blue-500
  background: "#F5F6FA", // neutral-50
  surface: "#FFFFFF",
  accent: "#A78BFA", // violet-400
  text: "#23272F", // neutral-900
  border: "#E5E7EB", // neutral-200
};

export const darkColors = {
  primary: "#60A5FA", // blue-400
  background: "#18181B", // neutral-900
  surface: "#23272F",
  accent: "#C4B5FD", // violet-300
  text: "#F3F4F6", // neutral-100
  border: "#27272A", // neutral-800
};

// Typography scale
export const typography = {
  fontFamily: "Inter, System",
  fontSize: {
    display: 40,
    h1: 32,
    h2: 24,
    body: 16,
    caption: 12,
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};

// Spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 6,
  },
};

// Border radius
export const radii = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
};
