import styled from 'styled-components';
import Button from '../Button';
import IconWrapper from '../IconWrapper';

export const StyledButton = styled(Button)`
  position: relative;
`;

export const InkWrapper = styled.span`
  position: absolute;
  top: -0.5em;
  left: -0.5em;
  font-size: inherit;
  height: 2em;
  width: 2em;
  border-radius: 50%;
  z-index: 2;
`;

export const StyledButtonIcon = styled(IconWrapper)`
  position: relative;
  z-index: 1;
`;
