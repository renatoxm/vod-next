import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledNavbarSpacer = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
    width: 1px;
  }
`;

export const StyledNavbarLogo = styled.div`
  @media ${device.laptop} {
    display: none;
  }
`;

export const StyledNavbar = styled.header`
  grid-area: navbar;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: var(--navbar-height);
  padding: 1.5rem 2rem;
  margin-top: var(--navbar-margin);
  z-index: 10;
  background-color: var(--color-background-gray);

  @media ${device.laptop} {
    padding: 1.5rem 0;
  }
`;
