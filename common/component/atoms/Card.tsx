import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: boolean;
  margin?: string;
  padding?: string;
  width?: string;
}

const StyledListCard = styled.div<CardProps>`
  box-sizing: border-box;
  width: ${({width = '100%'}) => width};
  margin: ${({margin = '0'}) => margin};
  padding: ${({padding = '0'}) => padding};
  ${({shadow = true}) => shadow && VisibleCardStyle};
`;

const VisibleCardStyle = css`
  background: #FFFFFF;
  box-shadow: 0px 0px 30px rgba(20, 9, 80, 0.1);
  border-radius: 16px;
`;

export const Card:React.FC<CardProps> = ({
  shadow = true,
  children,
  ...rest
}: CardProps) => {
  return (
    <StyledListCard shadow {...rest}>
      {children}
    </StyledListCard>
  );
}