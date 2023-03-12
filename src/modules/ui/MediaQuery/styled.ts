import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const MobileOnly = styled.div`
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

export const TabletOnly = styled.div`
  display: block;

  @media ${device.laptop} {
    display: none;
  }
`;

export const FromTabletOnly = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const LaptopOnly = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

export const DesktopOnly = styled.div`
  display: none;

  @media ${device.desktop} {
    display: block;
  }
`;
