import styled from 'styled-components';

export const StyledSuspenseContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - var(--navbar-height) - var(--navbar-margin));
  background: rgba(21, 23, 25, 0.85);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const StyledSuspenseSpinner = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  & {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid var(--color-grayDark);
    border-right: 1.1em solid var(--color-grayDark);
    border-bottom: 1.1em solid var(--color-grayDark);
    border-left: 1.1em solid var(--color-grayLight);
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
