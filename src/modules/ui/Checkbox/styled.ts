import styled from 'styled-components';

export const StyledCheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 1.2em;
  font-size: 12px;
  color: var(--color-light);
  font-weight: 500;
  cursor: pointer;
`;

export const StyledCheckbox = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  border: 1px solid #ffffff;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCheckboxInput = styled.input`
  appearance: none;
  --moz-appearance: none;
  --webkit-appearance: none;
  margin: 0;
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);

  &:checked + * {
    opacity: 1;
  }

  & + * {
    opacity: 0;
  }
`;
