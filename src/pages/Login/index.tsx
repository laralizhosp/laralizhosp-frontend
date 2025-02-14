import { Box, FormControl, useToast } from "@chakra-ui/react";
import InputComponent from "../../components/InputComponent";
import DefaultButton from "../../components/DefaultButton";
import { FormEvent, useContext, useState } from "react";
import TextComponent from "../../components/TextComponent";
import { AuthContext } from "../../contexts/AuthContext";
import Head from "next/head";
import Logo from "../../components/Logo";

export default function Login() {
  const toast = useToast();
  const { signIn, isLoading } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      toast({
        title: "Login",
        description: "Por favor, preencha todos os campos",
        duration: 3000,
        status: "error",
        position: "top-right",
      });
      return;
    }
    const data = {
      email: email,
      password: password,
    };
    await signIn(data);
  }

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      backgroundImage={"/assets/images/bgLaraliz.svg"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Head>
        <title>Laraliz | pesquisa de satisfação: Entre</title>
      </Head>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box
          w={"100%"}
          h={["17.7rem", "16.7rem", "15.7rem", "14.7rem", "13.7rem"]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Logo />
        </Box>
        <Box w={"100%"} textAlign={"center"} marginBottom={"2rem"}>
          <TextComponent children={"Login."} h1 />
        </Box>
        <form className="responsive-form" onSubmit={handleSubmit}>
          <FormControl
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            margin={[
              "0 0 0 0",
              "0 0 0 0",
              "0.8rem 0 0 0",
              "2rem 0 3.2rem 0",
              "2rem 0 3.2rem 0",
            ]}
            gap={["1rem", "1rem", "1rem", "2.6rem", "2.6rem"]}
          >
            <InputComponent
              placeholder={"Digite seu e-mail"}
              state={email}
              handleChangeCallback={setEmail}
              textField={"E-mail"}
              type={"email"}
            />
            <InputComponent
              placeholder={"Digite sua senha"}
              state={password}
              handleChangeCallback={setPassword}
              textField={"Senha"}
              type={"password"}
            />
            <DefaultButton
              w={"100%"}
              marginTop={"3rem"}
              isDisabled={isLoading}
              type="submit"
              title="Entrar"
            />
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}
