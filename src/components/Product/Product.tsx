import { Flex, Image, Input, Text, VStack } from "@chakra-ui/react";

interface ProductProps {
  name: string;
  image: string;
  oldPrice: number;
  price: number;
  description: string;
}

export function Product({
  name,
  image,
  oldPrice,
  description,
  price,
}: ProductProps) {
  return (
    <Flex
      w={["169px", "201px"]}
      h={["129", "350px"]}
      direction={["row", "row", "column"]}
      mt="20px"
    >
      <Flex
        w={["169px", "200px"]}
        h={["129px", "150px"]}
        border="1px"
        borderColor="gray.700"
        align="center"
        justify="center"
      >
        <Image src={image} alt="teste" />
      </Flex>
      <VStack spacing={[0.5, 4]} mt="20px" align="start">
        <Text fontSize="xs">{name}</Text>
        <Text fontSize="xs">De: {
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(oldPrice)}</Text>
        <Text fontSize="xs" color="gray.500" fontWeight="bold">
          Por: {
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(price)}
        </Text>
        <Text fontSize="xs">
          ou 2x de {
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price/2)}
        </Text>
        <Input type="button" value="Comprar" cursor="pointer" />
      </VStack>
    </Flex>
  );
}
