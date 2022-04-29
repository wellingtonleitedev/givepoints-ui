import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Callback from "./pages/Callback";
import "./App.css";
import { Flex, Box } from "@chakra-ui/layout";

const App = () => (
  <Flex
    minHeight="100vh"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    height="100%"
  >
    <Box boxSize="lg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/callback/:provider" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </Box>
  </Flex>
);

export default App;
