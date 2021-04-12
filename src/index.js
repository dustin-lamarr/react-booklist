import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    {/* This is the context for auth0 authorization */}
    <Auth0Provider
      domain="utahfcc.us.auth0.com"
      clientId="HHZh0i3sjWdpntTOKAq5YAYJrTgjYkym"
      redirectUri={window.location.origin}
      audience="https://utahfcc.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
