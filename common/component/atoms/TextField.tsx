import { TextField as MUITextField } from '@mui/material';
import React, { ComponentProps } from 'react';
import styled from '@emotion/styled';
import { useTextStyle } from '../../styles/style';

export type TextFieldVarientType = 'outlined' | 'filled' | 'standard';

export interface TextFieldProps extends ComponentProps<'input'>{
  variant?: TextFieldVarientType;
  margin?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  error?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledTextField = styled(MUITextField)<TextFieldProps>`
  width: ${({width = '100%'}) => width};
  margin: ${({margin = '0'}) => margin};
  .MuiInputBase-formControl {
    &:hover fieldset {
      border: 1px solid #D5D5EF;
    }
    &.Mui-focused fieldset {
      border: 1px solid #A50034;
    }
    &.Mui-error fieldset {
      border: 2px solid #A50034;
    }
  }
  .MuiInputBase-input {
    box-sizing: border-box;
    height: ${({height = '48px'}) => height};
    background: #FFFFFF;
    ${useTextStyle('input1')}
    ::placeholder {
      ${useTextStyle('input1')}
    }
  }
`;

const TextField: React.FC<TextFieldProps> = ({
  variant = 'outlined',
  margin,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  width,
  height,
  error,
  onChange,
  ...props
}) => {
  
  return (
    <StyledTextField
      error={error}
      value={value} 
      defaultValue={defaultValue} 
      placeholder={placeholder} 
      onChange={onChange}
      width={width}
      height={height}
      autoComplete={'off'}
    />
  );
};

export default TextField;