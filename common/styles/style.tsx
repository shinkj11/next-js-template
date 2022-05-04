import { Global, css, SerializedStyles } from '@emotion/react';
import { theme } from './theme';

const globalCSS = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-Thin.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-ThinItalic.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-Light.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-LightItalic.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-Regular.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-Medium.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-MediumItalic.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-Bold.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-BoldItalic.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-Black.ttf`}) format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    src: url(${`${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/Roboto-BlackItalic.ttf`}) format("truetype");
  }
  
  
  body {
    margin: 0;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", 
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const globalStyles = (
  <Global
    styles={globalCSS}
  />
);


//Global Text Styles
const h1CSS = css`
  font-size: ${theme.font.size.extraLarge};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.font.color.primary};
`;

const h2CSS = css`
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.font.color.primary};
`;

const sub1CSS = css`
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.font.color.primary};
`;

const sub2CSS = css`
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.font.color.primary};
`;

const sub3CSS = css`
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.font.color.secondary};
`;

const body1CSS = css`
  font-size: ${theme.font.size.extraSmall};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.font.color.primary};
`;

const body2CSS = css`
  font-size: ${theme.font.size.extraSmall};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.font.color.primary};
`;

const body3CSS = css`
  font-size: ${theme.font.size.extraSmall};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.font.color.secondary};
`;

const button1CSS = css`
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.font.color.primary};
`;

const button2CSS = css`
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.font.color.white};
`;

const button3CSS = css`
font-size: ${theme.font.size.extraSmall2};
font-weight: ${theme.font.weight.bold};
color: ${theme.font.color.primary};
`;

const input1CSS = css`
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.normal};
  color: ${theme.font.color.primary};
`

const textStyles = {
  h1: h1CSS,
  h2: h2CSS,
  sub1: sub1CSS,
  sub2: sub2CSS,
  sub3: sub3CSS,
  body1: body1CSS,
  body2: body2CSS,
  body3: body3CSS,
  button1: button1CSS,
  button2: button2CSS,
  button3: button3CSS,
  input1: input1CSS,
};

export type TextType = keyof typeof textStyles;

//Custom hook to use global text style
export const useTextStyle = (type: TextType): SerializedStyles => {
  return textStyles[type];
};


//Global style depending on css state
const state1CSS = css`
  :hover:enabled, :active:enabled {
    color: ${theme.font.color.red};
  }
`;

const state2CSS = css`
  :hover, :active {
    color: ${theme.font.color.red};
  }
`;

const state3CSS = css`
  :hover, :active {
    filter: opacity(0.4) drop-shadow(0 0 0 red); 
  }
`;


const stateStyles = {
  hoverActiveLGRed: state2CSS,
  hoverActiveLGRedEnabled: state1CSS,
  hoverActiveLGRedImage: state3CSS,
};

export type StateStyleType = keyof typeof stateStyles;

//Custom hook to use global css style
export const useStateStyle = (state: StateStyleType): SerializedStyles => {
  return stateStyles[state];
}

//Global disabled style
const disabledCSS = css`
  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

//Custom hook to use global disabled style 
export const useDisabledStyle = (): SerializedStyles => {
  return disabledCSS;
}

const scrollbarCSS = css`
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    opacity: 0.15;
    background: #CCCCCC;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
`;

export const useScrollbarStyle = (): SerializedStyles => {
  return scrollbarCSS;
}
