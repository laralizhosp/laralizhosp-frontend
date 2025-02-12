import { Box, useRadio, chakra, Flex, Image } from "@chakra-ui/react";
import * as Styled from "./styles";
import { theme } from "../../styles/theme";

export default function RadioCard(props) {
  const { src, alt, title, ...radioProps } = props;
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({})} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        w={["8rem", "10rem", "10rem", "10rem", "12.4rem"]}
        h={["10.2rem", "10.2rem", "16.2rem", "18.5rem", "18.2rem"]}
      >
        <Flex
          bg={theme.colors.yellowLight}
          w={["8rem", "10rem", "10rem", "10rem", "12.4rem"]}
          height={["8rem", "10rem", "10rem", "10rem", "12.4rem"]}
          border={`2px solid ${
            state.isChecked ? theme.colors.primaryHover : "transparent"
          }`}
          borderRadius={"0.8rem"}
          alignItems={"center"}
          justifyContent={"center"}
          {...getRadioProps()}
        >
          <Image
            src={src}
            alt={alt}
            w={["5rem", "5rem", "5rem", "7rem", "7rem"]}
            {...getLabelProps()}
          />
        </Flex>
        <Styled.Title>{title}</Styled.Title>
      </Box>
    </chakra.label>
  );
}
