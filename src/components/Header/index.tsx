import { Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Options } from "../Options";

export function Header() {
  return (
    <Flex
      bgColor="gray.700"
      w="100%"
      h="399px"
      direction="column"
      paddingTop="4.313rem"
      paddingLeft={["3","0"]}
      alignItems="center"
    >
      <VStack alignItems={["start", "center"]}  spacing="0.25px">
        <Text color="white.100" fontSize="2xl">
          uma seleção de produtos
        </Text>
        <Text color="white.100" fontSize="5xl">
          especial para você
        </Text>
        <Text color="white.100" fontSize="xs">
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </Text>
      </VStack>
      <Options />
    </Flex>
  );
}
