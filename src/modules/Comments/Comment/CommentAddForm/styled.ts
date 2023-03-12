import styled from 'styled-components';

export const StyledCommentForm = styled.form`
  min-height: 64px;
  background-color: #000000;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 1.4em;
  padding: 1.3em 2.8em;
  width: 100%;
`;

export const StyledCommentInput = styled.span`
  border: none;
  background: transparent;
  flex: 1;
  font-size: 1.3rem;
  padding: 0.8em 0;
  resize: none;
  outline: none;
  color: var(--color-light);

  &[data-placeholder]:empty::before {
    content: attr(data-placeholder);
    color: var(--color-grayLight);
  }
`;
