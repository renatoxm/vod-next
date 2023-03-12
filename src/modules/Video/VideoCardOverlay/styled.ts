import styled from 'styled-components';
import Row from '@/modules/ui/Row';

export const StyledControlsRow = styled(Row)`
  position: absolute;
  right: 0.8em;
  top: 1.2em;
  z-index: 1;
`;

export const StyledVideoCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: block;
`;

export const StyledHoverContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
`;
