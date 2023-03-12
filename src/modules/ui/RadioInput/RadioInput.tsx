import React, { InputHTMLAttributes } from 'react';
import { StyledRadio, StyledRadioInput, StyledRadioLabel } from './styled';

interface IRadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  name: string;
  label: string;
}

const RadioInput: React.FC<IRadioInputProps> = ({
  type,
  label,
  ...inputProps
}) => {
  return (
    <StyledRadioLabel>
      {label}
      <StyledRadioInput type="radio" {...inputProps} />
      <StyledRadio />
    </StyledRadioLabel>
  );
};

export default RadioInput;
