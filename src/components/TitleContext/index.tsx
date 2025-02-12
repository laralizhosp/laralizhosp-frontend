import TextComponent from "../TextComponent";
import * as Styled from "./styles";

export type TitleContextProps = {
  title?: string;
  description?: string;
  descriptionContinuation?: string;
};

export default function TitleContext({
  title,
  description,
  descriptionContinuation,
}: TitleContextProps) {
  return (
    <Styled.HeaderContent>
      {title && <TextComponent children={title} h1 />}
      {description && <TextComponent children={description} h1={false} />}
      {descriptionContinuation && <TextComponent children={descriptionContinuation} h1={false} />}
    </Styled.HeaderContent>
  );
}
