import styled from 'styled-components';
import { Tooltip } from 'react-tooltip';

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: var(--button-f-size);
  font-weight: 600;
  color: var(--button-text-color);
  background-color: var(--button-bg-color);
  padding: var(--button-padding);
  border-radius: 0.55em;
  /* display: inline-flex;
  align-items: center; */
  transition: 0.2s;
  white-space: nowrap;

  &:hover {
    color: var(--button-hover-color);
  }
`;

export const StyledTooltip = styled(Tooltip)`
  background-color: var(--color-grayDark);
  font-size: 1.1rem;
`;
