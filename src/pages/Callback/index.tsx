import React, { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const Callback: React.FC = () => {
  const params = useParams();
  const { search } = useLocation();
  const {
    data: { user },
    handleSignIn,
  } = useAuth();

  useEffect(() => {
    handleSignIn(params.provider!, search);
  }, []);

  return user?.twitchLogged && user?.twitterLogged ? (
    <Navigate replace to="/" />
  ) : (
    <Navigate replace to="/signin" />
  );
};

export default Callback;
