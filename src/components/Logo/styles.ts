import styled, { css } from "styled-components";

export const Div = styled.div`
  ${({ theme }) => css`
    width: 9rem;
    margin: 0 auto;

    img {
      width: 100%;
    }

    @media (max-width: ${theme.containers.containerM}) {
      width: 5.9rem;
    }
  `};
`;
