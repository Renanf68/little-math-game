export interface CustomTheme {
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
  };
  colors: {
    yellow: string;
    lightYellow: string;
    lighterYellow: string;
    red: string;
    lightRed: string;
    lighterRed: string;
    green: string;
    lightGreen: string;
    lighterGreen: string;
    blue: string;
    lightBlue: string;
    lighterBlue: string;
    purple: string;
    lightPurple: string;
    lighterPurple: string;
    gray: string;
  };
  borderRadius: string;
}

export const theme: CustomTheme = {
  fontSize: {
    xs: "0.875rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.875rem",
    "2xl": "2.25rem",
    "3xl": "3rem",
  },
  colors: {
    yellow: "#FFB822",
    lightYellow: "#FFD886",
    lighterYellow: "#FFF6E3",
    red: "#FC6B5E",
    lightRed: "#FFA69E",
    lighterRed: "#FFEBEA",
    green: "#89DA57",
    lightGreen: "#A1D681",
    lighterGreen: "#ECFAE4",
    blue: "#5CADFF",
    lightBlue: "#98CBFF",
    lighterBlue: "#ECF5FF",
    purple: "#BD88FF",
    lightPurple: "#DABDFF",
    lighterPurple: "#F5EDFF",
    gray: "#D5DFE5",
  },
  borderRadius: "6px",
};
