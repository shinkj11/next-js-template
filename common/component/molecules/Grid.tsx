import React, { ReactElement } from "react";
import { DataGrid, GridCellParams, GridColDef, GridRowParams, GridRowsProp, GridSlotsComponent, GridSlotsComponentsProps, MuiEvent } from '@mui/x-data-grid';
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import GridExpandButton from "../atoms/GridExpandButton";
import GridPagination from "../atoms/GridPagination";
import { TextType, useTextStyle } from "../../styles/style";

export type GridFooterType = 'seeAll' | 'pagination' | 'none';
export interface GridProps {
  data: GridRowsProp;
  columns: GridColProps[];
  footer: GridFooterType;
  onRowClick?: (params: GridRowParams) => void;
  onRowRemove?: (idx: number) => void;
  onSeeAllClick?: () => void;
  height?: string;
  rowHeight?: number;
  pageSize?: number;
}

export interface GridColProps extends GridColDef {
  textType?: TextType,
  overflow?: 'ellipsis' | 'wrap',
}

const getCellStyle = ({ textType, field, overflow }: GridColProps): SerializedStyles => {
  const textCSS = useTextStyle(textType ? textType : 'body2');

  return css`
  .${'Oneview-gridCell-' + field} {
    padding: 0 10px 0 0;
    overflow: hidden;
    ${textCSS}
    ${overflow === 'ellipsis' ? 'white-space: nowrap; text-overflow: ellipsis;' : 'white-space: wrap;'}
  }`;
};

const StyledDataGridWrapper = styled.div<{ columns: GridColProps[], height?: string }>`
  width: 100%;
  height: ${({ height = '100%' }) => height};
  .MuiDataGrid-root {
    border: none;
  }
  .MuiDataGrid-cell {
    padding: 0;
  }
  .MuiDataGrid-columnHeaders {
    border: none;
    .MuiDataGrid-columnHeader {
      padding: 0;
      .MuiDataGrid-columnHeaderTitleContainer {
        padding: 0;
      }
      .MuiDataGrid-columnHeaderTitle {
        ${useTextStyle('body3')}
      }
      .MuiDataGrid-iconSeparator {
        display: none;
      }
    }
  }
  .MuiDataGrid-row {
    ${({ columns }) => columns.map(item => getCellStyle(item))}
    cursor: pointer;
    .MuiDataGrid-cell {
      :active, :focus{
        outline: none;
      }
    }
  }
  .MuiDataGrid-footerContainer {
    justify-content: center;
    .MuiTablePagination-displayedRows {
      ${useTextStyle('body2')}
    }
  }
  .MuiTablePagination-actions {
    button {
      position: absolute;
      top: 20px;
    }
    button:nth-child(1) {
      left: 0;
    }
    button:nth-child(2) {
      right: 0;
    }
  }
`;

const modifyColumn = (original: GridColDef[]): GridColDef[] => {
  let modified: GridColDef[] = [];
  modified = original.map((item) =>
    ({ ...item, sortable: false, headerAlign: 'left', cellClassName: `Oneview-gridCell-${item.field}` })
  );
  return modified;
};


export const Grid = ({
  data,
  columns,
  onRowClick,
  onRowRemove,
  onSeeAllClick,
  height,
  rowHeight = 52,
  pageSize = 10,
  footer
}: GridProps): ReactElement => {
  const gridColumns = modifyColumn(columns);
  const getSeeAllDisabled = () => data.length < 1;

  const getFooterComponents = (footer: GridFooterType): Partial<GridSlotsComponent> => {
    switch (footer) {
      case 'pagination': return { Pagination: GridPagination };
      case 'seeAll': return { Pagination: GridExpandButton };
      case 'none': return {};
    }
  };

  const getFooterComponentsProps = (footer: GridFooterType): Partial<GridSlotsComponentsProps> => {
    switch (footer) {
      case 'pagination': return {};
      case 'seeAll': return { pagination: { onClick: onSeeAllClick, disabled: getSeeAllDisabled() } };
      case 'none': return {};
    }
  }

  const components = getFooterComponents(footer);
  const componentProps = getFooterComponentsProps(footer);

  return (
    <StyledDataGridWrapper columns={columns} height={height}>
      <DataGrid
        rows={data}
        columns={gridColumns}
        headerHeight={14}
        rowHeight={rowHeight}
        disableColumnFilter={true}
        disableColumnMenu={true}
        disableColumnSelector={true}
        disableDensitySelector={true}
        disableSelectionOnClick={true}
        disableVirtualization={true}
        onCellClick={(params: GridCellParams, event: MuiEvent<React.MouseEvent>) => {
          event.defaultMuiPrevented = true;
        }}
        onRowClick={onRowClick}
        pageSize={pageSize}
        components={components}
        componentsProps={componentProps}
        hideFooter={footer === 'none'}
        sx={{
          '& .MuiDataGrid-cell': {
            display: 'block',
            lineHeight: `${rowHeight}px`,
          },
        }}
      />
    </StyledDataGridWrapper>
  );
};