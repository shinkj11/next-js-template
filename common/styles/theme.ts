import { createTheme } from '@mui/material/styles';

//Global theme
export const theme = createTheme({
  typography: {
    fontFamily: `"LG Smart Global"`,
  },
  font: {
    size: {
      extraLarge: '64px',
      large: '32px',
      medium: '18px',
      small: '16px',
      extraSmall: '14px',
      extraSmall2: '12px',
    },
    weight: {
      thin: "100",
      extraLight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      extraBold: "800",
      black: "900",
    },
    color: {
      primary: '#1C1919',
      secondary: '#6C6A90',
      white: '#FFFFFF',
      red: '#A50034',
    }
  },
  alpha: ["00", "1A", "33", "4D", "66", "80", "99", "B3", "CC", "E6", "FF"],
  color: {
    primary: '#1C1919',
    secondary: '#1C1919',
    dim: '#6C6A90',
  }
});