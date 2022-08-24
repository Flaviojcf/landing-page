import { Flex, Grid, GridItem } from "@chakra-ui/react";

export function Options() {
  return (
    <Grid
      templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      justifyContent="space-between"
      maxW="769px"
      alignItems="center"
      gap={[1, 5]}
      marginTop="50px"
    >
      <GridItem w="160px" h="40px" bgColor="white.100">
        <Flex align="center" justify="center" h="100%" fontSize="sm" cursor="pointer">
          Conheça a Linx
        </Flex>
      </GridItem>
      <GridItem w="160px" h="40px" bgColor="white.100">
      <Flex align="center" justify="center" h="100%" fontSize="sm" cursor="pointer" >
          Ajude o algorítimo
        </Flex>
      </GridItem>
      <GridItem w="160px" h="40px" bgColor="white.100">
        <Flex align="center" justify="center" h="100%" fontSize="sm" cursor="pointer">
          Seus produtos
        </Flex>
      </GridItem>
      <GridItem w="160px" h="40px" bgColor="white.100">
        <Flex align="center" justify="center" h="100%" fontSize="sm" cursor="pointer">
          Compartilhe
        </Flex>
      </GridItem>
    </Grid>
  );
}
