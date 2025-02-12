import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 12.4rem;
  height: 18.2rem;
  border: none;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.containers.containerM}) {
    width: 10rem;
    height: 15.2rem;

    p {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.containers.containerS}) {
    width: 8rem;
    height: 12.2rem;

    p {
      font-size: 1.2rem;
    }
  }
`;

export const ContentImg = styled.div`
  ${({ theme }) => css`
    width: 12.4rem;
    height: 12.4rem;
    background-color: ${theme.colors.yellowLight};
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

  

    @media screen and (max-width: ${theme.containers.containerM}) {
      width: 10rem;
      height: 10rem;
    }

    @media screen and (max-width: ${theme.containers.containerS}) {
      width: 8rem;
      height: 8rem;
    }
  `};
`;

export const Image = styled.img`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.containers.containerM}) {
      width: 7rem;
    }

    @media screen and (max-width: ${theme.containers.containerS}) {
      width: 5rem;
    }
  `}
`;

export const Title = styled.p`
  font-size: 1.6rem;
  margin-top: 0.8rem;
`