import React from "react";
import { Routes as RoutesElement, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Callback from "../pages/Callback";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";

const Routes: React.FC = () => (
  <RoutesElement>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/callback/:provider" element={<Callback />} />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
    <Route
      path="/user"
      element={
        <PrivateRoute>
          <User />
        </PrivateRoute>
      }
    />
  </RoutesElement>
);

export default Routes;
