import styled from "styled-components";

export const SkeletonItem = styled.div`
  background: #ddd;
  border-radius: 2px;

  &.table-data {
    width: 99%;
    height: 50px;
    margin: 10px auto;
    position: relative;
    overflow: hidden;
  }
  &.graphic-card {
    width: 100%;
    height: 140px;
    margin: 0 auto;
    border-radius: 3px;
  }

  &.graphic {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    border-radius: 3px;
  }

  @media (max-width: 600px) {
    &.table-data {
      width: 97%;
    }
  }
`;
