import { Box, FormControl, useToast } from "@chakra-ui/react";
import Template from "../../components/Template";
import InputComponent from "../../components/InputComponent";
import DefaultButton from "../../components/DefaultButton";
import { FormEvent, useContext, useState } from "react";
import TextComponent from "../../components/TextComponent";
import { AuthContext } from "../../contexts/AuthContext";
import Head from "next/head";

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
    }
    await signIn(data);
  }

  return (
    <Template>
      <Head>
        <title>Laraliz | pesquisa de satisfação: Entre</title>
      </Head>
      <Box w={"100%"} textAlign={"left"}>
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
            isDisabled={isLoading}
            type="submit"
            title="Entrar"
          />
        </FormControl>
      </form>
    </Template>
  );
}