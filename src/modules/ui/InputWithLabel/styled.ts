import styled from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;

  & > span {
    display: inline-block;
    position: absolute;
    top: -0.5em;
    left: 1.3em;
    height: 12px;
    font-size: 1rem;
    padding: 0 1em;
    background-color: var(--color-sign-bg);
    font-weight: 400;
    color: var(--color-grayLight);
  }
`;

export const StyledLabeledInput = styled.input`
  background-color: var(--color-sign-bg);
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 0.7em;
  width: 358px;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.25em 1.6em;
`;
