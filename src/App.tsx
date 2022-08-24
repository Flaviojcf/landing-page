import { Flex } from "@chakra-ui/react";

import { Content } from "./components/Content/Content";
import { ContentFooter } from "./components/ContentFooter/ContentFooter";

import { Header } from "./components/Header";
import { Line } from "./components/Line/Line";
import { Products } from "./components/Product/Products";

function App() {
  return (
    <Flex direction="column" align="center">
      <Header />
      <Flex direction="column" align="center">
        <Content />
        <Line text="Sua seleção especial" />
        <Products />
        <Line text="Compartilhe a novidade" />
        <ContentFooter />
      </Flex>
    </Flex>
  );
}

export default App;
