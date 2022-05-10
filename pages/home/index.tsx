import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Label from '@/common/component/atoms/Label';
import Button from '@/common/component/atoms/Button';
import exampleService from '@/common/services/rest-api/example.service';
import { NextSeo } from 'next-seo';

const StyledSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomePage = (): ReactElement => {

  const onClick = async () => {
    const res = await exampleService.getExample({name: 'example',});
    alert(res.age);
  };

  return (
    <>
      <NextSeo 
        title={'HomePage'} 
        description={'This is next js homepage'} 
        openGraph={{
          title: 'Open Graph Example',
          description: 'Open Graph Example Description',
          site_name: 'Open Graph Example Site'
        }}
      />
      <StyledSection>
        <Label type={'h1'}>
          Next js Example Home
        </Label>
        <Button onClick={onClick} variant={'primary'}>
          Shoot Api
        </Button>
      </StyledSection>
    </>
  );
};

export default HomePage;
