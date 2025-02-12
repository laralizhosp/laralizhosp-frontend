import * as Styled from "./styles";

export type ButtonAssessmentProps = {
  src: string;
  alt: string;
  title: string;
};
export default function ButtonAssessment({
  src,
  alt,
  title,
}: ButtonAssessmentProps) {
  return (
    <Styled.Container>
      <Styled.ContentImg>
        <Styled.Image src={src} alt={alt} />
      </Styled.ContentImg>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
}
