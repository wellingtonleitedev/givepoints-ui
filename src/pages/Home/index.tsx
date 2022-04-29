import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import { Navigate } from "react-router-dom";
import { FaTwitch, FaTwitter } from "react-icons/fa";
import useLocalStorage from "../../hooks/useLocalStorage";
import api from "../../services/api";

const Home: React.FC = () => {
  const [user] = useLocalStorage("@givepoints:user");
  const handleTwitterSignin = async () => {
    try {
      const { data } = await api.get("auth/twitter");
      window.location.replace(data.url);
    } catch (error) {
      console.error({ error });
    }
  };

  const handleTwitchSignin = async () => {
    try {
      const { data } = await api.get("auth/twitch");
      window.location.replace(data.url);
    } catch (error) {
      console.error({ error });
    }
  };

  return user.twitterLogged && user.twitchLogged ? (
    <Navigate replace to="/dashboard" />
  ) : (
    <Box
      boxSize="full"
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <ButtonGroup width="lg" flexDirection="column" gap={10}>
        <Button
          size="lg"
          type="button"
          colorScheme="purple"
          leftIcon={<FaTwitch />}
          marginInlineStart="0 !important"
          onClick={handleTwitchSignin}
        >
          Twitch Sign in
        </Button>
        <Button
          size="lg"
          type="button"
          colorScheme="twitter"
          leftIcon={<FaTwitter />}
          marginInlineStart="0 !important"
          onClick={handleTwitterSignin}
        >
          Twitter Sign in
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Home;
