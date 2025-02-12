import { useState, SetStateAction, useCallback, FormEvent } from "react";

import {
  Stack,
  HStack,
  useRadioGroup,
  Box,
  FormControl,
} from "@chakra-ui/react";

import { parseCookies } from "nookies";

import { api } from "../../services/api";

import TitleContext from "../../components/TitleContext";
import RadioCard from "../../components/RadioCard";

import { buttons } from "./buttons";
import Logo from "../../components/Logo";
import DefaultButton from "../../components/DefaultButton";
import HelperLabelComponent from "../../components/HelperLabelComponent";
import TextAreaComponent from "../../components/TextAreaComponent";
import InputComponent from "../../components/InputComponent";
import * as Styled from "./styles";
import toast, { Toaster } from "react-hot-toast";
import { GetServerSideProps } from "next";

export default function Dashboard() {
  const [satisfaction, setSatisfaction] = useState(true);
  const [sendMessage, setSendMessage] = useState(false);
  const [register, setRegister] = useState(false);
  const [appreciation, setAppreciation] = useState(false);
  const [assessment, setAssessment] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  const configureAssessment = useCallback(() => {
    setSendMessage(true);
    setSatisfaction(false);
  }, [sendMessage, satisfaction]);

  const configureMessage = useCallback(() => {
    setRegister(true);
    setSendMessage(false);
  }, [register, sendMessage]);

  const configureRegister = (event: FormEvent) => {
    event.preventDefault();
    api
      .post("/assessment", {
        assessment,
        message,
        name,
        address,
        telephone,
      })
      .then(() => {        
        setAssessment("1");
        setMessage("");
        setName("");
        setAddress("");
        setTelephone("");
        toast.success("Registro feito!");
        setAppreciation(true);
        setRegister(false);
      })
      .catch((e) => {
        toast.error("Ocorreu um erro ao registrar!");
      });
  };

  const configureAppreciation = useCallback(() => {
    setSatisfaction(true);
    setSendMessage(false);
    setRegister(false);
    setAppreciation(false);
  }, [satisfaction, sendMessage, register, appreciation]);

  const handleChange = (value: SetStateAction<string>) => {
    setAssessment(value);
  };

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "1",
    onChange: handleChange,
  });

  return (
    <Styled.MainBg>
      <Logo />
      <form onSubmit={configureRegister}>
        <Box display={"flex"} justifyContent={"center"}>
          <Box display={"flex"} flexDirection={"row"} gap={"15rem"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              className={satisfaction ? "block" : "hidden"}
              id="avaliacao"
            >
              <TitleContext
                title={"Faça a sua avaliação!"}
                description={
                  "Compartilhe sua opinião e ajude-nos a melhorar! Sua"
                }
                descriptionContinuation={"avaliação é importante."}
              />
              <Stack
                {...getRootProps()}
                m={["2rem 0", "2rem 0", "1.5rem 0", "3rem 0", "3rem 0"]}
              >
                <HStack spacing={["2rem", "2rem", "2rem", "2.5rem", "2.5rem"]}>
                  {buttons.map((button) => {
                    return (
                      <RadioCard
                        key={button.id}
                        src={button.src}
                        alt={button.alt}
                        title={button.name}
                        {...getRadioProps({ value: button.id })}
                      />
                    );
                  })}
                </HStack>
              </Stack>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              id="mensagem"
              className={sendMessage ? "block" : "hidden"}
            >
              <TitleContext
                title={"Nos mande uma mensagem!"}
                description={
                  "Envie seu feedback como: Sugestões, elogios ou criticas"
                }
                descriptionContinuation={"agora e faça parte da mudança."}
              />
              <FormControl
                className="responsive-form"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                margin={"2rem 0 3.2rem 0"}
                gap={"2.6rem"}
              >
                <TextAreaComponent
                  placeholder="Sua mensagem..."
                  state={message}
                  handleChangeCallback={setMessage}
                />
              </FormControl>
            </Box>
            <Box
              display={"none"}
              flexDirection={"column"}
              alignItems={"center"}
              id="registro"
              className={register ? "block" : "hidden"}
            >
              <TitleContext
                title={"Faça seu cadastro!"}
                description={"Cadastre-se em nosso app de satisfação agora"}
                descriptionContinuation={"mesmo!"}
              />
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
                  placeholder={"Nome"}
                  state={name}
                  handleChangeCallback={setName}
                  type={""}
                />
                <InputComponent
                  placeholder={"Endereço"}
                  state={address}
                  handleChangeCallback={setAddress}
                  type={""}
                />
                <InputComponent
                  placeholder={"Telefone"}
                  state={telephone}
                  handleChangeCallback={setTelephone}
                  type={""}
                />
              </FormControl>
            </Box>
            <Box
              display={"none"}
              flexDirection={"column"}
              alignItems={"center"}
              id="agradecimento"
              className={appreciation ? "block" : "hidden"}
            >
              <TitleContext
                title={"Obrigado pelo feedback!"}
                description={
                  "Seu feedback será util para melhorar nossa performance e oferecer"
                }
                descriptionContinuation={"um serviço ainda melhor."}
              />
              <Styled.Image
                src="/assets/images/highFive.svg"
                alt="Imagem de duas pessoas batendo as mãos"
              />
            </Box>
          </Box>
        </Box>
        {satisfaction && (
          <Box display={"flex"}>
            <DefaultButton
              margin={"0 auto"}
              onclick={() => configureAssessment()}
              title="Confirmar"
            />
          </Box>
        )}
        {sendMessage && (
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <DefaultButton
              margin={"0 auto"}
              onclick={() => configureMessage()}
              title="Enviar mensagem"
            />
            <HelperLabelComponent
              children={"Prefiro não enviar mensagem."}
              onclick={() => configureMessage()}
            />
          </Box>
        )}
        {register && (
          <Box display={"flex"}>
            <DefaultButton
              type="submit"
              margin={"0 auto"}
              onclick={() => configureRegister}
              title="Cadastre-se"
            />
          </Box>
        )}
        {appreciation && (
          <Box display={"flex"}>
            <DefaultButton
              margin={"0 auto"}
              onclick={() => configureAppreciation()}
              title="Ir para o início"
            />
          </Box>
        )}
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </Styled.MainBg>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
