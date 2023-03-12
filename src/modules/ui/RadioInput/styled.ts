import styled from 'styled-components';

export const StyledRadioLabel = styled.label`
  --radio-size: 2rem;
  --inner-circle-size: 1rem;
  display: flex;
  font-size: 1.3rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const StyledRadio = styled.span`
  position: relative;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
  border-radius: calc(var(--radio-size) / 2);
  border: 2px solid var(--color-gray);
`;

export const StyledRadioInput = styled.input`
  appearance: none;
  --moz-appearance: none;
  --webkit-appearance: none;
  margin: 0;
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);

  &:checked + ${StyledRadio} {
    border-color: red;

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: -2px;
      left: -2px;
      height: var(--radio-size);
      width: var(--radio-size);
      border-radius: calc(var(--radio-size) / 2);
      background-color: red;
      transform: scale(0.4);
      transform-origin: center;
    }
  }
`;
