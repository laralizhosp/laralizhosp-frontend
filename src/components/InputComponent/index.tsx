import { Box, Text } from "@chakra-ui/react";
import * as Styled from "./styles";

export type InputComponentProps = {
  placeholder: string;
  state: string;
  handleChangeCallback: Function;
  textField?: string;
  type: string;
};
export default function InputComponent({
  placeholder,
  state,
  handleChangeCallback,
  textField,
  type
}: InputComponentProps) {
  return (
    <Box>
      <Text mb={"8px"} ml={"8px"}>{textField}</Text>
      <Styled.Input
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(event) => handleChangeCallback(event.currentTarget.value)}
      />
    </Box>
  );
}
