import styled from 'styled-components';
import { StyledLink } from '../SidebarLink/styled';

export const StyledSectionName = styled.h3`
  color: #fff;
  text-transform: uppercase;
`;

export const StyledSection = styled.nav`
  display: flex;
  flex-flow: column;
  color: #fff;
  border-bottom: 3px solid var(--color-grayDark);
  white-space: nowrap;
  padding: 10px 0;

  & ${StyledSectionName} {
    margin: 1.2em 0;
    display: var(--sidebar-items-display);
  }
`;
