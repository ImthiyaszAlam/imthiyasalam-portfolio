export type TextStyle = {
  fontSize: number;
  fontWeight: "normal" | "bold" | number;
  lineHeight: number;
};

export type Typography = {
  display: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  body: TextStyle;
  caption: TextStyle;
};

export const typography: Typography = {
  display: { fontSize: 40, fontWeight: "bold", lineHeight: 48 },
  h1: { fontSize: 32, fontWeight: "bold", lineHeight: 40 },
  h2: { fontSize: 24, fontWeight: "bold", lineHeight: 32 },
  h3: { fontSize: 20, fontWeight: "bold", lineHeight: 28 },
  body: { fontSize: 16, fontWeight: "normal", lineHeight: 24 },
  caption: { fontSize: 12, fontWeight: "normal", lineHeight: 16 },
};
