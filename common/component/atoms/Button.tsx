import React, { ComponentProps } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { useDisabledStyle, useStateStyle, useTextStyle } from '../../styles/style';

export type ButtonVariantType = 'primary' | 'normal' | 'normal2';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps extends ComponentProps<'button'>{
  children: string;
  variant?: ButtonVariantType;
  onClick?: () => void;
  type?: ButtonType;
  margin?: string;
  width?: string;
}

const getVariantStyle = (variant: ButtonVariantType): SerializedStyles => {
  switch(variant) {
    case 'primary': return primaryCSS;
    case 'normal': return normalCSS;
    case 'normal2': return normal2CSS;
  }
};

const primaryCSS = css`
  border: none;
  background: radial-gradient(69.55% 69.55% at 84.62% 9.62%, #69317B 0%, rgba(97, 39, 158, 0) 100%), linear-gradient(0deg, #A50034, #A50034);
  ${useTextStyle('button2')}
`;

const normalCSS = css`
  background: #FFFFFF;
  border: 1px solid #D5D5EF;
  ${useTextStyle('button1')}
  ${useStateStyle('hoverActiveLGRedEnabled')}
`;

const normal2CSS = css`
  background: #FFFFFF;
  border: 1px solid #D5D5EF;
  ${useTextStyle('button3')}
  ${useStateStyle('hoverActiveLGRedEnabled')}
`;

const StyledButton = styled.button<{variant: ButtonVariantType, margin?:string, width?:string}>`
  font-family: 'LG Smart Global';
  width: ${({width = '136px'}) => width};
  height: 56px;
  border-radius: 200px;
  cursor: pointer;
  ${({variant}) => getVariantStyle(variant)}
  margin: ${({margin}) => margin ? margin : '0'};
  ${useDisabledStyle()}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  margin,
  onClick,
  type = 'button',
  disabled = false,
  width,
  ...props
}) => {
  
  return (
    <StyledButton 
      variant={variant} 
      onClick={onClick} 
      margin={margin} 
      width={width} 
      disabled={disabled}
      style={disabled ? { pointerEvents: 'none'} : {}}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
