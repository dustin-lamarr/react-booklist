import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated } = useAuth0();

  let homeButton = (
    <li className="mr-5">
      <Link to="/">Home</Link>
    </li>
  );

  let profile = null;
  if (isAuthenticated) {
    homeButton = (
      <li className="mr-5">
        <Link to="/dashboard">Dashboard</Link>
      </li>
    );
    profile = (
      <li className="mr-5">
        <Link to="/profile">Profile</Link>
      </li>
    );
  }

  return (
    <header className="p-10 bg-gray-100">
      <nav className="flex">
        <ul className="flex">
          {homeButton}

          {profile}
        </ul>
        <ul className="flex">
          <LoginButton />
          <LogoutButton />
        </ul>
      </nav>
    </header>
  );
}
