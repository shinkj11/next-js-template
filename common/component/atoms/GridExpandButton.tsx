import React from 'react';
import styled from '@emotion/styled';
import Label from './Label';
import ArrowImage from '../../../public/img/ic-arrow-left-grey.svg';
import Image from 'next/image';
import { useDisabledStyle } from '../../styles/style';

export interface GridExpandButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
  disabled?: boolean;
}

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  width: 100%;
`;

const StyledButtonWrapper = styled.div<{disabled?: boolean}>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  ${({disabled = false}) => disabled ? useDisabledStyle() : ''}
`;

const GridExpandButton:React.FC<GridExpandButtonProps> = ({
  onClick,
  disabled = true,
  ...rest
}: GridExpandButtonProps) => {
  return (
    <StyledSection>
      <StyledButtonWrapper onClick={!disabled ? onClick : () => {}} disabled={disabled}>
        <Label 
          type={'button1'} 
          margin={'0 11px 0 0'} 
          stateStyle={!disabled ? 'hoverActiveLGRed' : undefined}>
            See All
        </Label>
        <Image src={ArrowImage} />
      </StyledButtonWrapper>
    </StyledSection>
  );
};

export default GridExpandButton;