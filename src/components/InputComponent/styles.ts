import styled from "styled-components";

export const Input = styled.input`
  width: 44.6rem;
  height: 6.4rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.orangeBg};
  border: 1px solid ${({ theme }) => theme.colors.orangeBorder};

  @media screen and (max-width: ${({ theme }) => theme.containers.containerM}) {
    width: 24.6rem;
    height: 3.8rem;
  }
`;
