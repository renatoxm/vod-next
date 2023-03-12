import styled from 'styled-components';

export const StyledBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: calc(100% + 1px);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  z-index: 0;
`;
