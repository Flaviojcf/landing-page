import { Flex, Stack, Text, Button } from "@chakra-ui/react";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input/Input";

type SignInFormData = {
  email?: string;
  name?: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório.").email("E-mail inválido"),
  name: yup.string().required("Nome obrigatório"),
});

export function ContentFooter() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  const { errors } = formState;
  return (
    <Flex
      h="350px"
      align="center"
      direction="column"
      mt="44px"
      justify="center"
      maxW="920px"
    >
      <Text>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </Text>
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
        maxW="340px"
        mt="44px"
        direction="column"
        align="center"
        justify="center"
      >
        <Stack spacing="4" direction={["column","column","column","row"]} align="center">
          <Input
            label="Nome do seu amigo:"
            type="text"
            {...register("name")}
            error={errors.name}
          />
          <Input
            label="E-mail:"
            type="email"
            {...register("email")}
            error={errors.email}
          />
        </Stack>
        <Button
          w="260px"
          h="39px"
          type="submit"
          cursor="pointer"
          mt="64px"
          isLoading={formState.isSubmitting}
          borderColor="gray.700"
          border="1px"
          bgColor="white.100"
          _hover={{
            bgColor: "white.100",
          }}
        >
          Enviar agora
        </Button>
      </Flex>
    </Flex>
  );
}
