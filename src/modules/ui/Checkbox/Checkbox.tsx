import React, { InputHTMLAttributes } from 'react';
import {
  StyledCheckbox,
  StyledCheckboxInput,
  StyledCheckboxLabel,
} from './styled';
import IconWrapper from '../IconWrapper';

interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children?: React.ReactNode;
  label: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, ...inputProps }) => {
  return (
    <StyledCheckboxLabel>
      <StyledCheckbox>
        <StyledCheckboxInput type={`checkbox`} {...inputProps} />
        <IconWrapper
          data-testid="checkbox-icon"
          icon="CheckOutlined"
          size={11}
        />
      </StyledCheckbox>
      {label}
    </StyledCheckboxLabel>
  );
};

export default Checkbox;
