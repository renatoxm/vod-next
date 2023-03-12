import styled from 'styled-components';
import Text from '../../../ui/Text';

export const StyledDescWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

export const StyledVideoDescription = styled(Text)`
  white-space: pre-line;
  font-weight: 500;
`;

export const StyledMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.5em 0;
  border: none;
  background: none;
  color: var(--color-light);
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
`;
