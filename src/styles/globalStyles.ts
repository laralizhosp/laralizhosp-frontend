import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.font.family.default};
        background-color: ${({ theme }) => theme.colors.mainBg};
    }

    h1 {
        font-size: 5rem;
        color: ${({ theme }) => theme.colors.yellowNormal};
        text-shadow: -2px 0 ${({ theme }) => theme.colors.redStroke}, 0 2px ${({
  theme,
}) => theme.colors.redStroke},
        2px 0 ${({ theme }) => theme.colors.redStroke}, 0 -2px ${({ theme }) =>
  theme.colors.redStroke};
        letter-spacing: 0.4rem;

        @media screen and (max-width: ${({ theme }) =>
          theme.containers.containerM}) {
            font-size: 2.8rem;
        }

        @media screen and (max-width: ${({ theme }) =>
          theme.containers.containerS}) {
            font-size: 2.8rem;
        }
    }

    a {
        font-size: 1.6rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.blackNormal};
    }

    p {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.redDark};

        @media (max-width: ${({ theme }) => theme.containers.containerM}) {
            font-size: 1rem;
        }

        @media (max-width: ${({ theme }) => theme.containers.containerS}) {
            font-size: 1rem;
        }
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    @media screen and (max-width: ${({ theme }) =>
      theme.containers.containerM}) {
    .responsive-button {
        margin-top: 1rem;
        font-size: 1.6rem !important;
        width: 21.6rem !important;
        height: 4.2rem !important;
        padding: 1.2rem 5.2rem !important;
    }


    @media screen and (max-width: ${({ theme }) =>
      theme.containers.containerM}) {
    .responsive-form {
        margin: 0;
        gap: 0;
    }    
  }
}

.hidden {
    display: none;
}

.block {
    display: flex;
}
`;
