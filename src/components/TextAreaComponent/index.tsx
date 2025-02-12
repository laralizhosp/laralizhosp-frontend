import { TextArea } from "./styles";

export type TextAreaProps = {
  placeholder?: string;
  state: string;
  handleChangeCallback: Function;
};
export default function TextAreaComponent({
  placeholder,
  state,
  handleChangeCallback,
}: TextAreaProps) {
  return (
    <TextArea
      placeholder={placeholder}
      value={state}
      onChange={(event) => handleChangeCallback(event.currentTarget.value)}
    />
  );
}
