export interface CustomTheme {
  fontSize: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
    xs: string;
  };
  colors: {
    primary: string;
    gray: string;
    lightGray: string;
    lighterGray: string;
    red: string;
    lightRed: string;
    lighterRed: string;
    green: string;
    lightGreen: string;
    blue: string;
    lightBlue: string;
  };
  borderRadius: string;
}

export const theme: CustomTheme = {
  fontSize: {
    xl: '26px',
    lg: '20px',
    md: '16px',
    sm: '14px',
    xs: '10px',
  },
  colors: {
    primary: 'black',
    gray: '#979797',
    lightGray: '#E9E9E9',
    lighterGray: '#FAFAFA',
    red: '#F85240',
    lightRed: '#FFE0DD',
    lighterRed: '#FFF2F0',
    green: '#15C099',
    lightGreen: '#E9FFFB',
    blue: '#4E91FF',
    lightBlue: '#E3EEFF',
  },
  borderRadius: '6px',
};
