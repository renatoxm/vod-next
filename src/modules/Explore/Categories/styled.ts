import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledExploreCategories = styled.nav`
  display: flex;
  gap: 20px;
  padding: 0 2rem;
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  @media ${device.laptop} {
    padding: 0;
    overflow: hidden;
  }

  @media ${device.desktop} {
    gap: 30px;
  }

  & > * {
    flex: 0 0 90px;

    @media ${device.laptop} {
      flex: 0 1 120px;
    }

    @media ${device.desktop} {
      flex: 0 0 140px;
    }
  }
`;
