import React from "react";
import { Box, Button, Link, Avatar } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const Header: React.FC = () => {
  const { handleLogout } = useAuth();

  return (
    <Box
      alignItems="center"
      bgColor="gray.200"
      display="flex"
      justifyContent="space-between"
      paddingY="1.5"
      paddingX="10"
    >
      <Link as={RouterLink} to="/" textColor="gray.900" fontSize="20">
        Givepoints
      </Link>
      <Box display="flex" alignItems="center" gap="5">
        <Button type="button" colorScheme="purple" onClick={handleLogout}>
          Logout
        </Button>
        <Link as={RouterLink} to="user">
          <Avatar colorScheme="purple" />
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
