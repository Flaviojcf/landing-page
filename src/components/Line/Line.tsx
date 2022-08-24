import { Flex, Text } from "@chakra-ui/react";

interface LineProps {
  text: string;
}

export function Line({ text }: LineProps) {
  return (
    <Flex as="span" align="center"  mt="107px" maxW="920px">
      <Flex
        as="span"
        border="1px"
        width={["120px", "120px","120px", "400px"]}
      ></Flex>
      <Text
        fontSize="sm"
        color="gray.500"
        fontWeight="bold"
        textAlign="center"
        width="200px"
      >
        {text}l
      </Text>
      <Flex
        as="span"
        bgColor="gray.500"
        border="1px"
        width={["120px", "120px", "120px", "400px"]}
      ></Flex>
    </Flex>
  );
}
