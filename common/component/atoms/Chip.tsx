import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useTextStyle } from '../../styles/style';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  margin?: string;
  maxWidth?: string;
}

const StyledChip = styled.div<{margin?: string, maxWidth?: string}>`
  width: fit-content;
  max-width: ${({maxWidth = '100%'}) => maxWidth};
  background: #F3F3FA;
  border-radius: 4px;
  margin: ${({margin = '0'}) => margin};
  ${useTextStyle('body2')}
  line-height: 24px;
  padding: 0px 8px;
`;

export const Chip:React.FC<ChipProps> = ({
  children,
  ...rest
}: ChipProps) => {
  return (
    <StyledChip {...rest}>
      {children}
    </StyledChip>
  );
}