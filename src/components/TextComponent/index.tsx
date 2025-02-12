import React from "react";

export type TextComponentProps = {
  children: React.ReactNode;
  h1: boolean;
};
export default function TextComponent({ children, h1 }: TextComponentProps) {
  return (
    <div>
      {h1 && <h1>{children}</h1>}
      {!h1 && <p>{children}</p>}
    </div>
  );
}
