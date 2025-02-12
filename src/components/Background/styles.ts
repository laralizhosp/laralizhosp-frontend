import styled, { css } from "styled-components";

export const Background = styled.div`
  ${() => css`
    height: 100vh;
    width: 100%;
    background-image: url("/assets/images/bgLaraliz.svg");
    background-repeat: no-repeat;
    background-size: cover;
  `};
`;
