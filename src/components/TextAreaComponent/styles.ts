import styled from "styled-components";

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.orangeBg};
  font-family: ${({ theme }) => theme.font.family.default};
  border: 1px solid ${({ theme }) => theme.colors.orangeBorder};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.grayNormal};
  font-weight: 500;
  margin: 2rem 0 4.2rem;
  padding: 1rem;
  width: 54.6rem;
  height: 18.7rem;
  resize: none;

  &:focus-visible {
    outline: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.containers.containerM}) {
    margin: 1.5rem 0 2.2rem;
    width: 38.4rem;
    height: 8.4rem;
  }
`;
