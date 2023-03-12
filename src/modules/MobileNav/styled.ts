import styled from 'styled-components';
import { StyledMobileNavItem } from './MobileNavItem/styled';

export const StyledMobileNav = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  height: var(--mobile-nav-height);
  width: 100%;
  z-index: 10;
  background-color: var(--color-black);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1em 4.5em 0;

  & ${StyledMobileNavItem} {
    &:first-of-type {
      justify-content: flex-start;
    }

    &:last-of-type {
      justify-content: flex-end;
    }
  }
`;
