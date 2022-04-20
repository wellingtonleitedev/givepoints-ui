import React, { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import api from "../../services/api";

const Callback: React.FC = () => {
  const params = useParams();
  const { search } = useLocation();
  const [user, setUser] = useLocalStorage("@givepoints:user");
  const [token, setToken] = useLocalStorage("@givepoints:token");

  const handleAuth = async () => {
    const { data } = await api.get(`auth/callback/${params.provider}${search}`);

    setUser(data.user);
    setToken(data.token);
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return user.twitchLogged && user.twitterLogged ? (
    <Navigate replace to="/dashboard" />
  ) : (
    <Navigate replace to="/" />
  );
};

export default Callback;
