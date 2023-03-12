import { device } from '@/const/cssMedia';
import Link from 'next/link';
import styled from 'styled-components';
import { StyledHamburgerButton } from '../ui/HamburgerMenu/styled';

export const StyledSidebarHeader = styled.header`
  max-width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledLogoLink = styled(Link)`
  display: var(--sidebar-items-display);
`;

export const StyledSidebar = styled.aside`
  --sidebar-padding-h: 3em;
  display: none;
  height: 100vh;
  position: sticky;
  top: 0;
  width: var(--sidebar-width);
  overflow: hidden;
  padding: 3.9em var(--sidebar-padding-h) 0;
  grid-area: sidebar;
  background-color: var(--color-background-blue);

  & ${StyledHamburgerButton} {
    margin-right: 1.4em;
  }

  & ${StyledSidebarHeader} {
    margin-bottom: 1.1em;
  }

  @media ${device.laptop} {
    display: block;
  }
`;
