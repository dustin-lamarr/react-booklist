import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthenticateRoute from "./AuthenticateRoute";
import Header from "./Header";
import LandingPage from "../pages/Landing";
import LoginPage from "../pages/Login";
import RegistrationPage from "../pages/Registration";
import DashboardPage from "../pages/Dashboard";
import { useAuthenticated } from "../context/auth-context";

function App() {
  const { isAuthenticated } = useAuthenticated();
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
          <Route path="/login">{authedRedirect(LoginPage)}</Route>
          <Route path="/register">{authedRedirect(RegistrationPage)}</Route>
          <AuthenticateRoute path="/dashboard">
            <DashboardPage />
          </AuthenticateRoute>
        </Switch>
      </main>
    </>
  );
}

export default App;
