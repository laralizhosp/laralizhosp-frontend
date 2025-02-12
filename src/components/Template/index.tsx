import * as Styled from "./styles";
import Background from "../Background";
import Logo from "../Logo";
import MainContainer from "../MainContainer";
import React from "react";

export type TemplateProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  descriptionContinuation?: string;
};
export default function Template({
  children,
}: TemplateProps) {
  return (
    <Background>
      <MainContainer>
        <Logo />
        <Styled.Home>
          {children}
        </Styled.Home>
      </MainContainer>
    </Background>
  );
}
