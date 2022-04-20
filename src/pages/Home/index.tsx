import { Navigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import api from "../../services/api";
import "./styles.css";

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
    <section className="content">
      <button type="button" onClick={handleTwitchSignin}>
        Twitch Sign in
      </button>
      <br />
      <button type="button" onClick={handleTwitterSignin}>
        Twitter Sign in
      </button>
    </section>
  );
};

export default Home;
