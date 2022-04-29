import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

const AuthLayout: React.FC = ({ children }) => (
  <Flex
    minHeight="100vh"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    height="100%"
  >
    <Box boxSize="lg">{children}</Box>
  </Flex>
);

export default AuthLayout;
