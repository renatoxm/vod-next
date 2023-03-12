import styled from 'styled-components';

export const StyledVolumeProgress = styled.input`
  --progress-height: 3px;
  --thumb-size: calc(var(--progress-height) * 4 + 1px);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 58px;

  background: var(--progress-gradient);

  cursor: pointer;
  height: var(--progress-height);
  border-radius: calc(var(--progress-height) / 2);
  transition: 0.1s ease-in;
  vertical-align: bottom;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: var(--color-light);
    border-radius: calc(var(--thumb-size) / 2);
    transition: 0.1s ease-in;
    width: var(--thumb-size);
    height: var(--thumb-size);
  }
`;

export const StyleProgressWrapper = styled.div`
  display: flex;
  align-items: center;
`;
