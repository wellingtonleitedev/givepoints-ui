import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import AppLayout from "../layout/AppLayout";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const {
    data: { user },
  } = useAuth();

  return user?.twitchLogged && user?.twitterLogged ? (
    <AppLayout>{children}</AppLayout>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
