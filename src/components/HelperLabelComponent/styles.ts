import styled from "styled-components";

export const HelperLabel = styled.p`
  color: ${(props) => props.theme.colors.blackNormal};
  font-weight: 500;
  margin: 2rem 0;

  @media (max-height: ${({ theme }) => theme.containers.containerS}) {
    font-size: 1.2rem;
    margin: 1.2rem 0 0 0;
  }
`;
