import { Theme, ThemeOptions } from "@mui/material/styles";
interface FontSizeType {
  extraLarge: string;
  large: string;
  medium: string;
  small: string;
  extraSmall: string;
  extraSmall2: string;
}

interface FontWeightType {
  thin: string;
  extraLight: string;
  light: string;
  normal: string;
  medium: string;
  semiBold: string;
  bold: string;
  extraBold: string;
  black: string;
}

interface FontColorType {
  primary: string;
  secondary: string;
  white: string;
  red: string;
}

interface FontType {
  size: FontSizeType;
  weight: FontWeightType;
  color: FontColorType;
}

interface CustomTheme extends Theme {
  font: FontType;
  alpha: Array<string>;
  color: {
    primary: string;
    secondary: string;
    dim: string;
  }
}

//Override mui theme type
declare module '@mui/material/styles' {
  interface CustomThemeOptions extends ThemeOptions {
    font?: FontType,
    alpha?: Array<string>;
    color?: {
      primary: string;
      secondary: string;
      dim: string;
    }
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
  
  declare module '@emotion/react' {
    export interface Theme {
      font: FontType,
      alpha: Array<string>;
      color: {
        primary: string;
        secondary: string;
        dim: string;
      }
    }
  }