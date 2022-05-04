import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface AuthProps {
  data: AuthState;
  loading: boolean;
  handleSignIn(provider: string, search: string): void;
  handleLogout(): void;
}

interface AuthState {
  user: User;
  token: string;
}

interface User {
  id: string;
  name: string;
  twitchUsername: string;
  message: string;
  newAmount: number;
  twitchLogged: boolean;
  twitterLogged: boolean;
}

const AuthContext = createContext({} as AuthProps);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem("@givepoints:user");
    const token = localStorage.getItem("@givepoints:token");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        user: JSON.parse(user),
        token,
      };
    }

    return {} as AuthState;
  });

  const handleSignIn = useCallback(async (provider: string, search: string) => {
    try {
      setLoading(true);

      const {
        data: { user, token },
      } = await api.get(`auth/callback/${provider}${search}`);

      localStorage.setItem("@givepoints:user", JSON.stringify(user));
      localStorage.setItem("@givepoints:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("@givepoints:user");
    localStorage.removeItem("@givepoints:token");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ data, loading, handleSignIn, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
