import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Label from './Label';
import leftIcon from '@/public/img/ic-pagination-left.svg';
import rightIcon from '@/public/img/ic-pagination-right.svg';
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { useStateStyle, useTextStyle } from '../../styles/style';

export interface GridPaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
}

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  width: 100%;
`;

const StyledBoldText = styled.span`
  ${useTextStyle('body1')}
`

const StyledImage = styled(Image)`
  cursor: pointer;
  ${useStateStyle('hoverActiveLGRedImage')}
`;

const GridPagination:React.FC<GridPaginationProps> = ({
  onClick,
  ...rest
}: GridPaginationProps) => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const onPageMinusClick = () => {
    if (page > 0)
      apiRef.current.setPage(page - 1)
  }

  const onPagePlusClick = () => {
    if (pageCount > page)
      apiRef.current.setPage(page + 1)
  }
  
  return (
    <StyledSection>
      <StyledImage src={leftIcon} onClick={onPageMinusClick}/>
        <Label type={'body2'}>
          Page <StyledBoldText>{page+1}</StyledBoldText> of <StyledBoldText>{pageCount}</StyledBoldText>
        </Label>
      <StyledImage src={rightIcon} onClick={onPagePlusClick}/>
    </StyledSection>
  );
}

export default GridPagination;