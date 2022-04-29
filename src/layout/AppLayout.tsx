import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Header from "../components/Header";

const AppLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Flex
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
    >
      <Box boxSize="lg">{children}</Box>
    </Flex>
  </>
);

export default AppLayout;
