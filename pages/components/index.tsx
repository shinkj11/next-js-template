import styled from '@emotion/styled';
import { GridRowsProp } from '@mui/x-data-grid';
import React, { ReactElement } from 'react';
import { Grid, GridColProps } from '../../common/component/molecules/Grid';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Label from '../../common/component/atoms/Label';
import Button from '../../common/component/atoms/Button';
import TextField from '../../common/component/atoms/TextField';
import { Card } from '../../common/component/atoms/Card';

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 27px 0 0 0;
  width: 100%;
  /* background-color: skyblue; */
`;

// data for grid1
const listData2: GridRowsProp = [
  { id: 1, purchaseDate: 'Nov 6, 2021', orderId: '1234567', details: 'Water Filter Lorem...', status: 'Deliverd', deliveryDate: 'Nov 11, 2021' },
  { id: 2, purchaseDate: 'Nov 6, 2021', orderId: '1234567', details: 'Water Filter Lorem...', status: 'In Progress', deliveryDate: 'Nov 11, 2021' },
  { id: 3, purchaseDate: 'Nov 6, 2021', orderId: '1234567', details: 'Water Filter Lorem...', status: 'Canceled', deliveryDate: 'Nov 11, 2021' },
  { id: 4, purchaseDate: 'Nov 6, 2021', orderId: '1234567', details: 'Water Filter Lorem...', status: 'Deliverd', deliveryDate: 'Nov 11, 2021' },
];

// data for grid2
const listData3: GridRowsProp = [
  { id: 1, fullName: 'Susan Torres', email: 'susan.torres@gmail.com', phoneNumber: '555-555-5555', address: '111 Sylvan Ave Englewood Cliffs, NJ 07632' },
  { id: 2, fullName: 'Susan Torres', email: 'susan.torres@gmail.com', phoneNumber: '555-555-5555', address: '111 Sylvan Ave Englewood Cliffs, NJ 07632' },
  { id: 3, fullName: 'Susan Torres', email: 'susan.torres@gmail.com', phoneNumber: '555-555-5555', address: '111 Sylvan Ave Englewood Cliffs, NJ 07632' },
  { id: 4, fullName: 'Susan Torres', email: 'susan.torres@gmail.com', phoneNumber: '555-555-5555', address: '111 Sylvan Ave Englewood Cliffs, NJ 07632' },
  { id: 5, fullName: 'Susan Torres', email: 'susan.torres@gmail.com', phoneNumber: '555-555-5555', address: '111 Sylvan Ave Englewood Cliffs, NJ 07632' },
];

const DemoPage = (): ReactElement => {
  const columns1: GridColProps[] = [
    {
      field: 'purchaseDate',
      headerName: 'Purchase Date',
      width: 264,
      textType: 'body1'
    },
    {
      field: 'orderId',
      headerName: 'Order ID',
      width: 182,
      textType: 'body2'
    },
    {
      field: 'details',
      headerName: 'Details',
      width: 182,
      textType: 'body2',
      overflow: 'ellipsis'
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      textType: 'body1'
    },
    {
      field: 'deliveryDate',
      headerName: 'Delivery Date',
      flex: 1,
      textType: 'body1'
    },
  ];

  const columns2: GridColProps[] = [
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone number',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
  ];

  return (
    <>
      <StyledSection>
        <Label type={'h2'}>1. List</Label>
        <Card shadow={true} margin={'16px 0 0 0'} padding={'16px 24px'}>
          <Grid data={listData2} columns={columns1} height={'300px'} footer={'seeAll'} />
        </Card>
      </StyledSection>
      <StyledSection>
        <Card shadow={true} margin={'16px 0 0 0'} padding={'16px 24px'}>
          <Grid data={listData3} columns={columns2} height={'300px'} pageSize={3} footer={'pagination'} />
        </Card>
      </StyledSection>
      <StyledSection>
        <Label type={'h2'}>2. Button</Label>
        <Button variant={'primary'} disabled={true} margin={'0 0 10px 0'}>SEARCH</Button>
        <Button variant={'normal'}>SAVE</Button>
      </StyledSection>
      <StyledSection>
        <Label type={'h2'}>3. Label</Label>
        <Label type={'h1'} margin={'10px 0'}>Label h1</Label>
        <Label type={'h2'} margin={'10px 0'}>Label h2</Label>
        <Label type={'sub1'} margin={'10px 0'}>Label sub1</Label>
        <Label type={'sub2'} margin={'10px 0'}>Label sub2</Label>
        <Label type={'sub3'} margin={'10px 0'}>Label sub3</Label>
        <Label type={'body1'} margin={'10px 0'}>Label body1</Label>
        <Label type={'body2'} margin={'10px 0'}>Label body2</Label>
        <Label type={'body3'} margin={'10px 0'}>Label body3</Label>
        <Label type={'button1'} margin={'10px 0'}>Label button1</Label>
        <Label type={'button2'} margin={'10px 0'}>Label button2</Label>
      </StyledSection>
      <StyledSection>
        <Label type={'h2'}>5. TextField</Label>
        <TextField placeholder={'testPlaceHolder'} defaultValue={'textDefaultValue'} width={'180px'} />
      </StyledSection>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default DemoPage;
