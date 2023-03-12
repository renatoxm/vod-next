import styled from 'styled-components';

export const StyledPlaylistCollection = styled.div`
  display: flex;
  flex-flow: column;
  gap: var(--collection-gap);

  /* height: calc(var(--item-height) * 4 + var(--collection-gap) * 3); */
`;

export const StyledPlaylistWindow = styled.div`
  --item-height: 84px;
  --v-padding: 2em;
  --collection-gap: 1.4em;

  margin-left: calc(var(--container-padding) * -1);
  margin-right: calc(var(--container-padding) * -1);
  background: var(--color-background-blue);
  border-radius: 6px;

  padding: var(--v-padding) 0;
`;
