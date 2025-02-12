import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;

  @media screen and (max-width: ${({ theme }) => theme.containers.containerS}) {
    gap: 0;
  }
`;
