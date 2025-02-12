import styled, { css } from "styled-components";

export const MainBg = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url("/assets/images/bgLaraliz.svg");
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 25.5rem;
    @media screen and (max-width: ${theme.containers.containerM}) {
      width: 14.5rem;
    }
  `}
`;
