import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthenticated } from "../context/auth-context";

export default function AuthenticateRoute({ children }) {
  const { isAuthenticated } = useAuthenticated();
  return isAuthenticated ? children : <Redirect to="/login" />;
}
