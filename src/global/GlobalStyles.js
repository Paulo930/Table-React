import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
`;

export const Button = styled.button`
  border: 2px solid #00f;
  color: #00f;
  padding: 0.3rem;
  background: transparent;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    background: #00f;
    color: #fff;
  }
`;
