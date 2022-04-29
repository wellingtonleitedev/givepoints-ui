import { Text, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

// import { Container } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box
      alignItems="center"
      bgColor="gray.200"
      display="flex"
      justifyContent="space-between"
      paddingY="1.5"
      paddingX="10"
    >
      <Text textColor="gray.900" fontSize="20">
        Givepoints
      </Text>
      <Button type="button" colorScheme="purple" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Header;
