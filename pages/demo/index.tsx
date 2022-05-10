import Button from '@/common/component/atoms/Button';
import { TextType, useTextStyle } from '@/common/styles/style';
import { theme } from '@/common/styles/theme';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactElement, useState } from 'react';
import { FontType } from 'theme';

const StyledSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.primary};
`;

const StyledButtonWrapper = styled.div`
  flex-direction: row;
`;

const StyledText = styled.div<{textType?: TextType}>`
  ${({textType = 'h1'}) => useTextStyle(textType)}
  color: ${(props) => props.theme.color.secondary};
`;

const lightTheme = {
  color: {
    primary: '#ffffff',
    secondary: '#1E1E1E',
    dim: '#000000',
  }
};

const darkTheme = {
  color: {
    primary: '#1E1E1E',
    secondary: '#ffffff',
    dim: '#000000',
  }
};

const DemoPage = (): ReactElement => {
  const [ theme, setTheme ] = useState<boolean>(true);
  const [ textStyle, setTextStyle ] = useState<TextType>('h1');
  
  const onThemeChange = () => {
    setTheme(original => !original);
  };
  
  const onTextChange = () => {
    setTextStyle(original => original === 'h1' ? 'h2' : 'h1');
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <StyledSection>
        <StyledText textType={textStyle}>
          Test
        </StyledText>
        <StyledButtonWrapper>
          <Button onClick={onThemeChange} variant={'primary'} margin={'10px'}>
            Change Theme
          </Button>
          <Button onClick={onTextChange} variant={'primary'} margin={'10px'}>
            Change Style
          </Button>
        </StyledButtonWrapper>
      </StyledSection>
    </ThemeProvider>
  );
};

export default DemoPage;
