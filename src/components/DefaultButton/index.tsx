import { theme } from "../../styles/theme";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface DefaultButtonProps extends ButtonProps {
  onclick?: () => void;
  title?: string;
}

export default function DefaultButton({ onclick, title, ...rest }: DefaultButtonProps) {
  return (
    <ChakraButton
      className="responsive-button"
      onClick={onclick}
      {...rest}
      fontFamily={theme.font.family}
      bg={theme.colors.primaryNormal}
      color={theme.colors.whiteNormal}
      border={"none"}
      borderRadius={"1rem"}
      fontSize={"2rem"}
      height={"6.0rem"}
      padding={"1.2rem 10.2rem"}
      textAlign={"center"}
      // marginTop={{ lg: "1rem" }}
      _hover={{
        bg: theme.colors.primaryHover,
      }}
    >
      {title}
    </ChakraButton>
  );
}
