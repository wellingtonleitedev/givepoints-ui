import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import defaultTheme from "./styles/theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";

const theme = extendTheme(defaultTheme);
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
