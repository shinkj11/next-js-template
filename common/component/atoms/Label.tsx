import React from 'react';
import styled from '@emotion/styled';
import { StateStyleType, TextType, useStateStyle, useTextStyle } from '../../styles/style';

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  type: TextType;
  stateStyle?: StateStyleType;
  width?: number;
  lineHeight?: string;
  color?: string;
  margin?: string;
  overflowWrap?: string;
}

const StyledLabel = styled.div<LabelProps>`
  ${({type}) => useTextStyle(type)}
  ${({stateStyle}) => stateStyle ? useStateStyle(stateStyle) : ''}
  line-height: ${({lineHeight = '100%'}) => lineHeight};
  margin: ${({margin}) => margin ? margin : '0'};
  ${({color}) => color ? 'color: ' + color : ''};
  ${({width}) => width ? 'color: ' + width : ''};
  ${({overflowWrap}) => overflowWrap ? 'overflow-wrap: ' + overflowWrap : ''};
`;

const Label:React.FC<LabelProps> = ({
  children,
  ...rest
}: LabelProps) => {
  return (
    <StyledLabel {...rest}>{children}</StyledLabel>
  );
}

export default Label;