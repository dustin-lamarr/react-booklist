import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthenticateRoute from "./AuthenticateRoute";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import LandingPage from "../pages/Landing";
import DashboardPage from "../pages/Dashboard";
import ProfilePage from "../pages/Profile";
import SendRequest from "../pages/sendRequest";

function App() {
  const { isAuthenticated } = useAuth0();
  const authedRedirect = (Component) => {
    return isAuthenticated ? <Redirect to="/dashboard" /> : <Component />;
  };
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            {authedRedirect(LandingPage)}
          </Route>
          <AuthenticateRoute path="/dashboard">
            <DashboardPage />
          </AuthenticateRoute>
          <AuthenticateRoute path="/profile">
            <ProfilePage />
          </AuthenticateRoute>
          <AuthenticateRoute path="/send">
            <SendRequest />
          </AuthenticateRoute>
        </Switch>
      </main>
    </>
  );
}

export default App;
