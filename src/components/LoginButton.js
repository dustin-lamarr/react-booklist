import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return (
    !isAuthenticated && (
      <li className="mr-5">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </li>
    )
  );
};

export default LoginButton;
