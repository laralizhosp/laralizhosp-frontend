import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) =>
      theme.containers.containerSMM}) {
    display: none;
  }
`;
