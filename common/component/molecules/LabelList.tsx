import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import Label from "../atoms/Label";
import _ from "lodash";
import { TextType } from "../../styles/style";

export interface LabelListProps {
  data: { [key: string]: string };
  headerType?: TextType;
  headerMargin?: string;
  itemType?: TextType;
  itemMargin?: string;
  itemLineHeight?: string;
}

const StyledWrapper = styled.div<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin = '0' }) => margin};
`;

export const LabelList = ({
  data,
  headerType = 'body3',
  headerMargin,
  itemType = 'body1',
  itemMargin,
  itemLineHeight
}: LabelListProps): ReactElement => {

  return (
    <>
      {data && _.map(data, (val, key) => (
        <StyledWrapper key={key || val} margin={itemMargin}>
          {key &&
            <Label type={headerType} margin={headerMargin}>
              {key && key.split('\n').map((line, index) => {
                return (<span key={index}>{line}<br /></span>)
              })}
            </Label>}
          <Label lineHeight={itemLineHeight} overflowWrap={"break-word"} type={itemType}>
            {val && val.split('\n').map((line, index) => {
              return (<span key={index}>{line}<br/></span>)
            })}
          </Label>
        </StyledWrapper>
      ))}
    </>
  );
};