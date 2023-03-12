import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledVideoInfo = styled.div`
  padding: 0 var(--container-padding);

  @media ${device.laptop} {
    padding: 0;
  }
`;

export const StyledVideoInfoGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-areas:
    'avatar channel subscribe'
    'description description description';
  align-items: flex-start;
  grid-template-columns: auto 1fr 130px;

  @media ${device.tablet} {
    grid-template-areas:
      'avatar channel subscribe'
      'avatar description subscribe';
  }
`;

export const StyledAvatarArea = styled.div`
  grid-area: avatar;
`;

export const StyledChannelArea = styled.div`
  grid-area: channel;
`;

export const StyledSubscribeArea = styled.div`
  grid-area: subscribe;
`;

export const StyledDescArea = styled.div`
  grid-area: description;
`;
