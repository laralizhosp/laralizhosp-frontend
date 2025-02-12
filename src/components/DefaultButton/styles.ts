import styled, { css } from "styled-components";

export const Button = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.font.family.default};
    background-color: ${theme.colors.primaryNormal};
    color: ${theme.colors.whiteNormal};
    border: none;
    border-radius: 1rem;
    font-size: 2rem;
    width: 38.6rem;
    height: 6rem;
    padding: 1.2rem 10.2rem;
    text-align: center;

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }

    @media screen and (max-width: ${({ theme }) =>
        theme.containers.containerM}) {
      margin-top: 1rem;
      font-size: 1.2rem;
      width: 21.6rem;
      height: 4.2rem;
      padding: 1.2rem 5.2rem;
    }
  `};
`;
