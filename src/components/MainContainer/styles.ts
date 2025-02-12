import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.containers.containerM}) {
    padding-top: 1rem;
  }
`;
