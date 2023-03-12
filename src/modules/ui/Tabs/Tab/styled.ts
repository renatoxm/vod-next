import styled from 'styled-components';

export const StyledTab = styled.button`
  border: none;
  background: transparent;
  color: var(--tab-font-color);
  font-size: 13px;
  letter-spacing: 0.2px;
  padding: 0.45em 0.6em;
  font-weight: 500;
  cursor: pointer;
  flex-shrink: 0;

  &:first-of-type {
    margin-left: -0.6em;
  }

  &:hover {
    color: var(--tab-font-color-active);
  }
`;
