import React, { InputHTMLAttributes } from 'react';
import { StyledLabel, StyledLabeledInput } from './styled';

interface IInputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  label: string;
}

const InputWithLabel: React.FC<IInputWithLabelProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <StyledLabel>
      <span>{label}</span>
      <StyledLabeledInput {...inputProps} />
    </StyledLabel>
  );
};

export default InputWithLabel;
