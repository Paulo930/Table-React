import styled from "styled-components";

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 2.5s infinite;
  z-index: 999;

  @keyframes loading {
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translateX(150%);
    }
  }
`;

export const ShimmerContent = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.2);
  transform: skewX(-20deg);
`;
