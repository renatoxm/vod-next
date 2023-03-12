import styled from 'styled-components';

export const StyledVideoProgress = styled.input`
  --progress-gradient: linear-gradient(
    to right,
    var(--color-black) 0%,
    var(--color-black) 100%
  );
  --progress-height: 5px;
  --thumb-size: calc(var(--progress-height) * 2);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: var(--progress-gradient);
  cursor: pointer;
  height: var(--progress-height);
  width: 100%;
  border-radius: calc(var(--progress-height) / 2);
  transition: 0.1s ease-in;
  vertical-align: bottom;

  &:hover {
    --progress-height: 8px;

    &::-webkit-slider-thumb {
      width: var(--thumb-size);
      height: var(--thumb-size);
    }
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #aeaeae;
    border-radius: calc(var(--thumb-size) / 2);
    box-shadow: inset 0 0 0 5px #eaeaea;
    height: 0;
    transition: 0.1s ease-in;
    width: 0;
  }
`;
