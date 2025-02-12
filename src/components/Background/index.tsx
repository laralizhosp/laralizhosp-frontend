import React from "react";
import * as Styled from "./styles";

export type BackgroundProps = {
  children: React.ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return <Styled.Background>{children}</Styled.Background>;
}
