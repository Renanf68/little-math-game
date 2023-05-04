export interface CustomTheme {
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
  };
  colors: {
    purple: string;
    lightPurple: string;
    lighterPurple: string;
    green: string;
    lightGreen: string;
    lighterGreen: string;
    yellow: string;
    lightYellow: string;
    lighterYellow: string;
    gray: string;
    lightGray: string;
    lighterGray: string;
    pink: string;
    lightPink: string;
    lighterPink: string;
  };
  borderRadius: string;
}

export const theme: CustomTheme = {
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
  },
  colors: {
    purple: "#8A88FF",
    lightPurple: "#EBEBFF",
    lighterPurple: "#F9F9FF",
    green: "#71C83C",
    lightGreen: "#DAFFC5",
    lighterGreen: "#ECFAE4",
    yellow: "#DDB420",
    lightYellow: "#FFEFCD",
    lighterYellow: "#FFF6E3",
    gray: "#4D5157",
    lightGray: "#A9A9A9",
    lighterGray: "#EFEFEF",
    pink: "#FFA4AC",
    lightPink: "#FFE0DD",
    lighterPink: "#FFF6F5",
  },
  borderRadius: "1000px",
};
