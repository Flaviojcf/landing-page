import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "./Product";

export function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [productsPageTwo, setProductsPageTwo] = useState<any[]>([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get("page=1");
      setProducts(response.data.products);
    }
    getProduct();
  }, []);

  useEffect(() => {
    async function getProductPageTwo() {
      const response = await api.get("page=2");
      setProductsPageTwo(response.data.products);
    }
    getProductPageTwo();
  }, []);

  function handleShowMore() {
    setDisplay(!display);
  }

  function displayView() {
    if (display === true) {
      return "block";
    } else {
      return "none";
    }
  }

  function displayLengthContainer() {
    if (display === true) {
      return "1960px";
    } else {
      return "980px";
    }
  }

  function displayLengthContent() {
    if (display === true) {
      return "980px";
    } else {
      return "0px";
    }
  }

  return (
    <Flex
      direction="column"
      maxH={displayLengthContainer()}
      mt="60px"
      align="center"
    >
      <Flex
        direction="row"
        flexWrap="wrap"
        maxW="940px"
        h="980px"
        gap="40px"
        justify="start"
      >
        {products.map((product) => (
          <GridItem h={["129", "150px"]} key={product.id}>
            <Product
              name={product.name}
              image={product.image}
              description={product.decription}
              oldPrice={product.oldPrice}
              price={product.price}
            />
          </GridItem>
        ))}
      </Flex>
      <Flex
        direction="row"
        flexWrap="wrap"
        maxW="940px"
        h={displayLengthContent()}
        gap="40px"
        justify="start"
      >
        {productsPageTwo.map((product) => (
          <GridItem
            h={["129", "150px"]}
            key={product.id}
            display={displayView()}
          >
            <Product
              name={product.name}
              image={product.image}
              description={product.decription}
              oldPrice={product.oldPrice}
              price={product.price}
            />
          </GridItem>
        ))}
      </Flex>
      <Flex
        w="260px"
        h="39px"
        border="1px"
        borderColor="gray.700"
        alignSelf="center"
        justifySelf="center"
      >
        <Button
          w="260px"
          h="100%"
          cursor="pointer"
          bgColor="white.100"
          _hover={{
            bgColor: "white.100",
          }}
          onClick={handleShowMore}
        >
          Ainda mais produtos aqui!
        </Button>
      </Flex>
    </Flex>
  );
}
