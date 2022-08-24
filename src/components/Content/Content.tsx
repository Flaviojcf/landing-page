import {
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input/Input";

type SignInFormData = {
  email?: string;
  name?: string;
  cpf?: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório.").email("E-mail inválido"),
  cpf: yup.string().required("CPF obrigatório").min(11,'É necessário informar o CPF'),
  name: yup.string().required("Nome obrigatório"),
});

export function Content() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  const { errors } = formState;

  const [value, setValue] = useState("1");
  return (
    <Flex
      maxW="920px"
      gap="60px"
      mt="20px"
      direction={["column", "column", "row"]}
      align="center"
      h="361px"
    >
      <VStack direction="column" spacing="4px" h="100%">
        <Text fontSize="lg" textAlign="start" w="100%">
          Ajude o algorítimo a ser mais certeiro
        </Text>

        <Text fontSize="sm" flexWrap="wrap" maxW="520px">
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend.
          <br />
          <br />
          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum
          ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed,
          egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut
          neque mattis, consequat velit ut, ultrices orci. Nulla varius
          elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
          magna ac luctus commodo, odio ante suscipit libero, at mattis augue
          est vel metus.
        </Text>
      </VStack>
      <Flex
        as="form"
        flexDir="column"
        maxW="340px"
        h="100%"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="1">
          <Input
            label="Nome Completo:"
            type="text"
            {...register("name")}
            error={errors.name}
          />
          <Input
            type="email"
            label="E-mail:"
            {...register("email")}
            error={errors.email}
          />
          <Input
            type="number"
            label="CPF:"
            {...register("cpf")}
            error={errors.cpf}
          />
          <RadioGroup onChange={setValue} value={value}>
            <Flex align="center" flexDirection="row" gap="20px">
              <Radio borderColor="gray.700" value="1" name="gen">
                Masculino
              </Radio>
              <Radio borderColor="gray.700" value="2" name="gen">
                Feminino
              </Radio>
            </Flex>
          </RadioGroup>
        </Stack>

        <Button
          w="340px"
          h="39px"
          type="submit"
          cursor="pointer"
          mt="20px"
          isLoading={formState.isSubmitting}
          borderColor="gray.700"
          border="1px"
          bgColor="white.100"
          _hover={{
            bgColor: "white.100",
          }}
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
}
